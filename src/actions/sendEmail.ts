// app/actions/sendEmail.ts
"use server";

import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export async function sendEmail(formData: FormData): Promise<EmailResponse> {
  const { name, email, message } = formData;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "sebastian.patrici@gmail.com",
    subject: `New message from ${name}`,
    text: `From: ${email}\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send email" };
  }
}
