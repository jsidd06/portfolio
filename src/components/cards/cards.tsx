import React, { useEffect, useState } from "react";
import { CardImg, Card } from "reactstrap";
import axios from "axios";
import "./cards.css";

interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    thumbnails: {
      medium: {
        url: string;
      };
    };
    title: string;
  };
}

function Cards() {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    // Fetch latest videos from YouTube Data API
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`
      )
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div style={{ alignItems: "center", justifyContent: "center" }}>
        <strong>Code Madness Youtube Latest Videos</strong>
      </div>
      <div className="cards-container">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card className="card-wrapper">
              <div className="card-image-container">
                <CardImg
                  src={video.snippet.thumbnails.medium.url}
                  className="card-image"
                />
              </div>
              <div className="card-title">{video.snippet.title}</div>
            </Card>
          </a>
        ))}
      </div>
    </>
  );
}

export default Cards;
