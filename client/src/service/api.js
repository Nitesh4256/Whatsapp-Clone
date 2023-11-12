import axios from "axios";
const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(error);
  }
};
export const getUser = async () => {
  try {
    const response = await axios.get(`${url}/users`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const setConversation = async (data) => {
  console.log(data);
  try {
    let response = await axios.post(`${url}/conversation/add`, data);
    return response.data;
  } catch (error) {
    console.log("error while calling settConversation api");
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);

    return response;
  } catch (error) {
    console.log("error while calling gettConversation api");
    console.log(error);
  }
};

export const newMessage = async (data) => {
  try {
    let response = await axios.post(`${url}/message/add`, data);

    return response;
  } catch (error) {
    console.log("error while calling newMessage api");
    console.log(error);
  }
};
export const getMessage = async (id) => {
  try {
    console.log(id);
    let response = await axios.get(`${url}/message/get/${id}`);
    console.log("response", response);
    return response;
  } catch (error) {
    console.log("error while calling getMessage api");
    console.log(error.message);
  }
};
export const uploadFile = async (data) => {
  try {
    console.log("data", data);
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("error while sending file");
    console.log(error);
  }
};
