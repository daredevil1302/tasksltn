import { apiFetch } from "./apiClient";

export const getServices = async () => {
  return apiFetch("services");
};