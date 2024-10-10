import React, { useState, useRef } from 'react';
import { Container, Button, Modal, Spinner } from 'react-bootstrap';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  // Function to open the modal
  const handleBookNow = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false);
    setShowVideo(false);
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    }
  };

  // Function to start video call
  const handleVideoCall = async () => {
    setShowVideo(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing media devices.', err);
    }
  };

  return (
    <section
      className="hero-section text-center d-flex align-items-center"
      style={{
        backgroundImage: 'url(https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67023bce652606ecea986e2e_982e9c34-5a05-48d4-84fd-d05422ea6156_2.jpeg)',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <h1 className="text-black mb-4">Get Connected to Doctors, Anytime, Anywhere</h1>
        <p className="text-black-50 mb-5">Book virtual or in-person consultations through DocTalk</p>
        <Button
          style={{ width: '20%', marginRight: '10px' }}
          variant="primary"
          size="lg"
          onClick={handleBookNow}
        >
          Book Now
        </Button>
      </Container>

      {/* Modal for Finding Nearest Doctor */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{showVideo ? 'Video Call with Doctor' : 'Finding Nearest Doctor'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {!showVideo ? (
            <>
              <p>Finding nearest doctor available to visit you physically...</p>
              {/* Spinner Animation */}
              <Spinner animation="border" role="status"></Spinner>
            </>
          ) : (
            <>
              <p>Video Consultation with Doctor</p>
              {/* Video Element */}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: '100%', maxHeight: '400px', background: '#000' }}
              />
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          {!showVideo ? (
            <Button variant="secondary" onClick={handleVideoCall}>
              Either go for a video consultation
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleClose}>
              End Video Call
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default HeroSection;
