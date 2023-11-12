import React, { useState } from "react";
import { useContext } from "react";
import { Box } from "@mui/material";
import { AccountContext } from "../../contaxt/AccountProvider";
import styled from "@emotion/styled";
import { Chat as MessageIcon } from "@mui/icons-material";
import Search from "./Search";

import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";
const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }

  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});
function Header() {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Component>
        <Image src={account.picture} alt="" onClick={() => toggleDrawer()} />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
}

export default Header;
