import React, { useState } from "react";
import "./education.css"; 

type Props = {};

const AddEducationModal = (props: Props) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", { school, degree, fieldOfStudy, startDate, endDate });
    setSchool("");
    setDegree("");
    setFieldOfStudy("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="add-education-modal">
      <h2>Add Education</h2>
      <form onSubmit={handleSubmit}>
        <label>
          School:
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Degree:
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Field of Study:
          <input
            type="text"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Education</button>
      </form>
    </div>
  );
};

export default AddEducationModal;
