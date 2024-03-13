import React, { useState } from "react";

type Props = {};

const AddWorkExperienceModal = (props: Props) => {
  const [workTital, setWorkTital] = useState();
  const [employmentType, setEmploymentType] = useState();
  const [companyName, setCompanyName] = useState();
  const [location, setLocation] = useState();
  const [locationType, setLocationType] = useState();
  const [currentlyWorking, setCurrentlyWorking] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [industry, setIndustry] = useState();
  const [discription, setDiscription] = useState();

  const addExperience = async () => {};

  return <div>AddWorkExperienceModal</div>;
};

export default AddWorkExperienceModal;
