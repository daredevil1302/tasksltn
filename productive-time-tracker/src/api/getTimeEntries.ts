import { apiFetch } from "./apiClient";

export const getTimeEntries = async (personId: string, date: string) => {
  const endpoint = `time_entries?filter[person_id]=${personId}&filter[after]=${date}&filter[before]=${date}`;
  return apiFetch(endpoint);
};
