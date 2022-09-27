import * as React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import StyledDivider from "./components/StyledDivider/StyledDivider";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { lightTheme } from "./themes/themes";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline enableColorScheme />
      <ParticlesBackground />
      <div className="App">
        <main>
          <Box>
            <Header />
            <StyledDivider />
          </Box>
          <Box sx={{ backgroundColor: "secondary.main" }}>
            <MainContent />
            <Footer />
          </Box>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
