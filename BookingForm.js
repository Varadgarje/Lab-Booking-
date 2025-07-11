import React, { useState } from 'react';

const BookingForm = ({ labs, selectedLab, setSelectedLab, labDetails }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const isValidUserId = (id) => {
    const validIds = Array.from({ length: 10 }, (_, i) => `MITU22BTCS${(i + 1).toString().padStart(2, '0')}`);
    return validIds.includes(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUserId(userId)) {
      setError('Invalid ID. Please enter a valid ID from MITU22BTCS01 to MITU22BTCS10.');
      setSuccess(false);
      return;
    }
    setError('');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setDate('');
    setTime('');
    setUserId('');
  };

  return (
    <div className="booking-form">
      <h3>Book a Lab</h3>
      <div className="form-and-preview">
        <form onSubmit={handleSubmit}>
          <label>Lab:</label>
          <select value={selectedLab} onChange={(e) => setSelectedLab(e.target.value)} required>
            {labs.map((lab) => (
              <option key={lab} value={lab}>{lab}</option>
            ))}
          </select>

          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <label>Time Slot:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="e.g., MITU22BTCS03" required />
          {error && <div className="error">{error}</div>}
          {success && <div className="success-message">Lab booked successfully!</div>}

          <button type="submit">Book Lab</button>
          <button type="button" onClick={() => { setDate(''); setTime(''); setUserId(''); setError(''); setSuccess(false); }}>Cancel</button>
        </form>

        <div className="lab-preview-side">
          <h4>{labDetails.name} Image</h4>
          <img src={labDetails.image} alt={labDetails.name} />
          <p><strong>Currently Selected:</strong> {labDetails.name}</p>
          <p>{labDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
