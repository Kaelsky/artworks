import { ReactElement } from "react";
import { Flex } from "rebass/styled-components";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  padding-bottom: 1em;
`;

const Breadcrumb = styled(Flex)`
  font-weight: bold;

  &:first-child {
    @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      display: none;
    }
  }

  &:not(:last-child) {
    color: #939393;

    &::after {
      content: ">";
      padding: 0 0.8em;
    }
  }
`;

interface BreadcrumbsProps {
  artist: string;
  title: string;
}

export const Breadcrumbs = ({
  artist,
  title,
}: BreadcrumbsProps): ReactElement => {
  return (
    <Container>
      <Breadcrumb>Home</Breadcrumb>
      <Breadcrumb>Painting</Breadcrumb>
      <Breadcrumb>{artist}</Breadcrumb>
      <Breadcrumb>{title}</Breadcrumb>
    </Container>
  );
};
