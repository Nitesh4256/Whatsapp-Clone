import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
const Component = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;
const Image = styled("img")({
  width: "100%",
  height: "100%",
});
function EmptyChat() {
  return (
    <>
      <Component>
        <Image
          src="https://cdn.dribbble.com/users/1376822/screenshots/6132861/recruitify_chat_empty_state_l.swierad.png"
          alt=""
        />
        <Typography></Typography>
      </Component>
    </>
  );
}

export default EmptyChat;
