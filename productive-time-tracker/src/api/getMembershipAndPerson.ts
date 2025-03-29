import { TMembershipResponse } from '../types/membershipType';
import { TPerson } from '../types/personType';
import { getOrganizationMemberships } from './getOrganizationMemberships';

export const getMembershipAndPerson = async (): Promise<TPerson> => {
  try {
    const membershipResponse = await getOrganizationMemberships() as TMembershipResponse;

    if (!Array.isArray(membershipResponse.data) || membershipResponse.data.length === 0) {
      throw new Error('No membership data found in response');
    }

    const membershipData = membershipResponse.data[0];

    const personId = membershipData.relationships.person.data.id;

    if (!personId) {
      throw new Error('Person ID not found in membership response');
    }

    if (!Array.isArray(membershipResponse.included)) {
      throw new Error('No included data found in membership response');
    }

    const personData = membershipResponse.included.find(
      (item: TMembershipResponse['included'][0]) => item.id === personId && item.type === 'people'
    );
    if (!personData) {
      throw new Error('Person details not found in included data');
    }

    const { first_name: firstName, last_name: lastName } = personData.attributes;
    if (!firstName || !lastName) {
      throw new Error('Incomplete person details');
    }

    return { personId, firstName, lastName };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('Unexpected error');
    }
  }
};
