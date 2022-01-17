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

const clearNotification = (timeout) => {
  return {
    type: "CLEAR_NOTIFICATION",
    data: timeout,
  };
};

export const setNotification = (notification, time) => {
  return async (dispatch) => {
    await dispatch(addNotification(notification));
    const timeout = setTimeout(
      async () => await dispatch(removeNotification()),
      time * 1000
    );
    await dispatch(clearNotification(timeout));
  };
};

const notificationReducer = (
  state = { notification: null, timoutID: null },
  action
) => {
  switch (action.type) {
    case "NOTIFICATION":
      if (state.timoutID) {
        clearTimeout(state.timoutID);
      }
      return {
        notification: action.data,
        timoutID: null,
      };
    case "REMOVE":
      return {
        notification: null,
        timoutID: null,
      };
    case "CLEAR_NOTIFICATION":
      return {
        notification: state.notification,
        timoutID: action.data,
      };
    default:
      return state;
  }
};

export default notificationReducer;
