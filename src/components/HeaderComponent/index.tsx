import React from "react";
import { IContentHeaderProps } from "../../Interfaces/Interface";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as I from "../../Interfaces/Interface";
import * as C from "./styles";
import { useMyContext } from "../../context/Context";
import ReportIcon from "@mui/icons-material/Report";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ThermostatIcon from '@mui/icons-material/Thermostat';


const HeaderComponent: React.FC<IContentHeaderProps> = ({
  title,
  linecolor,
  children,
  children2,
}) => {
  const { state, dispatch } = useMyContext();
  const theme = useTheme();

  const drawerWidth = 240;

  

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    WebkitJustifyContent: "space-between",
    padding: theme.spacing(0, 1),
    gap: theme.spacing(0, 5),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleDrawerClose = () => {
    // setOpen(false);
    dispatch({
      type: I.ContextActions.setOpen,
      payload: false,
    });
  };

  const handleRedirect = (e: any, text: string) => {
    e.preventDefault();
    if (text === "Home") {
      window.location.href = "/home";
    } else if (text === "Ocorrências") {
      window.location.href = "/ocorrencias";
    } else if (text === "Alunos Advertidos") {
      window.location.href = "/alunos-advertidos";
    } else if (text === "Register") {
      window.location.href = "/register";
    } else if (text === "Log Out") {
      console.log("usuário deslogado");
    }
  };

  const DrawerPersistent = (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {/* <CssBaseline /> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={state.open}
      >
        <C.DrawerContainer>
          <DrawerHeader>
            <C.TempoContainer>
              <ThermostatIcon/> { state.tempo ? state.tempo : '' } ºC
            </C.TempoContainer>
            <div>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
          </DrawerHeader>
          <Divider />
          <List>
            {["Home", "Ocorrências", "Alunos Advertidos"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={(e) => handleRedirect(e, text)}>
                  <ListItemIcon>
                    {index === 0 && <HomeIcon />}
                    {index === 1 && <NoteAltIcon />}
                    {index === 2 && <ReportIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Register", "Log Out"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <PersonAddIcon />}
                    {index === 1 && <LogoutIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </C.DrawerContainer>
      </Drawer>
    </Box>
  );

  const handleDrawerOpen = () => {
    // setOpen(true);
    dispatch({
      type: I.ContextActions.setOpen,
      payload: true,
    });
  };

  return (
    <C.Container>
      <C.LeftContainer>
        <Toolbar>
          <C.ColorIconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(state.open && { display: "none" }) }}
          >
            <MenuIcon />
          </C.ColorIconButton>
          <C.TitleContainer $lineColor={linecolor}>
            <h1>{title}</h1>
          </C.TitleContainer>
        </Toolbar>
        {DrawerPersistent}
      </C.LeftContainer>
      {children2}
      <C.Controllers>{children}</C.Controllers>
    </C.Container>
  );
};

export default HeaderComponent;
