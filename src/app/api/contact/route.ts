import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SuccessEmail } from "../../emails/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, lastName, email, message } = await request.json();

  await resend.sendEmail({
    from: "Rees<onboarding@resend.dev>",
    to: "adetunjiigbatayo@gmail.com",
    subject: `${firstName} has a new message for you!`,
    reply_to: email,
    react: SuccessEmail({ firstName, lastName, message }),
  });

  return NextResponse.json({
    status: "success",
    message: "Email sent successfully",
    data: { firstName },
  });
}
