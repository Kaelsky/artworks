import { FaCube, FaEye } from "react-icons/fa";
import { Box, Flex } from "rebass/styled-components";
import { Collapsable } from "./Collapsable";
import { Hoverable, Illustration } from "./elements";
import { Meta } from "./Meta";
import { Image } from "./Image";

interface ShowcaseProps {
  data: any;
}

export function Showcase({ data }: ShowcaseProps) {
  const { imageUrl, description, subjects, mediums, styles, materials } = data;
  return (
    <Box>
      <Box maxWidth={["100%", 500]}>
        <Illustration bg="primary" />
        <Image imageUrl={imageUrl} />
        <Flex py={3}>
          <Hoverable>
            <FaEye />
            <Box pl={1}>VIEW IN A ROOM</Box>
          </Hoverable>
          <Hoverable>
            <FaCube />
            <Box pl={1}>AR VIEW</Box>
          </Hoverable>
        </Flex>
      </Box>

      <Collapsable title="DESCRIPTION">
        <p>{description}</p>
      </Collapsable>
      <Collapsable title="SUBJECT, MEDIUM, STYLE, MATERIALS">
        <Meta title="Subjects" data={subjects} />
        <Meta title="Mediums" data={mediums} />
        <Meta title="Styles" data={styles} />
        <Meta title="Materials" data={materials} />
      </Collapsable>
    </Box>
  );
}
