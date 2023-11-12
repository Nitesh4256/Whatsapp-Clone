import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
function HeaderMenu({ setOpenDrawer }) {
  const [open, setOpen] = useState(null);
  const handleClose = () => {
    setOpen(null);
  };
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
  `;
  return (
    <>
      <MoreVert onClick={handleClick} />

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorE1={null}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuOption>
      </Menu>
    </>
  );
}

export default HeaderMenu;
