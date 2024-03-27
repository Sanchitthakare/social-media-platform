import React from "react";
import "./Education.css"; // Import CSS file for styling

interface Props {
  education: Education[];
}

interface Education {
  School: string;
  Degree: string;
  FieldOfStudy: string;
  StartDate: string;
  EndDate: string;
}

const EducationComponent = (props: Props) => {
  const { education } = props;

  return (
    <div className="education-container">
      <h2 className="education-heading">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3 className="education-school">{edu.School}</h3>
          <p className="education-details">
            {edu.Degree}, {edu.FieldOfStudy}
          </p>
          <p className="education-dates">
            {edu.StartDate} - {edu.EndDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationComponent;
