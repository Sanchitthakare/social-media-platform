import React from "react";

type Props = {};

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
  return <div>Certifications</div>;
};

export default Certifications;
