import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SuccessEmail } from "../../../../emails/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName } = await request.json();

  await resend.sendEmail({
    from: "Acme <onboarding@resend.dev>", //replace with vercel domain
    to: "adetunjiigbatayo@gmail.com",
    subject: "REES has a new message for you!",
    react: SuccessEmail(firstName),
  });

  return NextResponse.json({
    status: "success",
  });
}
