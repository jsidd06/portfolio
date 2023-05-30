import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./home.css";
import SocialLinks from "../../components/social-link/social-links";
import ModalComponents from "../../components/modals/modals";

import BodyContainer from "../../components/bodyContainer/bodyContainer";
import { CONSTANTS_DATA } from "../../constants/ui-constants/ui-constants";
import { CONSTANTS_IMAGES } from "../../constants/image-constants/image-constants";

interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    thumbnails: {
      medium: {
        url: string;
      };
    };
    title: string;
  };
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export function Home(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [videos, setVideos] = React.useState<VideoItem[]>([]);
  const [action, setAction] = React.useState(false);

  React.useEffect(() => {
    setAction(false);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Code Madness
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Code Madness
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
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
        <div className="container">
          <div className="subContainer">
            <img src={CONSTANTS_IMAGES.expImg} alt="image" className="img" />
            <ModalComponents
              buttonText="Experience"
              heading="Experience"
              description="sfdjkf"
            />
          </div>
          <div className="subContainer">
            <img src={CONSTANTS_IMAGES.skillImg} alt="image" className="img" />
            <ModalComponents
              buttonText="Skills"
              heading="Skills"
              description="sfdjkf"
            />
          </div>
          <div className="subContainer">
            <img src={CONSTANTS_IMAGES.educImg} alt="image" className="img" />
            <ModalComponents
              buttonText="Education"
              heading="Education"
              description="sfdjkf"
            />
          </div>
          <div className="subContainer">
            <img src={CONSTANTS_IMAGES.hobImg} alt="image" className="img" />
            <ModalComponents
              buttonText="Hobbies"
              heading="Hobbies"
              description="sfdjkf"
            />
          </div>
          <div className="subContainer">
            <img src={CONSTANTS_IMAGES.lanImg} alt="image" className="img" />
            <ModalComponents
              buttonText="Languages"
              heading="Languages"
              description="sfdjkf"
            />
          </div>
        </div>
        <SocialLinks />
      </Box>
    </Box>
  );
}
