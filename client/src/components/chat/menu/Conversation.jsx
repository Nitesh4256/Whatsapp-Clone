import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../contaxt/AccountProvider";

import { setConversation } from "../../../service/api";
const Componentt = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 15px",
});
function Conversation({ user }) {
  const { setPerson, account } = useContext(AccountContext);

  const getUser = async () => {
    setPerson(user);

    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };
  return (
    <>
      <Componentt onClick={() => getUser()}>
        <Box>
          <Image src={user.picture} alt="" />
        </Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Componentt>
    </>
  );
}

export default Conversation;
