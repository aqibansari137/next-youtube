import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { YoutubePlayer } from "@/components/YoutubePlayer/YoutubePlayer";

interface Props {
  PatientStoryData?: {
    data: {
      alttag: string;
      heading: string;
      desc: string;
      thumbnail: string;
      mobthumbnail: string;
      key: string;
      videotransscript: string;
      videourl: string;
      videocover: string;
      videocoveralttag: string;
    }[];
  }
}


const PatientStoriesTest: React.FC<Props> = ({ PatientStoryData }) => {
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [itemType, setItemType] = useState("default");
  const [videoCover, setVideoCover] = useState("");
  const [videoCoverAltTag, setVideoCoverAltTag] = useState("");
  const [videoTranscript, setVideoTranscript] = useState("this is default video transcript");

  const funClose = () => setDisplay(false);
  return (
    <div className="patient-stories-video-row">
      <Modal
        className="my-modal ps"
        show={display}
        onHide={funClose}
        animation={false}
        data-testid="patient-modal"
      >
        <Modal.Body>
          <Modal.Header closeButton></Modal.Header>
          {["original", "No_Ad"].includes(itemType) && (
            <YoutubePlayer
              className="patient-story-youtube"
              url={videoUrl}
              controls={true}
              volume={1}
              playing={true}
              light={
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={videoCover} alt={videoCoverAltTag} layout="fill" objectFit="cover" />
                </div>
              }
            />
          )}
          {itemType === "original_No_Ad" && (
            <YoutubePlayer
              className="patient-story-youtube"
              url={videoUrl}
              controls={true}
              volume={1}
              playing={true}
              light={
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={videoCover} alt={videoCoverAltTag} layout="fill" objectFit="cover" />
                </div>
              }
            />
          )}
          {itemType === "default_modified" && (
            <YoutubePlayer
              className="patient-story-youtube"
              url={videoUrl}
              controls={true}
              volume={1}
              playing={true}
              light={
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image src={videoCover} alt={videoCoverAltTag} layout="fill" objectFit="cover" />
                </div>
              }
            />
          )}

          {itemType === "iframe" && (
            <iframe
              width="100%"
              height="445"
              src="https://www.youtube.com/embed/FzhOqdHxT0A?rel=0&controls=1&autoplay=1&mute=1&showinfo=0&cc_load_policy=1"
              title="Karen: A SPRAVATO® (esketamine) Nasal Spray Success Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          <div
            className={visible ? "matrix-transcripts p-story patient-story-transcript" : "d-none"}
          >
            <div className="transcript">
              <span
                className="close-btn"
                onClick={() => {
                  setVisible(false);
                }}
                data-testid="click-close"
              >
                close
              </span>
            </div>
            <span>{videoTranscript}</span>
          </div>
        </Modal.Body>
      </Modal>
      <Row className="video-row m-0">
        {PatientStoryData?.data.map((item, index) => {
          return (
            <Col lg={4} className={`video-section ${index === 0 ? "d-none" : ""}`} key={index}>
              <div className="video-col">
                <div className="img-wrap" data-testid={`video-images${index}`}>
                  <div
                    className="video-image-wrap"
                    data-testid={`video-imagewrap${index}`}
                    onClick={() => {
                      setItemType(item.key);
                      setDisplay(true);
                      setVisible(true);
                      setVideoTranscript(item.videotransscript);
                      setVideoCover(item.videocover);
                      setVideoCoverAltTag(item.videocoveralttag);
                      setVideoUrl(item.videourl);
                    }}
                  >
                    <Image
                      className="video-thumbnail"
                      width={390}
                      height={217}
                      src={item.thumbnail}
                      alt={item.alttag}
                      id={item.key}
                      data-testid={`${index}test`}
                    />
                  </div>
                  <div className="video-subhead">
                    <h2 className="mb-3">{item.heading}</h2>
                    <p
                      className="d-none d-lg-block"
                      > item.desc,</p>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default PatientStoriesTest;