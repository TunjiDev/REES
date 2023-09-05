import { Body, Container, Head, Hr, Html, Img, Preview, Text } from "@react-email/components";
import { Link } from "@react-email/link";
import * as React from "react";

interface ContactEmailProps {
  firstname: string;
}

export const SuccessEmail = ({ firstname }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>The sales intelligence platform that helps you uncover qualified leads.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Link href="https://tunji-portfolio.netlify.app/">
            <Img
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/rees/logo.png`} /*`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/rees/${imageName}`*/
              width="120"
              height="50"
              alt="Logo"
              style={logo}
            />
          </Link>
          <Text style={paragraph}>Hi {firstname},</Text>
          <Text style={paragraph}>
            We hope this message finds you well. Thank you for reaching out to us at REES. We greatly appreciate your
            interest in our services and properties.
          </Text>

          <Text style={paragraph}>
            One of our dedicated team members will review your inquiry as soon as possible and respond promptly. Your
            satisfaction is our top priority, and we are committed to assisting you in finding your dream property,
            whether it&apos;s for sale or rent.
          </Text>

          <Text style={paragraph}>
            Best regards,
            <br />
            The REES team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Tunji&apos;s Lounge, Yaba Lagos, Nigeria</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default SuccessEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
