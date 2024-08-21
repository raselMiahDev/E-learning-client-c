import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { GET_MODULE_LESSON_API_REQUEST } from "../../apiRequest/API";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Loading from "../common/Loader";

const LessonModule = () => {
  const [lessonData, setLessonData] = useState([]);
  const [selectVideo, setSelectVideo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await GET_MODULE_LESSON_API_REQUEST();
      setIsLoading(false);
      if (response.success) {
        setLessonData(response.data);
      }
    })();
  }, []);

  const handleClick = useCallback(
    (url) => {
      if (url === selectVideo) {
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      } else {
        setSelectVideo(url);
      }
    },
    [selectVideo]
  );

  useEffect(() => {
    if (videoRef.current) {
      if (selectVideo) {
        videoRef.current.src = selectVideo;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [selectVideo]);

  const nextHandaler = () => {
    alert("next");
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="my-10">
          <div className="px-28">
          <Link to="/profile">
            <GoArrowLeft size={30} color="green"/>
          </Link>
          </div>
          <div className="video_layout ">
            <div>
              <video ref={videoRef} controls width="100%" height="300" autoPlay>
                <source src={selectVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mt-10">
                <button className="btn btn-sm  bg-slate-150">Previous</button>
                <button
                  onClick={nextHandaler}
                  className="btn btn-sm bg-slate-150"
                >
                  Next
                </button>
              </div>
            </div>
            <div className="bg-white rounded-sm shadow-xl ">
              <div className="bg-slate-200 p-3">
                <h1 className="text-black font-bold">Play List</h1>
              </div>
              <Accordion
                openIcon={<CaretUp />}
                closeIcon={<CaretDown />}
                iconPosition="right"
                flush={false}
                className="overflow-y-auto"
              >
                {lessonData.map((lesson) => (
                  <Accordion.Panel key={lesson._id}>
                    <Accordion.Title>{lesson.title}</Accordion.Title>
                    <Accordion.Content>
                      <ul>
                        {lesson.videos.map((video, i) => (
                          <li
                            className="hover:cursor-pointer font-medium border-b-2 py-2 hover:border-sky-500 mb-1"
                            onClick={() => handleClick(video.videoURL)}
                            key={video._id}
                          >
                            {i + 1} : {video.videoTitle}
                          </li>
                        ))}
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LessonModule;
