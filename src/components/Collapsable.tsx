import { ReactNode } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Box, Flex } from "rebass/styled-components";
import styled from "styled-components";
import { useToggler } from "../hooks/useToggler";

const Title = styled(Box)`
  padding: 0.8em 0em;
`;

const IconWrapper = styled(Flex)`
  opacity: 0;
  transition: all 0.2s ease-out;
`;

interface CollapsibleProps {
  $isOpen: boolean;
}

const Collapsible = styled(Flex)<CollapsibleProps>`
  & ${IconWrapper} {
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  }
  &:hover ${IconWrapper} {
    opacity: 1;
  }

  & header {
    width: 100%;
    cursor: pointer;
    border-bottom: 2px solid rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }

  & main {
    max-height: ${({ $isOpen }) => ($isOpen ? "100vh" : "0")};
    padding: ${({ $isOpen }) => ($isOpen ? ".3em 0" : "0")};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: all 0.3s ease-out;
    overflow: hidden;
  }
`;
interface CollapsableProps {
  title: ReactNode;
  children: ReactNode;
}
export function Collapsable({ title, children }: CollapsableProps) {
  const [isToggled, toggle] = useToggler(false);

  return (
    <Collapsible flexDirection="column" $isOpen={isToggled} onClick={toggle}>
      <header>
        <Flex justifyContent="space-between" alignItems="center">
          <Title>{title}</Title>
          <IconWrapper>{isToggled ? <FaMinus /> : <FaPlus />}</IconWrapper>
        </Flex>
      </header>
      <main>{children}</main>
    </Collapsible>
  );
}
