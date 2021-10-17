import cable from "./actioncable-utils";

export const buyDetail = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `buy_detail_${slug}` },
    {
      connected: () => {
        console.log("buy_detail room connected");
      },
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
      connected: () => {
        console.log("bid_detail room connected");
      },
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
      connected: () => {
        console.log("buy_summary room connected");
      },
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
      connected: () => {
        console.log("bid_summary room connected");
      },
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
      connected: () => {
        console.log("buy_history_ room connected");
      },
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
      connected: () => {
        console.log("bid_history_ room connected");
      },
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
      connected: () => {
        console.log("page_view_ room connected");
      },
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
      connected: () => {
        console.log("fav_view_ room connected");
      },
      received: (data) => {
        value(data);
      },
    }
  );
};

export const winnerDetail = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `winner_detail_${slug}` },
    {
      connected: () => {
        console.log("winner_detail_ room connected");
      },
      received: (data) => {
        value(data);
      },
    }
  );
};
