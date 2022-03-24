export const homePageDataLoadStart = () => ({
  type: "LOAD_DATA",
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
