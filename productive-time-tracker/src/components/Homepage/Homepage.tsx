import { useEffect } from 'react';

import TimeEntries from '../TimeEntries/TimeEntries';
import TimeEntryForm from '../TimeEntryForm/TimeEntryForm';
import Spinner from '../Spinner/Spinner';

import { usePersonTimeEntries } from '../../hooks/usePersonTimeEntries';

import './Homepage.css';

const Homepage = () => {
  const today = new Date().toISOString().split('T')[0];
  const { timeEntries, person, loading, error, initializeData, refreshEntries, handleDelete } =
    usePersonTimeEntries();

  useEffect(() => {
    initializeData();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="homepage-header">
        <h1>
          Time Entries for {person?.firstName} {person?.lastName}
        </h1>
        <h2>Date: {today}</h2>
      </div>
      <TimeEntries entries={timeEntries} onDelete={handleDelete} />
      <TimeEntryForm personId={person?.personId || ''} onEntriesChanged={refreshEntries} />
    </div>
  );
};

export default Homepage;
