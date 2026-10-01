import { NextResponse } from 'next/server';
import { transporter } from '@/lib/nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      product,
      quantity,
      timeframe,
      projectDetails,
    } = data;

    if (!firstName || !lastName || !email || !phone || !product || !quantity) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #092834; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #092834; padding: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New B2B Quote Request</h2>
          <p style="color: #FF5A00; margin: 6px 0 0 0; font-weight: bold; font-size: 13px; letter-spacing: 1px;">PRODUCTION & MANUFACTURING INQUIRY</p>
        </div>

        <div style="padding: 24px;">
          <h3 style="color: #FF5A00; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; font-size: 16px; margin-top: 0;">Client Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; width: 140px;">Full Name:</td>
              <td style="font-weight: bold; color: #092834;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Email:</td>
              <td><a href="mailto:${email}" style="color: #FF5A00; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Phone:</td>
              <td style="color: #092834;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Company / Brand:</td>
              <td style="color: #092834;">${company || 'Not Specified'}</td>
            </tr>
          </table>

          <h3 style="color: #FF5A00; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; font-size: 16px;">Order & Manufacturing Specs</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; width: 140px;">Product:</td>
              <td style="font-weight: bold; color: #092834;">${product}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Target Quantity:</td>
              <td style="font-weight: bold; color: #FF5A00;">${quantity} pieces</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b;">Expected Timeline:</td>
              <td style="color: #092834;">${timeframe || 'Not Specified'}</td>
            </tr>
          </table>

          <h3 style="color: #FF5A00; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; font-size: 16px;">Project Notes & Customizations</h3>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 14px; color: #334155; white-space: pre-wrap;">
            ${projectDetails || 'No additional details provided.'}
          </div>
        </div>

        <div style="background-color: #f8fafc; padding: 14px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          Sent automatically from B2B Quote Request Form
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Quote Request" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: email,
      subject: `[Quote Request] ${product} (${quantity} pcs) - ${firstName} ${lastName}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: 'Quote submitted successfully!' });
  } catch (error) {
    console.error('Quote Email Error:', error);
    return NextResponse.json({ error: 'Failed to submit quote request' }, { status: 500 });
  }
}