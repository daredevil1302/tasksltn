import { apiFetch } from "./apiClient";
import type { TTimeEntryPayload } from "../types/timeEntryType";
import type { TCreateTimeEntryParams } from "../types/timeEntryType";
import { getRandomServiceID } from "../helpers/getRandomServiceId";


export const createTimeEntry = async (
  params: TCreateTimeEntryParams
) => {
  const {
    note,
    date,
    time,
    personId,
    serviceId = getRandomServiceID(),
    taskId,
  } = params;

  const payload: TTimeEntryPayload = {
    data: {
      type: "time_entries",
      attributes: {
        note,
        date,
        time,
      },
      relationships: {
        person: {
          data: {
            type: "people",
            id: personId,
          },
        },
        service: {
          data: {
            type: "services",
            id: serviceId,
          },
        },
        ...(taskId && {
          task: {
            data: {
              type: "tasks",
              id: taskId,
            },
          },
        }),
      },
    },
  };

  return apiFetch("time_entries", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
