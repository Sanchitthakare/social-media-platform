import React from "react";
import "./styles.css"; 

interface Props {
  certificates: certificate[];
}

interface certificate {
  Name: string;
  IssuingOrganization: string;
  IssueDate: string;
  ExpirationDate: string;
  CredentialID: string;
  CredentialURL: string;
  Media: string;
}

const Certifications = (props: Props) => {
  const { certificates } = props;

  return (
    <div className="certifications-container">
      <h2 className="certifications-heading">Certifications</h2>
      {certificates.map((certificate, index) => (
        <div key={index} className="certificate">
          <h3 className="certificate-name">{certificate.Name}</h3>
          <p className="certificate-info">Issuing Organization: {certificate.IssuingOrganization}</p>
          <p className="certificate-info">Issue Date: {certificate.IssueDate}</p>
          <p className="certificate-info">Expiration Date: {certificate.ExpirationDate}</p>
          <p className="certificate-info">Credential ID: {certificate.CredentialID}</p>
          <p className="certificate-info">Credential URL: {certificate.CredentialURL}</p>
          <div className="certificate-media">
            <img src={certificate.Media} alt="Certificate" className="certificate-image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
