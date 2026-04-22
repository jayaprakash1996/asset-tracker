export const loginUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        email === "admin@asset.com" &&
        password === "admin123"
      ) {
        resolve({
          name: "Admin",
          email: "admin@asset.com",
          token: "dummy-token-123",
        });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
};