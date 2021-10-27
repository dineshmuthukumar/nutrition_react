import appAxios from "./axios-utils";

export const nftCategoriesApi = ({ page }) =>
  appAxios.get(`/categories?page=${page}`);

export const nftCategoryDetailApi = ({ slug }) =>
  appAxios.get(`/categories/${slug}`);

export const nftListApi = ({ slug, page }) =>
  appAxios.get(`/categories/${slug}/nfts?page=${page}`);

export const nftDetailApi = ({ nft_slug }) => appAxios.get(`/nfts/${nft_slug}`);

export const nftMoreApi = ({ page }) => appAxios.get(`/nfts/more?page=${page}`);

export const nftBuyHistory = ({ nft_slug, page }) =>
  appAxios.get(`/nfts/${nft_slug}/buy_history?page=${page}`);

export const nftBidHistory = ({ nft_slug, page }) =>
  appAxios.get(`/nfts/${nft_slug}/bid_history?page=${page}`);

export const nftBidWinner = ({ nft_slug }) =>
  appAxios.get(`/nfts/${nft_slug}/bid_winner`);

export const nftBuyApi = (props) =>
  appAxios.post("/buys", { nft: { ...props } });

export const nftBidApi = (props) =>
  appAxios.post("/bids", { nft: { ...props } });

export const nftMakeFav = ({ nft_slug }) =>
  appAxios.post(`/nfts/${nft_slug}/fav`);

export const nftMakeUnFav = ({ nft_slug }) =>
  appAxios.post(`/nfts/${nft_slug}/unfav`);
