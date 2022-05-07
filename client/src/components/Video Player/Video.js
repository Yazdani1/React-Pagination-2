import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
const Video = () => {
  const videolist = [
    {
      videoUrl: "https://www.youtube.com/watch?v=vn3tm0quoqE",
      id: 1,
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=Tn6-PIqc4UM&list=PL0vfts4VzfNgUUEtEjxDVfh4iocVR3qIb",
      id: 2,
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=-OTc0Ki7Sv0&list=PL0vfts4VzfNgUUEtEjxDVfh4iocVR3qIb&index=3",
      id: 3,
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=IF6k0uZuypA&list=PL0vfts4VzfNgUUEtEjxDVfh4iocVR3qIb&index=4",
      id: 4,
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=ydkQlJhodio&list=PL0vfts4VzfNgUUEtEjxDVfh4iocVR3qIb&index=6",
      id: 5,
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=lRQ5z7i7pxE&list=PL0vfts4VzfNgUUEtEjxDVfh4iocVR3qIb&index=12",
      id: 6,
    },
  ];

  const [videoinfo, setVideoInfo] = useState(videolist);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {videoinfo.map((item, i) => (
            <>
              <div className="col-xl-6 col-lg-6 col-md-4">
                <div className="card" style={{ margin: "10px",padding:"10px" }}>
                  <ReactPlayer loop={true} playing={false} controls width="500px" url={item.videoUrl}/>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Video;
