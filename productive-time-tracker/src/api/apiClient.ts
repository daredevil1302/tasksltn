import { API_URL, headers } from "./config";

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("Unauthorized: Check your API token and organization ID.");
    }
    throw new Error(`API error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};
