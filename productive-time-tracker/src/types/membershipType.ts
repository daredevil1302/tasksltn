export type TMembershipResponse = {
  data: {
    relationships: {
      person: {
        data: {
          id: string;
        };
      };
    };
  }[];
  included: {
    id: string;
    type: string;
    attributes: {
      first_name: string;
      last_name: string;
      [key: string]: unknown;
    };
  }[];
} 