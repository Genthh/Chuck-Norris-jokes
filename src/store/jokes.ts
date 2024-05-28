import api from "@/utils/api";

export const fetchJokes = async () => {
  try {
    const response = await api.get("/fact");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
