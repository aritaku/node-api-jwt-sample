const actionResponse = (succeeded, err, data) => {
  if (err) {
    return {
      succeeded: false,
      message: err
    };
  }
  return {
    succeeded: true,
    data
  };
};
export default actionResponse;
