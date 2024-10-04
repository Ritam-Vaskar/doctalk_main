import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Data Array for VillageCare features
const villageCareFeatures = [
  {
    title: 'Offline Accessibility & Low-Bandwidth Compatibility',
    description: 'A lite version for low connectivity areas and offline symptom entry, automatically synced once connected.',
    imageUrl: 'https://via.placeholder.com/100x70',
    actionText: 'Learn More',
  },
  {
    title: 'Local Health Agents for On-Site Assistance',
    description: 'Village health workers assist patients with registration, symptoms, and follow-up care, facilitating virtual consultations.',
    imageUrl: 'https://via.placeholder.com/100x70',
    actionText: 'Learn More',
  },
  {
    title: 'Doctor Dispatch System',
    description: 'A rapid response network of junior doctors, dispatched to villages for urgent cases with nearby city or town assistance.',
    imageUrl: 'https://via.placeholder.com/100x70',
    actionText: 'Learn More',
  },
  {
    title: 'Telemedicine Kiosks in Villages',
    description: 'Telemedicine booths with video conferencing tools in village centers for easy access to virtual doctor consultations.',
    imageUrl: 'https://via.placeholder.com/100x70',
    actionText: 'Learn More',
  },
  {
    title: 'Emergency Health Delivery System',
    description: 'Mobile health vans equipped with essential medical supplies dispatched through DocTalk for emergency health needs.',
    imageUrl: 'https://via.placeholder.com/100x70',
    actionText: 'Learn More',
  },
  {
    title: 'Multi-Language & Dialect Support',
    description: 'Localized language support for rural populations, with easy app navigation in regional languages and dialects.',
    imageUrl: 'https://via.placeholder.com/100x70',
    actionText: 'Learn More',
  },
  {
    title: 'Priority Consultation for Villagers',
    description: 'Faster access to virtual consultations for village patients, handled by doctors trained in rural healthcare.',
    imageUrl: 'https://via.placeholder.com/100x70',
    actionText: 'Learn More',
  },
  {
    title: 'Affordable & Flexible Payment Plans',
    description: 'Subsidized rates for rural patients, "pay later" options, and partnerships with NGOs to provide affordable care.',
    imageUrl: 'https://via.placeholder.com/100x70',
    actionText: 'Learn More',
  },
];

const VillageCare = () => {
  // Handle button click events for dummy functionalities
  const handleFeatureClick = (feature) => {
    alert(`Clicked on ${feature}`);
  };

  return (
    <section className="village-care-section" style={{ padding: '50px 0', backgroundColor: '#f1f1f1' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>VillageCare Feature for DocTalk</h2>
        <Row>
          {villageCareFeatures.map((feature, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100x70 shadow-sm">
                <Card.Img variant="top" src={feature.imageUrl} alt={feature.title} />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleFeatureClick(feature.title)}>
                    {feature.actionText}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default VillageCare;
