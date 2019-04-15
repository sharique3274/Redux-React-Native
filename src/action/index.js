export const selectLibrary = libId => {
  return {
    type: "select_library",
    payload: libId
  };
};
