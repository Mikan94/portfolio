import React from 'react';
import blobAbout from '../assets/blobAbout.svg';
import { Button, Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={blobAbout} alt='blobAbout' />
        </Col>
        <Col>
          <p>
            Zum besseren Kennenlernen habe ich einfach 21 Fakten über mich raus
            gekramt :) Hier ein kleiner Teaser: - Lorem ipsum lorem ipsum lorem
            ipsum - Lorem ipsum lorem ipsum lorem ipsum
          </p>
          <Button className='button'>Mag du mehr erfahren?</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
