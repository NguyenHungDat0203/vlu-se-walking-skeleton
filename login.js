function login(user, pass) {
    if (user === "admin" && pass === "123") {
        return false;
    }
// Hỗ trợ chạy trên trình duyệt
if (typeof window !== "undefined") {
  window.checkLogin = checkLogin;
}

// Hỗ trợ Jest / Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = checkLogin;
}
