import {
  FaCheck,
  FaCheckCircle,
  FaHourglassEnd,
  FaMapPin,
  FaTruck,
} from "react-icons/fa";
import { Box, Flex } from "rebass/styled-components";
import styled from "styled-components";
import { fadeFromRightAnimation } from "./animations";
import { Button, Capitalize, Input } from "./elements";
import { Star } from "./Star";
import { numberWithCommas } from "./utils";

const Wrapper = styled(Box)`
  animation: ${fadeFromRightAnimation};

  & img {
    max-width: 100%;
    height: auto;
  }
`;

interface DescriptionProps {
  data: any;
}

export function Description({ data }: DescriptionProps) {
  const { title, artistShort, category, creationYear, dimensions, price } =
    data;

  return (
    <Wrapper maxWidth={["100%", 320]}>
      <Flex justifyContent="space-between" alignItems="center" pb={2}>
        <h2>{title}</h2>
        <Star />
      </Flex>
      <Flex>
        <Box color="primary" fontWeight="bold" pr={2}>
          {artistShort.fullname}
        </Box>
        <Capitalize>{artistShort.country}</Capitalize>
      </Flex>

      <Box py={3}>
        <Flex>
          <Capitalize>{category}</Capitalize>, {creationYear}
        </Flex>
        <Box>
          {dimensions.width} W x {dimensions.height} H x {dimensions.depth}D in
        </Box>
      </Box>

      <Box py={2}>
        <h2>{numberWithCommas(price)} €</h2>
      </Box>

      <Flex flexDirection="column" width="100%" py={2}>
        <Button bg="black" color="white" mb={3}>
          Acquire
        </Button>
        <Button bg="white" color="black">
          Make an offer
        </Button>
        {/* <button>Make an offer</button> */}
      </Flex>

      <Flex py={2}>
        <Box mr={2}>
          <FaHourglassEnd />
        </Box>
        PRE-RESERVE FOR 24 HOURS
      </Flex>

      <Flex py={2}>
        <Box mr={2}>
          <FaCheck />
        </Box>
        <strong>131€ estimated delivery fee</strong>
        &nbsp;for France
      </Flex>

      <Flex py={2}>
        In order to obtain an accurate delivery fee, please enter your country
        of residence and zip code:
      </Flex>

      <Flex pb={3}>
        <Input type="text" name="country" placeholder="SPAIN" disabled />
        <Input type="text" name="zipcode" placeholder="SPA81932IN" disabled />
      </Flex>

      <Flex>
        <Box mr={2}>
          <FaTruck />
        </Box>
        Delivery fee is 129 €
      </Flex>
      <Box py={3}>
        <Flex py={2}>
          <Box mr={2}>
            <FaMapPin />
          </Box>
          free pickup in&nbsp;<strong>Bruxelles, Belgium</strong>
        </Flex>
        <Flex>
          <Box mr={2}>
            <FaCheckCircle />
          </Box>
          Try 14 days at home for free
        </Flex>
      </Box>
    </Wrapper>
  );
}
