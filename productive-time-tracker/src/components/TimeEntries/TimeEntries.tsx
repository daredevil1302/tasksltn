// src/components/TimeEntriesList.tsx
import React from "react";
import TimeEntry from "../TimeEntry/TimeEntry";
import type { TTimeEntry } from "../../types/timeEntryType";
import "./TimeEntries.css";

type TimeEntriesListProps = {
  entries: TTimeEntry[];
  onDelete: (id: string) => void;
};

const TimeEntries: React.FC<TimeEntriesListProps> = ({ entries, onDelete }) => {
  console.log(entries, "entries");
  return (
    <div className="time-entries-container">
      {entries.length === 0 ? (
        <p>No time entries found.</p>
      ) : (
        entries.map((entry) => (
          <TimeEntry key={entry.id} {...entry} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default TimeEntries;
