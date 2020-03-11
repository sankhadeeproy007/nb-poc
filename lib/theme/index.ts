import { createTheming } from "@callstack/react-theme-provider";

import defaultTheme from "./theme";

export const { ThemeProvider, withTheme, useTheme } = createTheming(
  defaultTheme
);
