import { baseCable, nftCable } from "./actioncable-utils";

export const buyDetail = (slug, value) => {
  nftCable.subscriptions.create(
    { channel: "NftChannel", room: `buy_detail_${slug}` },
    {
      connected: () => {
        console.log("BL/AC1:Connected");
      },
      received: (data) => {
        console.log("BL/AC1:Success");
        value(data);
      },
    }
  );
};

export const bidDetail = (slug, value) => {
  baseCable.subscriptions.create(
    { channel: "NftChannel", room: `bid_detail_${slug}` },
    {
      connected: () => {
        console.log("BL/AC2:Connected");
      },
      received: (data) => {
        console.log("BL/AC2:Success");
        value(data);
      },
    }
  );
};

export const pageView = (slug, value) => {
  nftCable.subscriptions.create(
    { channel: "NftChannel", room: `page_view_${slug}` },
    {
      connected: () => {
        console.log("BL/AC3:Connected");
      },
      received: (data) => {
        console.log("BL/AC3:Success");
        value(data);
      },
    }
  );
};

export const totalFav = (slug, value) => {
  nftCable.subscriptions.create(
    { channel: "NftChannel", room: `fav_view_${slug}` },
    {
      connected: () => {
        console.log("BL/AC4:Connected");
      },
      received: (data) => {
        console.log("BL/AC4:Success");
        value(data);
      },
    }
  );
};

export const winnerDetail = (slug, value) => {
  nftCable.subscriptions.create(
    { channel: "NftChannel", room: `winner_detail_${slug}` },
    {
      connected: () => {
        console.log("BL/AC5:Connected");
      },
      received: (data) => {
        console.log("BL/AC5:Success");
        value(data);
      },
    }
  );
};

export const accountDetail = (slug, value) => {
  baseCable.subscriptions.create(
    { channel: "UserChannel", room: `account_${slug}` },
    {
      connected: () => {
        console.log("connected");
      },
      received: (data) => {
        value(data);
      },
    }
  );
};
