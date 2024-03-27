import React, { useState, useEffect } from "react";
import "./WorkExperience.css"; // Import CSS file for styling

type Props = {};

interface Experience {
  WorkTitle: string;
  EmploymentType: string;
  CompanyName: string;
  Location: string;
  LocationType: string;
  CurrentlyWorking: string;
  StartDate: string;
  EndDate: string;
  Industry: string;
  Description: string;
}

const WorkExperience = (props: Props) => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    
    // Replace this with actual fetching logic from your backend
    const fetchData = async () => {
      // Example data
      const data: Experience[] = [
        {
          WorkTitle: "Software Engineer",
          EmploymentType: "Full-time",
          CompanyName: "Example Inc.",
          Location: "New York",
          LocationType: "Remote",
          CurrentlyWorking: "Yes",
          StartDate: "2020-01-01",
          EndDate: "",
          Industry: "Technology",
          Description: "Worked on various projects using React and Node.js.",
        },
        
      ];

      setExperiences(data);
    };

    fetchData();
  }, []);

  return (
    <div className="work-experience-container">
      <h2 className="section-title">Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <h3 className="job-title">{experience.WorkTitle}</h3>
          <p className="company-name">{experience.CompanyName}</p>
          <p className="employment-type">{experience.EmploymentType}</p>
          <p className="location">{experience.Location}</p>
          <p className="location-type">{experience.LocationType}</p>
          <p className="dates">
            {experience.StartDate} - {experience.CurrentlyWorking === "Yes" ? "Present" : experience.EndDate}
          </p>
          <p className="industry">{experience.Industry}</p>
          <p className="description">{experience.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
