import { API_URL, headers } from './config';

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('Unauthorized: Check your API token and organization ID.');
    }
    throw new Error(`API error: ${response.status} - ${response.statusText}`);
  }

  if (response.status === 204 || response.headers.get('Content-Length') === '0') {
    return {};
  }

  return response.json();
};
