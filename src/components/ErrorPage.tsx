import { Flex } from "rebass/styled-components";

export function ErrorPage() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      flexDirection="column"
    >
      <h1>Oops!</h1>
      <p>This page doesn't exist.</p>
    </Flex>
  );
}
