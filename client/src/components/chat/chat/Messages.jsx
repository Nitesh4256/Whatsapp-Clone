import React from "react";
import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../contaxt/AccountProvider";
import { getMessage, newMessage } from "../../../service/api";
import Message from "./Message";
const Wrapper = styled(Box)`
  background-image: url(${`https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg`});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
const Container = styled(Box)`
  padding: 1px 80px;
`;
function Messages({ person, conversation }) {
  const { account } = useContext(AccountContext);
  const [value, setValue] = useState([]);
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const [image, setImage] = useState("");
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    console.log(code);

    if (code == 13) {
      let message = [];
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      await newMessage(message);
      setNewMessageFlag((prev) => !prev);
      setValue("");
      setFile("");
      // setImage("");
    }
  };

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(conversation._id);
      console.log(data.data);
      setMessages(data.data);
    };

    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);
  return (
    <>
      <Wrapper>
        <Component>
          {messages &&
            messages.map((message) => (
              <Container>
                <Message message={message} />
              </Container>
            ))}
        </Component>
        <Footer
          sendText={sendText}
          setValue={setValue}
          value={value}
          file={file}
          setFile={setFile}
          setImage={setImage}
        />
      </Wrapper>
    </>
  );
}

export default Messages;
