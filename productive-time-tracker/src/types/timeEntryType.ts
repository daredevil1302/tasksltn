export type TTimeEntryPayload = {
    data: {
      type: "time_entries";
      attributes: {
        note: string;
        date: string;
        time: number;
      };
      relationships: {
        person: {
          data: {
            type: "people";
            id: string;
          };
        };
        service: {
          data: {
            type: "services";
            id: string;
          };
        };
        task?: {
          data: {
            type: "tasks";
            id: string;
          };
        };
      };
    };
  };
  export type TCreateTimeEntryParams = {
    note: string;
    date: string;      
    time: number;      
    personId: string;
    serviceId: string; 
    taskId?: string;    
  };

  export type TTimeEntry = {
    id: string;
    note: string;
    date: string; 
    time: number;
  };