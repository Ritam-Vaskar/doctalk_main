import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const steps = [
  { step: '1', title: 'Register or Login', description: 'Create your account to get started' },
  { step: '2', title: 'Agent Service', description: 'When you click "Book Now" our agent is instantly notified, just like Ola or Uber. They will guide you through the process and quickly connect you with the right doctor based on your symptoms.' },
  { step: '3', title: 'Affordable Service', description: 'Local health agents assist with registration and consultations, while mobile health vans deliver emergency care. The app offers multiple languages and affordable, flexible payment options to ensure everyone has access to medical assistance.' },
  { step: '4', title: 'Choose Doctor', description: 'Our agents will prioritize and select you a doctor based on the severity of the patient\'s condition.' },
  { step: '5', title: 'Get Consultation', description: 'Consult with a doctor of your choice, either through virtual or in-person appointments.' },
  { step: '6', title: 'Receive Care', description: 'Receive timely care through virtual consultations, in-person visits, or follow-ups, tailored to your health needs.' }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">How It Works</h2>
        <Row>
          {steps.map((step, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm text-center" style={{ height: '300px' }}>
                <Card.Body>
                  <div className="step-number" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{step.step}</div>
                  <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>{step.title}</Card.Title>
                  <div style={{ height: '120px', overflowY: 'auto', padding: '10px' }}>
                    <Card.Text style={{ fontSize: '14px', lineHeight: '1.5' }}>
                      {step.description}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
