
export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: user
  });
};

export const fbSignup = (response) => {
  let accessToken = response.accessToken;
  let fbUser;
  FB.api('/me/', {fields: 'first_name, last_name, email'}, response => {
    debugger
  });

  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: user
  });
};

export const login = (user) => {
  let accessToken = FB.getAuthResponse().accessToken;
  let userObject = {};
  FB.api('/me/', {fields: 'first_name, last_name, email'}, response => {
    userObject.firstName = response.first_name || undefined;
    userObject.lastName = response.last_name || undefined;
    userObject.email = response.email || undefined;
  });

  if (userObject.email === undefined) {
    userObject.email = "testEmail_" + Math.random(10000);
  }




  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
};
