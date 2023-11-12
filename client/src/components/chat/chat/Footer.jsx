import React from "react";

import { useEffect } from "react";
import { Box, InputBase, styled } from "@mui/material";
import { useState } from "react";
import { EmojiEmotionsOutlined, SearchRounded } from "@mui/icons-material";
import { AttachFile, Mic } from "@mui/icons-material";
import { uploadFile } from "../../../service/api";
const Container = styled(Box)`
  height: 50px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #fff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;

const Input = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25x;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
`;
function Footer({ sendText, setValue, value, file, setFile, setImage }) {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        console.log("files", file.name);
        const data = new FormData();

        data.append("name", file.name);
        data.append("file", file);

        console.log("DataofFile", data);
        let response = await uploadFile(data);
        console.log("response", response.data);
        setImage(response.data);
      }
    };

    getImage();
  }, [file]);
  const onFileChange = (e) => {
    console.log(e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />

      <Search>
        <Input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type a message "
          value={value}
          onKeyDown={(e) => sendText(e)}
        />
      </Search>
      <Mic />
    </Container>
  );
}

export default Footer;
