export const addNotification = (notification) => {
  return {
    type: "NOTIFICATION",
    data: notification,
  };
};

export const removeNotification = () => {
  return {
    type: "REMOVE",
    data: "",
  };
};

const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "NOTIFICATION":
      return action.data;
    case "REMOVE":
      return action.data;
    default:
      return state;
  }
};

export default notificationReducer;
