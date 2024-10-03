import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const services = [
  {
    title: 'Video Consultation',
    description: 'Consult with doctors virtually',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuajIjJzxbHf5oHXcEgUNIZCT2FjTEx3bG5g&s',
    details: ['Secure video consultations are available when physical consultations aren’t feasible, making healthcare accessible anywhere.',
      'Patients can switch between in-person and video consultations if needed, with fees adjusted accordingly.']
  },
  {
    title: 'In-Person Visits',
    description: 'Doctors visit your location',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDTi5wQ_K2M-AR7TwMgCcbvHGrkPA0lHC5w&s',
    details: ['In-person visits allow doctors to check your health status at your location.',
       'A convenient option for those who are unable to visit clinics.',
       'Real-time scheduling allows patients to book appointments based on doctor availability.',
       'Doctors can set their availability and accept consultations based on their schedules.'
    ]
  },
  {
    title: 'Prescription Service',
    description: 'Get prescriptions instantly',
    image: 'https://media.istockphoto.com/id/1469686707/photo/delivery-worker-hands-holding-medications-parcel.jpg?s=612x612&w=0&k=20&c=XwgJ2dcED8EClXuo-Ik24hbmF5P5SvFvJnETfw0LHzU=',
    details: 'Doctors can issue e-prescriptions after consultations, and patients can have their medications delivered directly to their homes'
  },
  {
    title: 'AI Symptom Checker/Agents',
    description: 'Check your symptoms online',
    image: 'https://psu-gatsby-files-prod.s3.amazonaws.com/s3fs-public/Cellphone-symptom-checker_50.jpg',
    details: ['An intelligent triage system assesses patient symptoms and matches them with suitable doctors based on their needs.',
    'Agents (or AI bots) manage initial patient-doctor communication, helping prioritize and filter cases based on urgency and relevance.']
  }
];

const Services = () => {
  // State to manage the modal visibility and selected service
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Function to open the modal and set the selected service
  const handleShow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  // Function to close the modal
  const handleClose = () => setShowModal(false);

  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="outline-primary" onClick={() => handleShow(service)}>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedService?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="dtl" 
              style={{'height' : '100%',
               'overflowY' : 'scroll'

              }}
            >
            <img
              src={selectedService?.image}
              alt={selectedService?.title}
              className="img-fluid mb-3"
            />
            
              <p>{selectedService?.details}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Services;
