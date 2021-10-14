import cable from "./actioncable-utils";

export const buyDetail = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `buy_detail_${slug}` },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const bidDetail = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `bid_detail_${slug}` },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const buySummary = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `buy_summary_${slug}` },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const bidSummary = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `bid_summary_${slug}` },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const buyHistory = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `buy_history_${slug}` },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const bidHistory = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `bid_history_${slug}` },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const pageView = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `page_view_${slug}` },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};

export const totalFav = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `fav_view_${slug}` },
    {
      connected: () => {},
      received: (data) => {
        value(data);
      },
    }
  );
};
