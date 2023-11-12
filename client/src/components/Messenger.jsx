import React from "react";
import LoginDialog from "./account/LoginDialog";
import { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "./contaxt/AccountProvider";
const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 250px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00a884;
  box-shadow: none;
`;
function Messenger() {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>

          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>

          <LoginDialog />
        </>
      )}
    </Component>
  );
}

export default Messenger;
