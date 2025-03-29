import React, { useEffect, useState } from "react";
import { getMembershipAndPerson } from "../api/getMembershipAndPerson";
import { TTimeEntry } from "../types/timeEntryType";
import { getTimeEntries } from "../api/getTimeEntries";
import TimeEntries from "./TimeEntries/TimeEntries";

const Homepage = () => {
  const today = new Date().toISOString().split("T")[0];

  const [timeEntries, setTimeEntries] = useState<TTimeEntry[]>([]);
  const [personId, setPersonId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchPersonAndTimeEntries = async () => {
    try {
      // First, fetch membership and person data to get the personId.
      const id = await getMembershipAndPerson();
      setPersonId(id);

      // Then, using that personId, fetch time entries for today.
      const entriesResponse = await getTimeEntries(id, today);
      setTimeEntries(entriesResponse.data);
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

  const handleDelete = (id: string) => {
    setTimeEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== id)
    );
  };

  useEffect(() => {
    fetchPersonAndTimeEntries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Time Entries for {today}</h1>
      <TimeEntries entries={timeEntries} onDelete={handleDelete} />
    </div>
  );
};

export default Homepage;
