import React, { useState } from "react";
import "./styles.css"; 

type Props = {};

const AddCertificationModal = (props: Props) => {
  const [name, setName] = useState("");
  const [issuingOrganization, setIssuingOrganization] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [credentialID, setCredentialID] = useState("");
  const [credentialURL, setCredentialURL] = useState("");
  const [certificateImage, setCertificateImage] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("issuingOrganization", issuingOrganization);
    formData.append("issueDate", issueDate);
    formData.append("expirationDate", expirationDate);
    formData.append("credentialID", credentialID);
    formData.append("credentialURL", credentialURL);
    if (certificateImage) {
      formData.append("certificateImage", certificateImage);
    }
    // Now you can send formData to your backend or perform other actions
    console.log(formData);
    // Reset form fields
    setName("");
    setIssuingOrganization("");
    setIssueDate("");
    setExpirationDate("");
    setCredentialID("");
    setCredentialURL("");
    setCertificateImage(null);
  };

  return (
    <div className="add-certification-modal">
      <h2>Add Certification</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Issuing Organization:
          <input
            type="text"
            value={issuingOrganization}
            onChange={(e) => setIssuingOrganization(e.target.value)}
          />
        </label>
        <br />
        <label>
          Issue Date:
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            type="date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Credential ID:
          <input
            type="text"
            value={credentialID}
            onChange={(e) => setCredentialID(e.target.value)}
          />
        </label>
        <br />
        <label>
          Credential URL:
          <input
            type="text"
            value={credentialURL}
            onChange={(e) => setCredentialURL(e.target.value)}
          />
        </label>
        <br />
        <label>
          Certificate Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setCertificateImage(e.target.files[0]);
              }
            }}
          />
        </label>
        <br />
        <button type="submit">Add Certification</button>
      </form>
    </div>
  );
};

export default AddCertificationModal;
