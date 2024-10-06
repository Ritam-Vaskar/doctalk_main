import React, { useState } from 'react';
import { Container, Button, Modal, Spinner } from 'react-bootstrap';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal
  const handleBookNow = () => {
    setShowModal(true); // Set modal to visible
  };

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false); // Set modal to hidden
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
        <Button
          style={{ width: '20%' }}
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
          <Modal.Title>Finding Nearest Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Finding nearest doctor available to visit you physically...</p>
          {/* Spinner Animation */}
          <Spinner animation="border" role="status">
            
          </Spinner>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Either go for a video consultant
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default HeroSection;
