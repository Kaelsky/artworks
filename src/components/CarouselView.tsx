import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Flex } from "rebass/styled-components";
import styled from "styled-components";
import { fadeFromBottomtAnimation } from "./animations";

const LeftArrow = styled(FaChevronLeft)`
  transition: all 0.2s ease-out;
  position: absolute;
  cursor: pointer;
  height: 100px;
  left: 0;

  &:hover {
    transform: scale(1.2);
  }
`;
const RightArrow = styled(FaChevronRight)`
  transition: all 0.2s ease-out;
  position: absolute;
  cursor: pointer;
  height: 100px;
  right: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

interface SlideProps {
  $index: number;
}

const Slide = styled(Flex)<SlideProps>`
  opacity: 0;
  animation: ${fadeFromBottomtAnimation};
  animation-fill-mode: forwards;
  animation-delay: ${({ $index }) => $index * 100}ms;
  user-select: none;
  cursor: pointer;
  height: 150px;
  width: 200px;

  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface CarouselViewProps {
  otherArtworks: string[];
}

export function CarouselView({ otherArtworks }: CarouselViewProps) {
  return (
    <Box py={4}>
      <Carousel
        responsive={responsive}
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
      >
        {otherArtworks.map((artwork, index) => (
          <Slide key={artwork} $index={index}>
            <img alt="other artwork showcase" src={artwork} draggable={false} />
          </Slide>
        ))}
      </Carousel>
    </Box>
  );
}
