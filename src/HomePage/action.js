export const homePageDataLoadStart = (payload) => ({
  type: "LOAD_DATA",
  payload,
});

export const homePageDataLoadSuccess = (payload) => ({
  type: "SUCCESS",
  payload,
});

export const homePageDataLoadFail = () => ({
  type: "FAIL",
});

export const posterDataLoadStart = (payload) => ({
  type: "LOAD_POSTER",
  payload,
});

export const posterDataLoadSuccess = (payload) => ({
  type: "LOAD_POSTER_SUCCESS",
  payload,
});

export const posterDataLoadFail = () => ({
  type: "LOAD_POSTER_FAIL",
});

export const searchDataLoadStart = (payload) => ({
  type: "LOAD_SEARCH",
  payload,
});

export const searchDataLoadSuccess = (payload) => ({
  type: "LOAD_SEARCH_SUCCESS",
  payload,
});

export const searchDataLoadFail = () => ({
  type: "LOAD_SEARCH_FAIL",
});

export const searchDataClear = () => ({
  type: "LOAD_SEARCH_CLEAR",
});
