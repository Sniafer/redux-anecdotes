export const filterChange = (filteredText) => {
  return {
    type: "FILTER",
    filter: filteredText,
  };
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
