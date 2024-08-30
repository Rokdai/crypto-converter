import { AxiosResponse } from "axios";
import { API_URLS } from "../constants";
import { request } from "../utils";
import { ICurrencyListResp } from "@/types/currency";

export const getCurrencyList = async (): Promise<
  AxiosResponse<ICurrencyListResp>
> => {
  return request({
    method: "GET",
    url: API_URLS.LATEST("USD"),
  });
};

export const getCurrencyRates = async (
  currencyName: string
): Promise<AxiosResponse<ICurrencyListResp>> => {
  return request({
    method: "GET",
    url: API_URLS.LATEST(currencyName),
  });
};
