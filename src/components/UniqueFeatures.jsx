import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const UniqueFeatures = () => {
  // Array of card data
  const featureData = [
    {
      title: "Seamless Integration of In-Person and Virtual Consultations",
      text: "Patients can choose between physical visits and video consultations, with flexible transitions if circumstances change.",
    },
    {
      title: "Agent-Facilitated Communication",
      text: "Instead of overwhelming doctors with direct messages, agents act as intermediaries, ensuring efficient time management and proper triaging of cases.",
    },
    {
      title: "Doctor Availability Flexibility",
      text: "Doctors can set flexible schedules, and patients can view real-time availability, avoiding the hassle of back-and-forth communications.",
    },
    {
      title: "Affordable and Scalable",
      text: "Junior doctors and trainees can earn extra income through virtual consultations and in-person visits, while patients benefit from affordable healthcare options.",
    },
    {
      title: "Data Security and Compliance",
      text: "Compliant with HIPAA and GDPR, DocTalk ensures patient data privacy, making it a trustworthy platform for sensitive medical information.",
    },
  ];

  // State for managing which cards are visible
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Move to the next set of cards automatically
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentIndex]);

  // Handle next and previous buttons
  const handleNext = () => {
    if (currentIndex < featureData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(featureData.length - 3); // Loop to the last set of cards
    }
  };

  return (
    <section className="unique-features-section" style={{ padding: '50px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>What Makes DocTalk Unique</h2>
        <div className="carousel-container" style={{ position: 'relative' }}>
         

          {/* Card carousel */}
          <Row className="carousel" style={{ overflow: 'hidden' }}>
            {featureData.slice(currentIndex, currentIndex + 3).map((feature, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="btn"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              alignItems: 'center',
            }}
          >

           {/* Previous button */}
           <Button 
            variant="primary" 
            style={{ width: '30px' }}
            onClick={handlePrev}
          >
            &#8249;
          </Button>

          {/* Next button */}
          <Button 
            variant="primary" 
            style={{ width: '30px' }}
            onClick={handleNext}
          >
            &#8250;
          </Button>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default UniqueFeatures;
