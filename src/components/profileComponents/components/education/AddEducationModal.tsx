import React, { useState } from "react";

type Props = {};

const AddEducationModal = (props: Props) => {
  const [school, setSchool] = useState();
  const [degree, setDegree] = useState();
  const [fieldOfStudy, setFieldOfStudy] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return <div>AddEducationModal</div>;
};

export default AddEducationModal;
