// AJAX request creators to api/session (for login/logout) and api/users (for account creation)

export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  });
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  });
};

const demoUser = {
  name: "King Black Dragon",
  email: "kbd@kanbanno.com",
  password: "KBDRawr"
};

export const demoLogin = () => {
  return login(demoUser);
};


export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session"
  });
};