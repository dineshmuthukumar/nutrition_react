import cable from "./actioncable-utils";

export const buyDetail = ({ slug }, value) => {
  cable.subscriptions.create(
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

export const bidDetail = ({ slug }, value) => {
  cable.subscriptions.create(
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

export const buySummary = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `buy_summary_${slug}` },
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

export const bidSummary = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `bid_summary_${slug}` },
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

export const buyHistory = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `buy_history_${slug}` },
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

export const bidHistory = ({ slug }, value) => {
  cable.subscriptions.create(
    { channel: "NftChannel", room: `bid_history_${slug}` },
    {
      connected: () => {
        console.log("BL/AC6:Connected");
      },
      received: (data) => {
        console.log("BL/AC6:Success");
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
        console.log("BL/AC7:Connected");
      },
      received: (data) => {
        console.log("BL/AC7:Success");
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
        console.log("BL/AC8:Connected");
      },
      received: (data) => {
        console.log("BL/AC8:Success");
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
        console.log("BL/AC9:Connected");
      },
      received: (data) => {
        console.log("BL/AC9:Success");
        value(data);
      },
    }
  );
};
