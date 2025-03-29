import { apiFetch } from "./apiClient";

export const deleteTimeEntry = async (id: string) => {
  return apiFetch(`time_entries/${id}`, {
    method: "DELETE",
  });
};
