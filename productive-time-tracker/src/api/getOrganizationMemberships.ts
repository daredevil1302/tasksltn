import { apiFetch } from "./apiClient";
import { ORG_ID } from "./config";

export const getOrganizationMemberships = async () => {
  return apiFetch(
    `organization_memberships?filter[organization_id]=${ORG_ID}&include=person`,
  );
};
