import React from "react";

interface FooterProps {
  email: string;
}

const Footer: React.FC<FooterProps> = ({ email }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} CodeMadness. All rights reserved.`;

  return (
    <footer
      style={{
        textAlign: "center",
      }}
    >
      <div>{copyrightText}</div>
      <div>Contact Us:- {email}</div>
    </footer>
  );
};

export default Footer;
