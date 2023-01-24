import { Flex } from "rebass/styled-components";
import styled from "styled-components";
import { fadeInAnimation } from "./animations";

const Container = styled(Flex)`
  animation: ${fadeInAnimation};

  & img {
    max-width: 100%;
    height: auto;
  }
`;

interface ImageProps {
  imageUrl: string;
}

export function Image({ imageUrl }: ImageProps) {
  return (
    <Container>
      <img alt="artwork showcase" src={imageUrl} />
    </Container>
  );
}

// ${fadeFromLeft} 0.5s ${theme.easing}
