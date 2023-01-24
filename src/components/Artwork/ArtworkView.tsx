import { Flex } from "rebass/styled-components";
import styled from "styled-components";
import { Breadcrumbs } from "../Breadcrumbs";
import { CarouselView } from "../CarouselView";
import { Showcase } from "../Showcase";
import { Description } from "../Description";

const Container = styled(Flex)`
  gap: 6em;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    gap: 1em;
  }
`;

function ArtworkView({ data }: any) {
  const { title, artistShort, otherArtworkImages } = data;

  return (
    <>
      <Breadcrumbs artist={artistShort.fullname} title={title} />
      <Container flexDirection={["column", "row"]}>
        <Showcase data={data} />
        <Description data={data} />
      </Container>
      <CarouselView otherArtworks={otherArtworkImages} />
    </>
  );
}

export default ArtworkView;
