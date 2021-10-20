import ActionCable from "actioncable";

export const nftCable = ActionCable.createConsumer(
  process.env.REACT_APP_SOCKET_URL
);

export const baseCable = ActionCable.createConsumer(
  process.env.REACT_APP_BASE_SOCKET_URL
);
