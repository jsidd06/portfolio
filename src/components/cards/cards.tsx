import React, { useEffect, useState } from "react";
import { CardImg, Card, CardGroup } from "reactstrap";
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
      <Card>
        <CardGroup>
          {videos.map((video) => (
            <div key={video.id.videoId} className="card-wrapper">
              <CardImg src={video.snippet.thumbnails.medium.url} />
              <div>{video.snippet.title}</div>
            </div>
          ))}
        </CardGroup>
      </Card>
    </>
  );
}

export default Cards;
