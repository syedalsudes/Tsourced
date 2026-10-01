import { NextResponse } from 'next/server';
import { transporter } from '@/lib/nodemailer';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export async function POST(req: Request) {
  try {
    const { customer, cart, totalItems } = await req.json();

    if (!customer?.firstName || !customer?.email || !cart || cart.length === 0) {
      return NextResponse.json(
        { error: 'Incomplete checkout information' },
        { status: 400 }
      );
    }

    const orderId = `RFQ-${Date.now().toString().slice(-6)}`;
    const submissionDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    // 1. Generate Email HTML Table Rows for Cart
    const itemsHtml = cart
      .map(
        (item: any, idx: number) => `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 12px; vertical-align: top; font-weight: bold; color: #092834;">
            #${idx + 1} ${item.name}
            <div style="font-size: 11px; color: #64748b; font-weight: normal; margin-top: 4px;">
              Category: ${item.category}
            </div>
          </td>
          <td style="padding: 12px; vertical-align: top; font-size: 12px; color: #334155;">
            <div><strong>Fabric:</strong> ${item.fabric?.join(', ') || 'N/A'}</div>
            <div><strong>Weight:</strong> ${item.weight?.join(', ') || 'N/A'}</div>
            <div><strong>Fit:</strong> ${item.fit?.join(', ') || 'N/A'}</div>
            <div><strong>Sizes:</strong> ${item.sizes?.join(', ') || 'N/A'}</div>
            <div><strong>Colors:</strong> ${item.colors?.join(', ') || 'N/A'}</div>
            <div><strong>Finishing:</strong> ${item.additionalOptions?.join(', ') || 'N/A'}</div>
          </td>
          <td style="padding: 12px; vertical-align: top; text-align: center; font-weight: bold; color: #FF5A00; font-size: 14px;">
            ${item.quantity} pcs
          </td>
        </tr>
      `
      )
      .join('');

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #092834; max-width: 700px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #092834; padding: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px;">Formal B2B Quotation Request</h2>
          <p style="color: #FF5A00; margin: 6px 0 0 0; font-weight: bold; font-size: 13px; letter-spacing: 1px;">ORDER ID: ${orderId} | DATE: ${submissionDate}</p>
        </div>

        <div style="padding: 24px;">
          <!-- Customer Section -->
          <h3 style="color: #FF5A00; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; font-size: 16px; margin-top: 0;">Client Representative</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; width: 140px;">Name:</td>
              <td style="font-weight: bold; color: #092834;">${customer.firstName} ${customer.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Email:</td>
              <td><a href="mailto:${customer.email}" style="color: #FF5A00; text-decoration: none;">${customer.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Phone:</td>
              <td style="color: #092834;">${customer.phone}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Company:</td>
              <td style="color: #092834;">${customer.company || 'Not Specified'}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Location:</td>
              <td style="color: #092834;">${customer.city}, ${customer.province}, ${customer.country}</td>
            </tr>
          </table>

          <!-- Cart Products Section -->
          <h3 style="color: #FF5A00; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; font-size: 16px;">Requested Garment Specifications</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; border: 1px solid #e2e8f0;">
            <thead>
              <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0; text-align: left; font-size: 12px; text-transform: uppercase;">
                <th style="padding: 10px;">Item</th>
                <th style="padding: 10px;">Custom Specs</th>
                <th style="padding: 10px; text-align: center;">Target Qty</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div style="background: #f8fafc; padding: 12px 18px; border-radius: 8px; text-align: right; margin-bottom: 20px;">
            <span style="font-size: 14px; color: #64748b;">Total Units Requested: </span>
            <strong style="font-size: 18px; color: #FF5A00;">${totalItems} pieces</strong>
          </div>

          <!-- Additional Notes -->
          <h3 style="color: #FF5A00; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; font-size: 16px;">Client Instructions / Notes</h3>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 14px; color: #334155; white-space: pre-wrap;">
            ${customer.additionalMessage || 'No specific instructions provided.'}
          </div>
        </div>

        <div style="background-color: #f8fafc; padding: 14px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          A PDF copy of this quotation summary is attached with this email.
        </div>
      </div>
    `;

    // 2. Generate PDF using jsPDF + autoTable
    const doc = new jsPDF();

    // Header Branding
    doc.setFillColor(9, 40, 52); // #092834
    doc.rect(0, 0, 210, 35, 'F');

    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text('QUOTATION REQUEST SUMMARY', 14, 20);

    doc.setFontSize(10);
    doc.setTextColor(255, 90, 0); // #FF5A00
    doc.text(`ID: ${orderId} | DATE: ${submissionDate}`, 14, 28);

    // Customer Details in PDF
    doc.setTextColor(9, 40, 52);
    doc.setFontSize(12);
    doc.text('CLIENT INFORMATION', 14, 45);

    autoTable(doc, {
      startY: 48,
      theme: 'plain',
      body: [
        ['Client Name:', `${customer.firstName} ${customer.lastName}`, 'Company:', customer.company || 'N/A'],
        ['Email:', customer.email, 'Phone:', customer.phone],
        ['Location:', `${customer.city}, ${customer.province}, ${customer.country}`, 'Total Units:', `${totalItems} pcs`],
      ],
      styles: { fontSize: 9, cellPadding: 2 },
      columnStyles: {
        0: { fontStyle: 'bold', textColor: [100, 116, 139], cellWidth: 28 },
        1: { cellWidth: 70 },
        2: { fontStyle: 'bold', textColor: [100, 116, 139], cellWidth: 28 },
        3: { cellWidth: 60 },
      },
    });

    // Cart Items Table in PDF
    const tableRows = cart.map((item: any, idx: number) => [
      `#${idx + 1} ${item.name}\n(${item.category})`,
      `Fabric: ${item.fabric?.join(', ') || 'N/A'}\nWeight: ${item.weight?.join(', ') || 'N/A'}\nFit: ${item.fit?.join(', ') || 'N/A'}\nSizes: ${item.sizes?.join(', ') || 'N/A'}\nColors: ${item.colors?.join(', ') || 'N/A'}\nOptions: ${item.additionalOptions?.join(', ') || 'N/A'}`,
      `${item.quantity} pcs`,
    ]);

    const finalY = (doc as any).lastAutoTable?.finalY || 70;

    doc.setFontSize(12);
    doc.setTextColor(9, 40, 52);
    doc.text('GARMENT SPECIFICATIONS', 14, finalY + 12);

    autoTable(doc, {
      startY: finalY + 16,
      head: [['Item', 'Specifications', 'Quantity']],
      body: tableRows,
      headStyles: { fillColor: [9, 40, 52], textColor: [255, 255, 255], fontStyle: 'bold' },
      styles: { fontSize: 8, cellPadding: 3, overflow: 'linebreak' },
      columnStyles: {
        0: { cellWidth: 50, fontStyle: 'bold' },
        1: { cellWidth: 110 },
        2: { cellWidth: 25, halign: 'center', fontStyle: 'bold', textColor: [255, 90, 0] },
      },
    });

    // Notes Section in PDF
    const notesY = (doc as any).lastAutoTable?.finalY || 160;
    if (customer.additionalMessage) {
      doc.setFontSize(11);
      doc.setTextColor(9, 40, 52);
      doc.text('CLIENT NOTES & INSTRUCTIONS:', 14, notesY + 12);

      doc.setFontSize(9);
      doc.setTextColor(70, 70, 70);
      const splitText = doc.splitTextToSize(customer.additionalMessage, 180);
      doc.text(splitText, 14, notesY + 18);
    }

    // Convert PDF to Buffer
    const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

    // 3. Send Email with PDF Attachment via Nodemailer
    await transporter.sendMail({
      from: `"Checkout Quote" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: customer.email,
      subject: `[New Checkout Quote] ${orderId} - ${customer.firstName} ${customer.lastName} (${totalItems} pcs)`,
      html: emailHtml,
      attachments: [
        {
          filename: `Quote_${orderId}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    return NextResponse.json({ success: true, message: 'Quote submitted successfully with PDF!' });
  } catch (error) {
    console.error('Checkout API Error:', error);
    return NextResponse.json({ error: 'Failed to process checkout request' }, { status: 500 });
  }
}