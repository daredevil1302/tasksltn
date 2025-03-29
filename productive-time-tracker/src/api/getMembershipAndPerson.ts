import { getOrganizationMemberships } from "./getOrganizationMemberships";


export const getMembershipAndPerson = async (): Promise<string> => {
  try {
    const membershipResponse = await getOrganizationMemberships();
    console.log("Organization Membership Response:", membershipResponse);

    if (!Array.isArray(membershipResponse.data) || membershipResponse.data.length === 0) {
      throw new Error("No membership data found in response");
    }

    const membershipData = membershipResponse.data[0];

    const personId = membershipData.relationships.person.data.id;
    if (!personId) {
      throw new Error("Person ID not found in membership response");
    }


    return personId;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
      throw error;
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error");
    }
  }
};
