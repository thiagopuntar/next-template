export const breakpoints = {
  xs: "35em",
  sm: "56em",
  md: "75em",
  lg: "93em",
};

export const breakAt = (breakpoint: keyof typeof breakpoints) =>
  `@media screen and (min-width: ${breakpoints[breakpoint]})`;
