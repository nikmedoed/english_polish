import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import App from "./App.jsx";
import "./style.css";

if (/^#(?:practice|rules|topics|stats|settings)$/.test(location.hash))
  history.replaceState(
    null,
    "",
    `${location.pathname}${location.search}#/${location.hash.slice(1)}`,
  );
const theme = createTheme({
  palette: {
    primary: { main: "#315f4b" },
    text: { primary: "#24352e", secondary: "#607267" },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: 16,
    button: { fontSize: "1rem", fontWeight: 400, textTransform: "none" },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: { minHeight: 44, padding: "9px 14px", lineHeight: 1.5 },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { fontSize: "1rem", fontFamily: "inherit" },
        input: {
          padding: "10px 12px",
          height: "auto",
          border: "1px solid #b9ccbf",
          borderRadius: 8,
          background: "white",
        },
      },
    },
  },
});
createRoot(document.getElementById("app")).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </StyledEngineProvider>,
);
