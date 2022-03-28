import produce from "immer";

const initState = {
  loading: false,
  success: false,
  data: [],
  searchData: [],
};

const homepageReducer = (state = initState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "LOAD_DATA":
        draft.loading = true;
        draft.success = false;
        break;
      case "FAIL":
        draft.success = false;
        draft.loading = false;
        break;
      case "SUCCESS":
        draft.success = true;
        draft.data = action.payload;
        draft.loading = false;
        break;
      case "LOAD_SEARCH":
        draft.loading = true;
        draft.success = false;
        break;
      case "LOAD_SEARCH_FAIL":
        draft.success = false;
        draft.loading = false;
        break;
      case "LOAD_SEARCH_SUCCESS":
        draft.success = true;
        draft.loading = false;
        draft.searchData = action.payload;
        break;
      case "LOAD_SEARCH_CLEAR":
        draft.searchData = [];
      default:
        return draft;
    }
    return draft;
  });
export default homepageReducer;
