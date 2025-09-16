import axios from "axios";

// Step 1: Create a reusable, configured Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:5186/api", // Your backend's base URL
});

// Step 2: Use an interceptor to automatically add the auth token to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Use "token" as per your existing code
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.trim()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- Your Existing Functions (Now Refactored) ---

export const registerUser = async (user) => {
  try {
    // Use the apiClient instance. No need for the full URL.
    const response = await apiClient.post("/Users/register", user);
    return response;
  } catch (error) {
    console.error("Failed to register: ", error);
    throw new Error("Failed to register: " + error.response.data);
  }
};

export const login = async (user) => {
  // Login doesn't need the interceptor's token, which is fine.
  const response = await apiClient.post("/Users/login", user, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchProfile = async () => {
  // Notice how this is much simpler. No more manual token handling.
  const response = await apiClient.get("/Users/getuser");
  console.log("Profile Data:", response.data);
  return response.data;
};

export const uploadProfilePicture = async (base64Image) => {
  try {
    // Simplified: headers are now handled automatically by the interceptor.
    const response = await apiClient.post("/Users/upload", {
      Base64String: base64Image,
    });
    console.log("Upload Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Error uploading image: " + error.response.data);
  }
};

export const updateAboutMe = async (aboutMe) => {
  try {
    const response = await apiClient.post("/Users/aboutme", { aboutMe });
    return response.status === 200;
  } catch (error) {
    console.error("Error updating About Me:", error);
    return false;
  }
};

export const upsertPreferences = async (preferences) => {
  try {
    const response = await apiClient.put("/preferences", preferences);
    return response;
  } catch (error) {
    console.error("Error upserting preferences:", error);
    throw new Error("Error upserting preferences: " + error.response.data);
  }
};

export const fetchPreferences = async (userId) => {
  try {
    const response = await apiClient.get(`/preferences/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching preferences:", error);
    throw new Error("Error fetching preferences: " + error.response.data);
  }
};

// --- New Functions for the Matching Page ---

/**
 * Fetches a list of user IDs and their similarity scores for the current user.
 * @param {string} userId - The ID of the currently logged-in user.
 * @returns {Promise<Array<{userId: string, similarity: number}>>}
 */
export const getSimilarityMatches = async (userId) => {
  try {
    const response = await apiClient.get(`/CosineSimilarity/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching similarity matches:", error);
    throw new Error("Error fetching similarity matches: " + error.response.data);
  }
};

/**
 * Fetches the full profile details for a single user by their ID.
 * @param {string} userId - The ID of the user to fetch.
 * @returns {Promise<Object>}
 */
export const getUserById = async (userId) => {
  try {
    const response = await apiClient.get(`/Users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    throw new Error(`Error fetching user ${userId}: ` + error.response.data);
  }
};