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

export const setNotification = (notification, time) => {
  return async (dispatch) => {
    await dispatch(addNotification(notification));
    setTimeout(async () => await dispatch(removeNotification()), time * 1000);
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
