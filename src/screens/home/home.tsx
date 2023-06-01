import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./home.css";
import SocialLinks from "../../components/social-link/social-links";
import ModalComponents from "../../components/modals/modal-components";
import BodyContainer from "../../components/bodyContainer/bodyContainer";
import { CONSTANTS_DATA } from "../../constants/ui-constants/ui-constants";
import { CONSTANTS_IMAGES } from "../../constants/image-constants/image-constants";
import Footer from "../../components/footer/footer";

export function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Welcome to Code Madness
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <BodyContainer
          heading={CONSTANTS_DATA.name}
          description={CONSTANTS_DATA.describe}
          image={CONSTANTS_IMAGES.p1}
          action={false}
        />
        <BodyContainer
          heading={CONSTANTS_DATA.youtube_name}
          description={CONSTANTS_DATA.youtube_description}
          image={CONSTANTS_IMAGES.youtube_logo}
          action={true}
          link={CONSTANTS_DATA.youtube_channel_link}
        />
        <SocialLinks />
        <ModalComponents />

        <Footer email="jsidd06@gmail.com" />
      </Box>
    </Box>
  );
}
