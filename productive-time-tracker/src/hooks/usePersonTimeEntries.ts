// React imports
import { useState } from 'react';

// API imports
import { getMembershipAndPerson } from '../api/getMembershipAndPerson';
import { getTimeEntries } from '../api/getTimeEntries';
import { deleteTimeEntry } from '../api/deleteTimeEntry';

// Utilities
import { getServiceName } from '../helpers/getServiceName';

// Types
import { TPerson } from '../types/personType';
import { TTimeEntry, TimeEntryAPIResponse } from '../types/timeEntryType';

export const usePersonTimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<TTimeEntry[]>([]);
  const [person, setPerson] = useState<TPerson | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const today = new Date().toISOString().split("T")[0];

  const fetchPersonAndTimeEntries = async () => {
    try {
      setLoading(true);
      const personData = await getMembershipAndPerson();
      setPerson(personData);

      const entriesResponse = await getTimeEntries(personData.personId, today) as TimeEntryAPIResponse;
      const entries: TTimeEntry[] = entriesResponse.data.map((entry) => ({
        id: entry.id,
        note: entry.attributes.note,
        date: entry.attributes.date,
        time: entry.attributes.time,
        serviceName: getServiceName(entry.relationships.service.data.id) || "Unknown Service",
      }));
      setTimeEntries(entries);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTimeEntry(id);
      await fetchPersonAndTimeEntries();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected error");
      }
    }
  };

  return {
    timeEntries,
    person,
    loading,
    error,
    initializeData: fetchPersonAndTimeEntries,
    refreshEntries: fetchPersonAndTimeEntries,
    handleDelete,
  };
}; 