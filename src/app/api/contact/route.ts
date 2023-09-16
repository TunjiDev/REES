import { NextResponse } from "next/server";
import { Resend } from "resend";
import SuccessEmailToClient from "../../emails/contact-toclient";
import SuccessEmailToMe from "../../emails/contact-tome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, lastName, email, message } = await request.json();

  // Send email to myself
  await resend.sendEmail({
    from: "Rees<onboarding@resend.dev>",
    to: "adetunjiigbatayo@gmail.com",
    subject: `${firstName} has a new message for you!`,
    reply_to: email,
    react: SuccessEmailToMe({ firstName, lastName, message }),
  });

  // Send email to client
  // await resend.sendEmail({
  //   from: "Rees<onboarding@resend.dev>",
  //   to: email,
  //   subject: `Thanks for reaching out!`,
  //   reply_to: "adetunjiigbatayo@gmail.com",
  //   react: SuccessEmailToClient({ firstName }),
  // });

  return NextResponse.json({
    status: "success",
    message: "Email sent successfully",
    data: { firstName },
  });
}
