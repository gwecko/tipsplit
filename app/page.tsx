import { Heading, Link, Container } from "@chakra-ui/react";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Container bg={"green.400"} alignItems={"end"} mt={"8rem"}>
        <Heading>Let's do this!</Heading>
        <Link href="/login">Login page</Link>
      </Container>
    </Container>
  );
};

export default LandingPage;
