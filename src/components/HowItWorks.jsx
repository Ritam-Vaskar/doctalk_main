import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const steps = [
  { step: '1', title: 'Register or Login', description: 'Create your account to get started' },
  { step: '2', title: 'Agent Service', description: 'When you click "Book Now" our agent is instantly notified, just like Ola or Uber. They will guide you through the process and quickly connect you with the right doctor based on your symptoms. ' },
  { step: '3', title: 'Affordable  Service', description: 'Local health agents assist with registration and consultations, while mobile health vans deliver emergency care. The app offers multiple languages and affordable, flexible payment options to ensure everyone has access to medical assistance.' },

  { step: '4', title: 'Choose Doctor', description: 'Our agents will prioritize and select you a doctor based on the severity of the patients condition' },
  { step: '5', title: 'Get Consultation', description: 'Consult with a doctor of your choice, either through virtual or in-person appointments.'},
  { step: '6', title: 'Receive care', description: 'Receive timely care through virtual consultations, in-person visits, or follow-ups, tailored to your health needs.'}
 
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">How It Works</h2>
        <Row>
          {steps.map((step, index) => (
            <Col md={2} key={index} className="text-center">
              <div className="step-number mb-3">{step.step}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
