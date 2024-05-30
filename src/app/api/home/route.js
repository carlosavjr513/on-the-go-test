import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.basestudio.app/v1/c6b1a48fbc86a778b977b0",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const fetchHomeData = async () => {
  try {
    const response = await apiClient.get("/home/7a581b0e16b559ff9a9957");
    return response.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw error;
  }
};
