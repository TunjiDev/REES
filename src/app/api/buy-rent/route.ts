import { NextResponse } from "next/server";
import { Resend } from "resend";
import SuccessEmailToClient from "../../emails/post-property-toclient";
import SuccessEmailToMe from "../../emails/post-property-tome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email, rentOrSale } = await request.json();

  // Send email to myself
  await resend.sendEmail({
    from: "Rees<onboarding@resend.dev>",
    to: "adetunjiigbatayo@gmail.com",
    subject: `${firstName} posted a property!`,
    reply_to: email,
    react: SuccessEmailToMe({ firstName, rentOrSale }),
  });

  // Send email to client
  // await resend.sendEmail({
  //   from: "Rees<onboarding@resend.dev>",
  //   to: email,
  //   subject: `REES has a new message for you!`,
  //   reply_to: "adetunjiigbatayo@gmail.com",
  //   react: SuccessEmailToClient({ firstName, rentOrSale }),
  // });

  return NextResponse.json({
    status: "success",
    message: "Email sent successfully",
    data: { firstName, rentOrSale },
  });
}
