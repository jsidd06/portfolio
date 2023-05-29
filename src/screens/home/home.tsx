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
import Card from "../../components/cards/cards";
import { Col, Row, CardImg } from "reactstrap";
import s1Image from "../../images/s-1.png";

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
                Hello, I'm Siddharth Jain
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
        <Card />
      </Box>
    </Box>
  );
}
