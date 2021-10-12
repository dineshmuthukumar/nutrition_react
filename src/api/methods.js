import axios from "./axios-utils";

export const nftListApi = ({ page }) => axios.get(`/nfts?page=${page}`);

export const nftDetailApi = ({ nft_slug }) => axios.get(`/nfts/${nft_slug}`);

export const nftBuyHistory = ({ nft_slug }) =>
  axios.get(`/nfts/${nft_slug}/buy_history`);

export const nftBidHistory = ({ nft_slug }) =>
  axios.get(`/nfts/${nft_slug}/bid_history`);

export const nftBuyApi = (props) => axios.post("/buys", { nft: { ...props } });

export const nftBidApi = (props) => axios.post("/bids", { nft: { ...props } });

export const nftMakeFav = ({ nft_slug }) => axios.post(`/nfts/${nft_slug}/fav`);

export const nftMakeUnFav = ({ nft_slug }) =>
  axios.post(`/nfts/${nft_slug}/unfav`);
