import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Data Array for VillageCare features
const villageCareFeatures = [
  {
    title: 'Offline Accessibility & Low-Bandwidth Compatibility',
    description: 'A lite version for low connectivity areas and offline symptom entry, automatically synced once connected.',
    imageUrl: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67002376e03027b1614d0468__02bae813-f065-45d9-b2d2-93b7175f142c.jpeg',
    actionText: 'Learn More',
  },
  {
    title: 'Local Health Agents for On-Site Assistance',
    description: 'Village health workers assist patients with registration, symptoms, and follow-up care, facilitating virtual consultations.',
    imageUrl: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67002409a1ea60e71c1697ca__e9ac18aa-2da6-441e-9657-f69937ae7c7e.jpeg',
    actionText: 'Learn More',
  },
  {
    title: 'Doctor Dispatch System',
    description: 'A rapid response network of junior doctors, dispatched to villages for urgent cases with nearby city or town assistance.',
    imageUrl: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/670024accb3dab096674f1c6__47a913bf-66b7-43bd-a3e6-9c318ef6904e.jpeg',
    actionText: 'Learn More',
  },
  {
    title: 'Telemedicine Kiosks in Villages',
    description: 'Telemedicine booths with video conferencing tools in village centers for easy access to virtual doctor consultations.',
    imageUrl: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/6700265a7f2fd23bcac7b3c7__1c96acd1-fab0-4f1a-8e1b-088f50ec9189.jpeg',
    actionText: 'Learn More',
  },
  {
    title: 'Emergency Health Delivery System',
    description: 'Mobile health vans equipped with essential medical supplies dispatched through DocTalk for emergency health needs.',
    imageUrl: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67016e7371ef993ea978ffd2__a829a2b3-5fc3-463d-9f8c-bb5b520a609c.jpeg',
    actionText: 'Learn More',
  },
  {
    title: 'Multi-Language & Dialect Support',
    description: 'Localized language support for rural populations, with easy app navigation in regional languages and dialects.',
    imageUrl: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67016f0c28a69477c937d1dd__2678b583-665b-4b20-a630-392c0559c898.jpeg',
    actionText: 'Learn More',
  },
  {
    title: 'Priority Consultation for Villagers',
    description: 'Faster access to virtual consultations for village patients, handled by doctors trained in rural healthcare.',
    imageUrl: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/67016f9368459a598909f603__6c749d60-8d4e-4552-afee-b0c26491cb1f.jpeg',
    actionText: 'Learn More',
  },
  {
    title: 'Affordable & Flexible Payment Plans',
    description: 'Subsidized rates for rural patients, "pay later" options, and partnerships with NGOs to provide affordable care.',
    imageUrl: 'https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/6701700315ea5801d59936be__9b8de358-98c0-490c-9f49-c5a29741a37c.jpeg',
    actionText: 'Learn More',
  },
];

const VillageCare = () => {
  // Handle button click events for dummy functionalities
  const handleFeatureClick = (feature) => {
    alert(`Clicked on ${feature}... LET US COOK IT FURTHER!`);
  };

  return (
    <section className="village-care-section" style={{ padding: '50px 0', backgroundColor: 'white' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>Services for Underprivileged Community</h2>
        <Row>
          {villageCareFeatures.map((feature, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-10 shadow-sm" style={{ height: '350px' }}>
                <Card.Img
                  variant="top"
                  src={feature.imageUrl}
                  alt={feature.title}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <Card.Body style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <Card.Title style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{feature.title}</Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem', lineHeight: '1.4rem' }}>
                    {feature.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleFeatureClick(feature.title)}
                    style={{ position: 'absolute', bottom: '20px' , width : '90%'}}
                  >
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
