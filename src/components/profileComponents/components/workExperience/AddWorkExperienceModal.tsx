import React, { useState } from "react";
import "./workexperience.css"; // Import CSS file for styling

type Props = {};

const AddWorkExperienceModal = (props: Props) => {
  const [workTitle, setWorkTitle] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [locationType, setLocationType] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors: any = {};
    if (!workTitle) {
      validationErrors.workTitle = "Work Title is required";
    }
    if (!employmentType) {
      validationErrors.employmentType = "Employment Type is required";
    }
    if (!companyName) {
      validationErrors.companyName = "Company Name is required";
    }
    if (!location) {
      validationErrors.location = "Location is required";
    }
    if (!locationType) {
      validationErrors.locationType = "Location Type is required";
    }
    if (!startDate) {
      validationErrors.startDate = "Start Date is required";
    }
    if (!currentlyWorking && !endDate) {
      validationErrors.endDate = "End Date is required";
    }
    if (!industry) {
      validationErrors.industry = "Industry is required";
    }
    if (!description) {
      validationErrors.description = "Description is required";
    }
    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed with form submission
      console.log("Form submitted:", {
        workTitle,
        employmentType,
        companyName,
        location,
        locationType,
        currentlyWorking,
        startDate,
        endDate,
        industry,
        description,
      });
      // Reset form fields and errors
      setWorkTitle("");
      setEmploymentType("");
      setCompanyName("");
      setLocation("");
      setLocationType("");
      setCurrentlyWorking(false);
      setStartDate("");
      setEndDate("");
      setIndustry("");
      setDescription("");
      setErrors({});
    } else {
      // Validation errors found, update state to display errors
      setErrors(validationErrors);
    }
  };

  return (
    <div className="add-work-experience-modal">
      <h2>Add Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Work Title:
          <input
            type="text"
            value={workTitle}
            onChange={(e) => setWorkTitle(e.target.value)}
            required
          />
          {errors.workTitle && <span className="error">{errors.workTitle}</span>}
        </label>
        <br />
        <label>
          Employment Type:
          <input
            type="text"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            required
          />
          {errors.employmentType && <span className="error">{errors.employmentType}</span>}
        </label>
        <br />
        <button type="submit">Add Work Experience</button>
      </form>
    </div>
  );
};

export default AddWorkExperienceModal;
