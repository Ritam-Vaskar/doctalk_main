import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const services = [
  {
    title: 'Video Consultation',
    description: 'Consult with doctors virtually',
    image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/66ffbe8113b1d268a3c19ebd__7e475833-250b-471d-85cd-78ce5810d333.jpeg',
    details: ['Secure video consultations are available when physical consultations aren’t feasible, making healthcare accessible anywhere.',
      'Patients can switch between in-person and video consultations if needed, with fees adjusted accordingly.']
  },
  {
    title: 'In-Person Visits',
    description: 'Doctors visit your location',
    image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/66ffbf901be63a9f6dcb226c__e72c15c3-fc0e-43da-929f-8f392d5a6268.jpeg',
    details: ['In-person visits allow doctors to check your health status at your location.',
       'A convenient option for those who are unable to visit clinics.',
       'Real-time scheduling allows patients to book appointments based on doctor availability.',
       'Doctors can set their availability and accept consultations based on their schedules.'
    ]
  },
  {
    title: 'Prescription Service',
    description: 'Get prescriptions instantly',
    image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/66ffc00190b33e5174ca0e23__6ff0c69f-f66b-41f1-86c5-da45d9fe89b3.jpeg',
    details: 'Doctors can issue e-prescriptions after consultations, and patients can have their medications delivered directly to their homes'
  },
  {
    title: 'AI Symptom Checker',
    description: 'Check your symptoms online',
    image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/66ffc15a277671f31d15e7d7__895f5ff4-254e-4ad7-9534-c6e7bdc245cd.jpeg',
    details: ['An intelligent triage system assesses patient symptoms and matches them with suitable doctors based on their needs.',
    ' AI bots manage initial patient-doctor communication, helping prioritize and filter cases based on urgency and relevance.']
  },
  {
  title: 'Agent-Facilitated Communication',
  description: 'Check your symptoms online',
  image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/66ffbba5fe9d507c8dfdae4c__83330045-d3aa-4e2d-8d2f-fe2016553839.jpeg',
  details: ['Agents manage initial patient-doctor communication, helping prioritize and filter cases based on urgency and relevance.',
   'Agents ensure doctors only receive cases requiring their attention, reducing administrative burdens.'
]
},
{
  title: 'Electronic Medical Records (EMR) Integration',
  description: 'Check your symptoms online',
  image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/66ffbdb4f537620946144900__e8366582-eb32-4273-8c20-886880e17ac6.jpeg',
  details: ['Patients can store and share medical records securely.',
    'Doctors can access patient history during consultations for better diagnosis and treatment.'
]
},
{
  title: 'Emergency Services and Referrals',
  description: 'Check your symptoms online',
  image: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/66ffb5b4e476b4dcc3593769__b552d6f8-6610-4135-af0f-fbf9b89b0fa2.jpeg',
  details: ['Integration with emergency medical services for urgent care needs.',
    'Doctors can refer patients to specialists or hospitals as needed.'  
]
}
]
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
        <Modal show={showModal} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>{selectedService?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <div className="dtl" 
              
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
