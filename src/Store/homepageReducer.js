import produce from "immer";

const initState = {
  loading: false,
  success: false,
  data: [],
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
      default:
        return draft;
    }
    return draft;
  });
export default homepageReducer;
