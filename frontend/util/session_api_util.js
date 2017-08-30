export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: user
  });
};

export const fbLoginOrSignup = (response) => {
  let accessToken = response.accessToken;
  let uid = response.userID;
  let userObject = { fb_token: accessToken,
                     fb_uid: uid };

//  FB.api('/me', {fields: 'last_name'}, function(response) {
//    console.log(response);
//  });
  var permissions = FB.api("/me/permissions");
  
  var selfConsole= console;
  FB.api('/me', // eslint-disable-line no-use-before-define
    {fields: 'first_name, last_name, email'},
    function(fbResponse) {
      debugger
      selfConsole.log('inside FB.api() callback');
      selfConsole.log(fbResponse);
      userObject.first_name = fbResponse.first_name || undefined;
      userObject.last_name = fbResponse.last_name || undefined;
      userObject.email = fbResponse.email || undefined;
    }
  );

  debugger

  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user: userObject },
  });
};

export const fbLogin = (user) => {
  let accessToken = FB.getAuthResponse().accessToken;
  FB.api('/me/', {fields: 'first_name, last_name, email'}, response => {

  });

  if (userObject.email === undefined) {
    userObject.email = "testEmail_" + Math.floor(Math.random() * 1000000) + "@test.com";
  }

  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user: userObject },
  }).fail(
    err => {
      $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user: userObject }
      }).then(
        login(user)
      );
    }
  );
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
};
