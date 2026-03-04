import API from "../services/Api";

export const checkAuthAndRedirect = async () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const res = await API.get("/profile");

    const role = res.data.user.organisation;

    if (role === "navy") {
      window.location.href = "http://localhost:3000";
    }

    if (role === "army") {
      window.location.href = "http://localhost:4300";
    }

    if (role === "airforce") {
      window.location.href = "http://localhost:8000";
    }

  } catch {
    localStorage.removeItem("token");
  }
};
