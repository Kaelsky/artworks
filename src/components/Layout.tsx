import { ReactElement } from "react";
import { Box } from "rebass/styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

interface LayoutProps {
  children: ReactElement;
}

function Layout({ children }: LayoutProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Box px={["1em", "4em", "16em"]} py="1em" fontFamily="VarelaRound">
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
