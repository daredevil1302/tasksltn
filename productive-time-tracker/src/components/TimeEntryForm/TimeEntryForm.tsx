import React from "react";
import { useForm } from "react-hook-form";
import { createTimeEntry } from "../../api/createTimeEntry";
import { getRandomServiceID } from "../../helpers/getRandomServiceId";
import "./TimeEntryForm.css";

type FormValues = {
  note: string;
  time: number;
};

type TimeEntryFormProps = {
  personId: string;
  onEntriesChanged: () => void;
};

const TimeEntryForm: React.FC<TimeEntryFormProps> = ({
  personId,
  onEntriesChanged,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      note: "",
      time: 1,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const { note, time } = data;
      const date = new Date().toISOString().split("T")[0];

      await createTimeEntry({
        note,
        date,
        time,
        personId,
        serviceId: getRandomServiceID(),
      });

      onEntriesChanged();
      
      reset({
        note: "",
        time: 1,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to create time entry: ${error.message}`);
      }
      throw new Error("Failed to create time entry: Unknown error");
    }
  };

  return (
    <form className="time-entry-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Add Time Entry</h2>
      <div className="form-group">
        <label htmlFor="note">Description</label>
        <input
          id="note"
          type="text"
          {...register("note", { required: "Note is required" })}
        />
        {errors.note && <p className="error">{errors.note.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="time">Time (minutes)</label>
        <input
          id="time"
          type="number"
          {...register("time", {
            required: "Time is required",
            valueAsNumber: true,
            validate: (value) => value > 0 || "Time must be greater than 0",
          })}
        />
        {errors.time && <p className="error">{errors.time.message}</p>}
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default TimeEntryForm;
