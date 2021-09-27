import socket from "./socket-utils";

export const socketConnect = () => socket.on("connect", () => console.log(socket.connected));

export const socketJoinCommonRoom = (room) => socket.emit('joinCommonRoom', room);

export const socketStatus = (value) => socket.off().on('socketStatus', (data) => value(data));

export const socketNewMessage = (value) => socket.off().on('new_message', (data) => value(data));

export const socketTotalBid = (value) => socket.off().on('total_bid', (data) => value(data));