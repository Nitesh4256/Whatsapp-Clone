import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { getUser } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";
import Conversation from "./Conversation";

import { AccountContext } from "../../contaxt/AccountProvider";
const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
  opacity: 0.6;
`;
function Conversations({ text }) {
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      let response = await getUser();

      const filterData = response.data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterData);
    };
    fetchData();
  }, [text]);

  return (
    <>
      <Component>
        {" "}
        {users.map(
          (user) =>
            user.sub !== account.sub && (
              <>
                <Conversation user={user} />
                <StyledDivider />
              </>
            )
        )}
      </Component>
    </>
  );
}

export default Conversations;
