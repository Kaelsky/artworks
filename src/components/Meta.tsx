import { ReactElement } from "react";
import { Box, Flex } from "rebass/styled-components";

export const Meta = ({
  title,
  data,
}: {
  title: string;
  data: string[];
}): ReactElement => {
  return (
    <Flex py="2">
      <Box fontWeight="bold" pr={1}>
        {title}:
      </Box>
      <Box>{data.join(", ")}</Box>
    </Flex>
  );
};
