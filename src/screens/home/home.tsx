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
import { Col, Row, CardImg, Card } from "reactstrap";
import s1Image from "../../images/s-2.png";
import axios from "axios";
import "./home.css";
import SocialLinks from "../../components/social-link/social-links";
import ModalComponents from "../../components/modals/modals";

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
  React.useEffect(() => {
    // Fetch latest videos from YouTube Data API
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=2`
      )
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
            <div>
              <span
                style={{
                  fontSize: "2rem",
                  color: "red",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Hello, I'm Siddharth Jain{" "}
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              >
                a passionate Software Engineer with 1.8 years of industry
                experience. I hold a BCA degree and have a strong background in
                designing and developing innovative software solutions.
                Proficient in technologies like Javascript, React Native,
                React.js, Node.js, and Rest API, I am dedicated to delivering
                high-quality code and thrive in collaborative, cross-functional
                teams. Committed to continuous learning and staying up-to-date
                with the latest industry trends, I am excited to showcase my
                skills and contribute to impactful projects. Welcome to my
                portfolio website!
              </span>
            </div>
          </Col>
          <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
            <div>
              {/* <CardImg src={Pic} style={{ width: "80%", maxWidth: "700px" }} /> */}
              <CardImg
                src={s1Image}
                alt="Image"
                style={{ width: "80%", maxWidth: "700px" }}
              />
            </div>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
            <div className="cards-container">
              {videos.map((video) => (
                <a
                  key={video.id.videoId}
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <Card className="card-wrapper">
                    <div className="card-image-container">
                      <CardImg
                        src={video.snippet.thumbnails.medium.url}
                        className="card-image"
                      />
                    </div>
                    <div className="card-title">{video.snippet.title}</div>
                  </Card>
                </a>
              ))}
            </div>
          </Col>
          <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
            <div>
              <span
                style={{
                  fontSize: "2rem",
                  color: "red",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Welcome to Codemadness,{" "}
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              >
                where coding, gaming, and laughter collide! Join me on a mad
                journey filled with hilarious shorts, coding tutorials, gaming
                madness, and lipsync shenanigans. Unleash the laughter with
                quick and quirky videos, learn and giggle through coding
                challenges, and dive into epic gaming sessions. Experience the
                joy of lipsyncing with humor and style. Stay connected on
                Instagram, Twitter, GitHub, Facebook, and Josh for
                behind-the-scenes peeks and exclusive content. Get ready for a
                rollercoaster ride of laughter, coding adventures, gaming
                thrills, and pure entertainment at Codemadness!
              </span>
            </div>
          </Col>
        </Row>
        <ModalComponents />
        <ModalComponents />
        {/* <SocialLinks /> */}
      </Box>
    </Box>
  );
}
