import { Heading, Link, Container } from "@chakra-ui/react";

const HomePage: React.FC = () => {
  return (
    <>
      <Container
        bg={'green.400'}
        alignItems={'end'}
        mt={'30%'}
        p={7}
        pr={10}
        borderRadius={'12px'}
      >
        <Heading>Let's do this!</Heading>
        <Link href="/login">Login page</Link>
      </Container>
    </>
  );
};

export default HomePage;
