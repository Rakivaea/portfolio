import { createTheme } from "@mui/material";

const globalTheme = createTheme({
  palette: {
    background: {
      default: "rgb(13, 71, 161)",
    },
    mode: "light",
    primary: {
      main: "rgb(13, 71, 161)",
    },
    secondary: {
      main: "rgb(255,255,255)",
    },
  },
});

export const lightTheme = createTheme(
  {
    typography: {
      h3: {
        "&::after": {
          content: `" "`,
          display: "block",
          border: `2px solid ${globalTheme.palette.primary.main}`,
          width: 60,
        },
        color: globalTheme.palette.primary.main,
        fontSize: "3rem",
        fontWeight: 400,
        margin: 0,
        marginBottom: 1,
      },
    },
  },
  globalTheme
);
