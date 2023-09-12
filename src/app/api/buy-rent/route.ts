import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SuccessEmail } from "../../emails/buy-rent";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email, rentOrSale } = await request.json();

  await resend.sendEmail({
    from: "Rees<onboarding@resend.dev>",
    to: email,
    subject: `${firstName} has a new message for you!`,
    reply_to: "adetunjiigbatayo@gmail.com",
    react: SuccessEmail({ firstName, rentOrSale }),
  });

  return NextResponse.json({
    status: "success",
    message: "Email sent successfully",
    data: { firstName, rentOrSale },
  });
}
