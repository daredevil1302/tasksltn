import { apiFetch } from "./apiClient";

export const getOrganizationMemberships = async () => {
  return apiFetch("organization_memberships");
};


