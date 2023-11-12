import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../contaxt/AccountProvider";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Footer from "./Footer";
import { getConversation } from "../../../service/api";
function ChatBox() {
  const { person } = useContext(AccountContext);
  const { account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });

      setConversation(data.data);
    };
    getConversationDetails();
  }, [person.sub, account.sub]);
  return (
    <Box style={{ height: "75%;" }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
}

export default ChatBox;
