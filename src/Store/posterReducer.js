import produce from "immer";

const initState = {
  loading: true,
  success: false,
  data: [],
};

const posterReducer = (state = initState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "LOAD_POSTER":
        draft.loading = true;
        draft.fail = false;
        draft.success = false;
        break;
      case "LOAD_POSTER_FAIL":
        draft.success = false;
        break;
      case "LOAD_POSTER_SUCCESS":
        draft.success = true;
        draft.data = action.payload;
        break;
      default:
        return draft;
    }
    return draft;
  });
export default posterReducer;
