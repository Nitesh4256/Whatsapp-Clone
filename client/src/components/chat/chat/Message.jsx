import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { formateDate } from "../../../utils/common-utils";

import { useContext } from "react";
import { AccountContext } from "../../contaxt/AccountProvider";
const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  display: flex;
  word-break: break-word;
`;
const Wrapper = styled(Box)`
  background: #fff;
  max-width: 60%;

  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  display: flex;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 15px;
  color: #919191;
  margin-top: auto;
  word-break: keep-all;
`;
function Message({ message }) {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.sub == message.senderId ? (
        <>
          <Own>
            <Text> {message.text}</Text>
            <Time>{formateDate(message.createdAt)}</Time>
          </Own>
        </>
      ) : (
        <Wrapper>
          <Text> {message.text}</Text>
          <Time>{formateDate(message.createdAt)}</Time>
        </Wrapper>
      )}
    </>
  );
}

export default Message;
