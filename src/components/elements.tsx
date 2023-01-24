import { Box, Flex } from "rebass";
import styled from "styled-components";

export const Hoverable = styled(Flex)`
  align-items: center;
  transition: all 0.1s ease-out;
  cursor: pointer;
  flex: 1;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    font-weight: 600;
  }
`;

export const Capitalize = styled(Box)`
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Illustration = styled(Box)`
  position: absolute;
  width: 6px;
  height: 10em;
  left: 0;
`;

export const Button = styled(Flex)`
  justify-content: center;
  border: 1px solid #000;
  border-radius: 50px;
  padding: 0.4em 0;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Input = styled.input`
  padding: 0.6em 0;
`;
