import cable from "./actioncable-utils";

export const buyDetail = (value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: "buy_detail" },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const bidDetail = (value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: "bid_detail" },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const buySummary = (value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: "buy_summary" },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const bidSummary = (value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: "bid_summary" },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const buyHistory = (value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: "buy_history" },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const bidHistory = (value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: "bid_history" },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const pageView = (value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: "page_view" },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const totalFav = (value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: "fav_view" },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};
