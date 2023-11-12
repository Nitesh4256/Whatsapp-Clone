import React from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { addUser } from "../../service/api";
import { AccountContext } from "../contaxt/AccountProvider";
const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;
const QRcode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px ",
});
const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
  }
`;
const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);
  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);

    setAccount(decoded);
    await addUser(decoded);
  };
  const onLoginError = () => {};
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use WhatsApp Sign Up with Google ...</Title>

          <StyledList>
            <ListItem>Whatapp Clone...</ListItem>
            <ListItem>Created by Nitesh Shivhare...</ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRcode
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHJBsOCCPz4qjndG7psLlf4vb8Kr_ner2sarFF4KlkA&s"
            alt=""
          />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(25%",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
