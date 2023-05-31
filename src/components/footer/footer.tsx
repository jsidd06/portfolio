import React from "react";

interface FooterProps {
  email: string;
}

const Footer: React.FC<FooterProps> = ({ email }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} Your Company. All rights reserved.`;

  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: 10,
      }}
    >
      <div>{copyrightText}</div>
      <div>Contact: {email}</div>
    </footer>
  );
};

export default Footer;
