import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

const BookAppointmentCarousel = () => {
  const doctors = [
    {
      name: 'Dr. Jane Smith',
      specialization: 'Cardiologist',
      experience: '10 years',
      image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67021dd7d5036abd4dcab969__2ee93b8c-acc0-4f16-85e9-d47199b312f3.jpeg',
    },
    {
      name: 'Dr. John Doe',
      specialization: 'Dermatologist',
      experience: '8 years',
      image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67021f0015ea5801d5271465__8862107d-595d-4955-a959-47e1ec585070.jpeg',
    },
    {
      name: 'Dr. Emily White',
      specialization: 'Pediatrician',
      experience: '12 years',
      image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67022027a96327a0b7f55954__1e7c0c8a-9be2-4dbc-8271-d99b1d1a97e2.jpeg',
    },
    {
      name: 'Dr. Mark Lee',
      specialization: 'Neurologist',
      experience: '15 years',
      image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/670172bd71ef993ea97cdbd7__61fd9fd9-832d-471f-8f62-3b508160c41f.jpeg',
    },
    {
      name: 'Dr. Sarah Green',
      specialization: 'Orthopedist',
      experience: '9 years',
      image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67021e6baf747596e0f0fcf6__ddb47871-8015-4451-b960-4d1e6a1c4afa.jpeg',
    },
    {
      name: 'Dr. Michael Brown',
      specialization: 'General Practitioner',
      experience: '5 years',
      image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67021ecd71ef993ea9066707__25250981-5277-4c29-899a-70b50a1ce07f.jpeg',
    }
  ];

  const chunkSize = 3; // Show 3 doctors at a time
  const doctorChunks = [];

  // Split doctors into chunks of 3 for carousel slides
  for (let i = 0; i < doctors.length; i += chunkSize) {
    doctorChunks.push(doctors.slice(i, i + chunkSize));
  }

  // Inline styles for arrows and container to prevent overflow
  const carouselStyles = {
    overflow: 'hidden', // Prevent x-scroll
    position: 'relative',
    padding: '50px 0',
    backgroundColor: 'white',
    maxWidth: '100vw',
  };

  const customArrowStyle = {
    fontSize: '2.5rem',
    color: 'black',
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const leftArrowStyle = {
    ...customArrowStyle,
    left: '-2rem',
  };

  const rightArrowStyle = {
    ...customArrowStyle,
    right: '-2rem',
  };

  return (
    <section style={carouselStyles}>
      <Container fluid="md">
        <h2 className="text-center mb-5">Book an Appointment Now</h2>
        <Carousel 
          controls={true} 
          indicators={false} 
          nextIcon={<span aria-hidden="true" style={rightArrowStyle}>›</span>} 
          prevIcon={<span aria-hidden="true" style={leftArrowStyle}>‹</span>}
        >
          {doctorChunks.map((doctorGroup, index) => (
            <Carousel.Item key={index}>
              <Row>
                {doctorGroup.map((doctor, i) => (
                  <Col md={4} key={i} className="mb-4">
                    <Card style={{ width: '100%', textAlign: 'center' }}>
                      <Card.Img 
                        variant="top" 
                        src={doctor.image} 
                        alt={`${doctor.name}'s picture`} 
                        style={{ height: '200px', objectFit: 'cover' }} 
                      />
                      <Card.Body>
                        <Card.Title>{doctor.name}</Card.Title>
                        <Card.Text>
                          <strong>Specialization:</strong> {doctor.specialization} <br />
                          <strong>Experience:</strong> {doctor.experience}
                        </Card.Text>
                        <Button variant="primary">Book Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default BookAppointmentCarousel;
