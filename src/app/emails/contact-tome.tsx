import { Body, Container, Head, Hr, Html, Img, Preview, Text } from "@react-email/components";
import { Link } from "@react-email/link";
import * as React from "react";

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  message: string;
}

const SuccessEmail = ({ firstName, lastName, message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Discover Your Dream Home Today!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Link href="https://rees.vercel.app/">
            <Img
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/rees/logo.png`}
              width="120"
              height="50"
              alt="Logo"
              style={logo}
            />
          </Link>
          <Text style={paragraph}>Hi Tunji,</Text>
          <Text style={paragraph}>{message}</Text>
          <Text style={paragraph}>
            Regards, {firstName} {lastName}
          </Text>
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
