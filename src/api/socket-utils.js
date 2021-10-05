import { io } from "socket.io-client";

// const socket = io(process.env.REACT_APP_SOCKET_URL);
const socket = io("wss://amitabh-api.bafdemo.com", {
  path: "/cable",
  transports: ["websocket"],
});

export default socket;
