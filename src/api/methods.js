import axios from "./axios-utils";

export const nftListApi = ({ page }) => axios.get(`/nfts?page=${page}`);

export const nftDetailApi = ({ nft_id }) => axios.get(`/nfts/${nft_id}`);

export const nftBuyApi = (props) => axios.post("/buys", { nft: { ...props } });

export const nftBidApi = (props) => axios.post("/bids", { nft: { ...props } });

export const nftMakeFav = ({ nft_slug }) => axios.post(`/nfts/${nft_slug}/fav`);

export const nftMakeUnFav = ({ nft_slug }) =>
  axios.post(`/nfts/${nft_slug}/unfav`);
