export function isAuthenticated() {
  return localStorage.getItem("isLoggedIn") == "1" ? true : false;
}
