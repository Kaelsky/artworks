import { FaRegStar, FaStar } from "react-icons/fa";
import { Flex } from "rebass/styled-components";
import styled from "styled-components";
import { useToggler } from "../hooks/useToggler";
import { tiltAnimation } from "./animations";

interface WrapperProps {
  $isToggled: boolean;
}

const Wrapper = styled(Flex)<WrapperProps>`
  cursor: pointer;
  &:hover {
    animation: ${({ $isToggled }) => ($isToggled ? "none" : tiltAnimation)};
  }
`;

export function Star() {
  const [isToggled, toggle] = useToggler(false);
  return (
    <Wrapper
      color={isToggled ? "primary" : "disabled"}
      $isToggled={isToggled}
      onClick={toggle}
      fontSize={24}
    >
      {isToggled ? <FaStar width="50px" /> : <FaRegStar width="50px" />}
    </Wrapper>
  );
}
