// src/components/SingleTimeEntry.tsx
import React from "react";
import "./TimeEntry.css";

type TimeEntryProps = {
  id: string;
  note: string;
  date: string;
  time: number;
  onDelete: (id: string) => void;
};

const TimeEntry: React.FC<TimeEntryProps> = ({
  id,
  note,
  date,
  time,
  onDelete,
}) => {
  return (
    <div className="time-entry">
      <div className="time-entry-content">
        <p className="time-entry-note">{note}</p>
        <p className="time-entry-details">
          {time} minutes on <span className="time-entry-date">{date}</span>
        </p>
      </div>
      <button className="delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default TimeEntry;
