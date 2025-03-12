import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alexander Cole, BSE',
      role: 'Lead Software Engineer at Clink LLC',
      background: 'Current Software Engineer at JPMorganChase.',
      education: 'Graduated from The University of Michigan College of Engineering, Class of 2024',
      quote: '"Strikes and gutters man, strikes and gutters"',
      major: 'Computer Science',
      minor: 'Mathematics',
      image: './Images/alex.jpeg'
    },
    {
      id: 2,
      name: 'Sahil Dayal, BA',
      role: 'Head of Operations, Marketing, and Business Execution at Clink LLC',
      background: 'MPhil Candidate in Stem Cell Biology at The University of Cambridge.',
      education: 'Graduated from Case Western Reserve University, Class of 2024',
      quote: '"Cheerio!"',
      major: 'Economics and Biology',
      minor: 'Chemistry',
      image: './Images/sahil.jpeg'
    },
    {
      id: 3,
      name: 'John Gitterman, BS',
      role: 'Software Engineer at Clink LLC',
      background: 'Current Embedded Software Engineer at Aptiv',
      education: 'Graduated from University of Michigan, Class of 2024',
      quote: '"Time is the ultimate arbiter of truth"',
      major: 'Computer Science',
      minor: 'Mathematics',
      image: './Images/john2.png'
    },
    {
      id: 4,
      name: 'Simran, BS',
      role: 'Software Engineer Intern at Clink LLC',
      background: 'Current Undergraduate Engineering Student at University of Michigan',
      // education: 'Graduated from University of Michigan, Class of 2024',
      quote: '"We shape technology, then it shapes us"',
      major: 'TBD',
      minor: 'TBD',
      image: './Images/simran.png'
    }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 mb-4">Meet Our Team</h1>
              <p className="lead">
                We're a team of passionate individuals committed to revolutionizing the way you discover and enjoy nightlife.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                At Clink, we're on a mission to transform how people experience nightlife by delivering personalized recommendations
                that perfectly match individual preferences. By combining AI technology with social connections, 
                we aim to create a platform that makes finding the perfect venue as enjoyable as being there.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Founders Section */}
      <section className="team-section">
        <Container>
          <h2 className="section-title text-center mb-5">Co-Founders</h2>
          <Row>
            {teamMembers.slice(0, 3).map(member => (
              <Col lg={6} key={member.id} className="mb-4">
                <Card className="team-card">
                  <div className="member-image-container">
                    <Card.Img 
                      variant="top" 
                      src={member.image} 
                      alt={member.name} 
                      className="member-image"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="member-name">{member.name}</Card.Title>
                    <Card.Subtitle className="member-role mb-3">{member.role}</Card.Subtitle>
                    
                    {member.background && (
                      <p className="member-background mb-2">{member.background}</p>
                    )}
                    
                    <p className="member-education mb-3">{member.education}</p>
                    <p className="member-education mb-3">{member.quote}</p>

                    
                    <div className="member-details">
                      <p className="mb-1"><strong>Major:</strong> {member.major}</p>
                      <p className="mb-0"><strong>Minor:</strong> {member.minor}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Members Section */}
      <section className="team-section bg-darker">
        <Container>
          <h2 className="section-title text-center mb-5">Team Members</h2>
          <Row>
            {teamMembers.slice(3).map(member => (
              <Col lg={6} key={member.id} className="mb-4">
                <Card className="team-card">
                  <div className="member-image-container">
                    <Card.Img 
                      variant="top" 
                      src={member.image} 
                      alt={member.name} 
                      className="member-image"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="member-name">{member.name}</Card.Title>
                    <Card.Subtitle className="member-role mb-3">{member.role}</Card.Subtitle>

                    {member.background && (
                      <p className="member-background mb-2">{member.background}</p>
                    )}
                    
                    <p className="member-education mb-3">{member.education}</p>
                    <p className="member-education mb-3">{member.quote}</p>

                    
                    <div className="member-details">
                      <p className="mb-1"><strong>Major:</strong> {member.major}</p>
                      <p className="mb-0"><strong>Minor:</strong> {member.minor}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Company Values Section */}
      <section className="values-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="section-title">Our Values</h2>
              <p className="lead">The principles that guide everything we do at Clink</p>
            </Col>
          </Row>
          
          <Row>
            <Col md={4} className="mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovation</h3>
                <p>We're constantly pushing the boundaries of what's possible with AI and personalization technology.</p>
              </div>
            </Col>
            
            <Col md={4} className="mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Community</h3>
                <p>We believe in the power of social connections to enhance real-world experiences.</p>
              </div>
            </Col>
            
            <Col md={4} className="mb-4">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Trust</h3>
                <p>We prioritize data privacy and are committed to building a platform users can trust.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Join Us CTA Section */}
      <section className="join-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2>Join Us On Our Journey</h2>
              <p className="lead mb-4">
                Be among the first to experience Clink and help shape the future of nightlife discovery.
              </p>
              <a 
                href="/#waitlist-section" 
                className="btn btn-primary btn-lg join-btn"
              >
                Join Our Waitlist
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;