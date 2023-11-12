import { Box } from "@mui/material";
import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";

import { InputBase } from "@mui/material";
import styled from "@emotion/styled";
const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  width: 100%;
  border-radius: 10px;
  margin: 0 12px;
`;
const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 8px;
  color: #919191;
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  height: 15px;
  padding-left: 65px;
  font-size: 14px;
`;
function Search({ setText }) {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize="small" />
        </Icon>
        <InputField
          onChange={(e) => setText(e.target.value)}
          placeholder="Search or start a new Chat.."
        />
      </Wrapper>
    </Component>
  );
}

export default Search;
