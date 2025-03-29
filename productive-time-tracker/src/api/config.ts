const API_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_TOKEN;
const ORG_ID = import.meta.env.VITE_ORG_ID;

export const headers = {
  "Content-Type": "application/vnd.api+json",
  "X-Auth-Token": TOKEN,
  "X-Organization-Id": ORG_ID,
};

export { API_URL, ORG_ID };
