import React from "react";
import { useContext } from "react";
import { AccountContext } from "../contaxt/AccountProvider";
import { Box, Typography, styled } from "@mui/material";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const DescriptionContainer = styled(Box)`
  padding: 15px 20px 20px 30px;
  & > p {
    font-size: 13px;
    color: #869880;
  }
`;
const Image = styled("img")({
  widht: 200,
  height: 200,
  borderRadius: "50%",
  padding: "25px 0 ",
});
const BoxWrapper = styled(Box)`
  background: #fff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  &: first-child {
    font-size: 30px;
    color: #009688;
  }
`;
function Profile() {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your Name:</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DescriptionContainer>
        <Typography>
          This is not your username or pin. This name will be visible to your
          whatapp contact
        </Typography>
      </DescriptionContainer>
      <BoxWrapper>
        <Typography>About:</Typography>
        <Typography>EveryThing is all about ming..</Typography>
      </BoxWrapper>
    </>
  );
}

export default Profile;
