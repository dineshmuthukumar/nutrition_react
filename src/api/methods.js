import axios from "./axios-utils";

export const nftListApi = ({ page }) => axios.get(`/nfts?page=${page}`);

export const nftDetailApi = ({ nft_id }) => axios.get(`/nfts/${nft_id}`);
