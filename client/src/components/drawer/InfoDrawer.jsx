import React from "react";
import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";
function InfoDrawer({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const Header = styled(Box)`
    background: #008069;
    height: 107px;
    color: #ffffff;
    display: flex;
    & > svg,
    & > p {
      margin-top: auto;
      padding: 15px;
      font-weight: 600;
    }
  `;
  const Component = styled(Box)`
    background: #ededed;
    height: 85%;
  `;
  const drawerStyle = {
    left: 20,
    top: 20,
    width: "30%",
    boxShadow: "none",
    height: "95%",
  };
  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drawerStyle }}
        style={{
          zIndex: 1500,
        }}
      >
        <Header>
          <ArrowBack onClick={() => setOpen(false)} />
          <Typography>Profile</Typography>
        </Header>
        <Component>
          <Profile />
        </Component>
      </Drawer>
    </>
  );
}

export default InfoDrawer;
