import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './App.css';

const projects = [
  { number: '01', category: 'FOUNDATIONS', title: 'Start with the essentials', description: 'A clean setup, a clear structure, and the confidence to make your first changes.', tone: 'mint', icon: '✳' },
  { number: '02', category: 'COMPONENTS', title: 'Build with building blocks', description: 'Bring together reusable pieces that make every screen feel considered.', tone: 'peach', icon: '◈' },
  { number: '03', category: 'WHAT’S NEXT', title: 'Make it your own', description: 'Explore, experiment, and turn a simple starting point into something uniquely yours.', tone: 'lilac', icon: '↗' },
];

function App() {
  return (
    <>
      <div className="App">
        <Navbar expand="lg" className="site-nav">
          <Container>
            <Navbar.Brand href="#top" className="brand-mark"><span className="brand-icon">b.</span> brightstart</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navigation" />
            <Navbar.Collapse id="main-navigation">
              <Nav className="ms-auto align-items-lg-center gap-lg-4">
                <Nav.Link href="#explore">Explore</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Button href="#explore" className="nav-cta">Get started <span aria-hidden="true">↗</span></Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main id="top">
          <section className="hero-section">
            <Container>
              <div className="hero-copy">
                <Badge className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</Badge>
                <h1>A little spark<br />goes a <span>long way.</span></h1>
                <p className="hero-lede">Good things begin with a first step. Find your footing, follow your curiosity, and see where it takes you.</p>
                <Button href="#explore" className="hero-button">Find your starting point <span aria-hidden="true">→</span></Button>
                <div className="hero-note"><span className="note-star">✳</span> Made for the curious, wherever you’re starting from.</div>
              </div>
              <div className="hero-art" aria-hidden="true">
                <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
                <div className="art-sun">✳</div>
                <div className="art-label label-top">stay curious</div>
                <div className="art-label label-bottom">good things grow here</div>
                <span className="art-spark spark-one">✦</span><span className="art-spark spark-two">✳</span><span className="art-spark spark-three">·</span>
              </div>
            </Container>
          </section>

          <section className="explore-section" id="explore">
            <Container>
              <div className="section-heading">
                <div><span className="section-kicker">A GOOD PLACE TO BEGIN</span><h2>Pick a path. <span>Make it yours.</span></h2></div>
                <p>No perfect plan required. Just a few thoughtful steps to help you find your rhythm.</p>
              </div>
              <Row className="g-4">
                {projects.map((project) => (
                  <Col key={project.number} md={6} lg={4}>
                    <Card className={`path-card ${project.tone}`}>
                      <Card.Body>
                        <div className="card-topline"><span>{project.category}</span><span className="card-number">{project.number}</span></div>
                        <div className="card-symbol">{project.icon}</div>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Button variant="link" href="#about" className="card-link">Take a look <span aria-hidden="true">↗</span></Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </main>

        <footer className="site-footer" id="about">
          <Container className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2">
            <span className="footer-brand"><span className="brand-icon">b.</span> brightstart</span>
            <span>A good beginning is its own kind of magic. <span className="footer-star">✳</span></span>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
