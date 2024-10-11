import qs from "qs";
import { FiltersValue } from "./types";

export const setSearchParams = (newParams: FiltersValue) => {
  const url = new URL(window.location.href);
  url.search = qs.stringify(newParams, { encode: false, arrayFormat: "comma" });
  window.history.pushState({}, "", url);
};

export const parseSearchParams = () =>
  qs.parse(window.location.search, {
    comma: true,
    ignoreQueryPrefix: true,
  });
