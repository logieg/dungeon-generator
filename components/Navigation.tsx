import { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  Divider,
  ButtonBase,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = () => setMenuOpen(!menuOpen);

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "rebeccapurple" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <ButtonBase style={{ padding: "6px", borderRadius: "4px" }}>
              <Typography variant="h5">Catfish Dungeon Generator</Typography>
            </ButtonBase>
          </Link>
        </Toolbar>
        <Drawer open={menuOpen} onClose={toggleDrawer}>
          <List>
            <ListItem>
              <Typography variant="h6">Generation Options</Typography>
            </ListItem>
          </List>
          <Divider />
          <List>
            <Link href="/map">
              <ListItem button onClick={toggleDrawer}>Dungeon Map</ListItem>
            </Link>
          </List>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navigation;
