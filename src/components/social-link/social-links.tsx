import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./socialLinks.css";

function SocialLinks() {
  const handleIconClick = (link: any) => {
    window.open(link, "_blank");
  };

  return (
    <div className="social-links-container">
      <div className="icon-row">
        <div
          className="icon-wrapper"
          onClick={() => handleIconClick("https://github.com")}
        >
          <GitHubIcon className="icon" />
        </div>
        <div
          className="icon-wrapper"
          onClick={() => handleIconClick("https://facebook.com")}
        >
          <FacebookIcon className="icon" />
        </div>
        <div
          className="icon-wrapper"
          onClick={() => handleIconClick("https://twitter.com")}
        >
          <TwitterIcon className="icon" />
        </div>
        <div
          className="icon-wrapper"
          onClick={() => handleIconClick("https://youtube.com")}
        >
          <YouTubeIcon className="icon" />
        </div>
        <div
          className="icon-wrapper"
          onClick={() => handleIconClick("https://linkedin.com")}
        >
          <LinkedInIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
