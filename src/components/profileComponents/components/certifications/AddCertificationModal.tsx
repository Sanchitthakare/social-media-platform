import React, { useState } from "react";

type Props = {};

const AddCertificationModal = (props: Props) => {
  const [name, setName] = useState();
  const [issuingOrganization, setIssuingOrganization] = useState();
  const [issueDate, setIssueDate] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [credentialID, setCredentialID] = useState();
  const [credentialURL, setCredentialURL] = useState();
  const [media, setMedia] = useState();
  return <div>AddCertificationModal</div>;
};

export default AddCertificationModal;
