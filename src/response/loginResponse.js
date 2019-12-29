const userLoginResponse = (jwtString, err, user) => {
  if (jwtString) {
    return {
      loggedIn: true,
      token: jwtString,
      user: {
        _id: user._id,
        email: user.email,
      }
    };
  }
  return {
    loggedIn: false,
    error: err
  };
};

export default userLoginResponse;
