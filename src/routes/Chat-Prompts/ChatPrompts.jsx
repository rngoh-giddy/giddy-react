import React from "react";
import { useEffect, useId, useState } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";

import "./ChatPrompts.css";
import { Button } from "react-bootstrap";

export default function ChatPrompts() {
  const askedQuestion = false;
  const [input, setInput] = useState([]);
  const [turbo, setTurboQuestion] = useState([]);
  const [custom, setNormalQuestion] = useState([]);
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch("https://api.getmegiddyapi.com/get-prompts")
      .then((response) => response.json())
      .then((data) => setPrompts(data));
  }, []);

  const changePrompt = (e) => {
    console.log("Changing Prompt");
    console.log(e);
    setInput(e.prompt_body);
  };

  const handleSubmit = (e) => {
    console.log(input);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: input }),
    };

    console.log(requestOptions);
    fetch(
      "https://api.getmegiddyapi.com/question-answer-turbo-custom",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setTurboQuestion(data));
    fetch(
      "https://api.getmegiddyapi.com/question-answer-custom",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setNormalQuestion(data));

    console.log(turbo);
    console.log(custom);
  };
  return (
    <div>
      <Container fluid>
        <Row className="added-padding">
          <Col sm={3}></Col>
          <Col sm={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPrompt">
                <Form.Label>Input Prompt</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={12}
                  value={input}
                  onInput={(e) => setInput(e.target.value)}
                  placeholder="Enter Prompt"
                />
                <Form.Text className="text-muted">
                  A Good place to try out different prompts!
                </Form.Text>
              </Form.Group>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm={3}>
            <Card className="scroll">
              {prompts?.prompts &&
                prompts.prompts.map((prompt) => (
                  <Card onClick={changePrompt.bind(this, prompt)}>
                    <Card.Title>
                      <p>
                        {" "}
                        {prompt.id} | {prompt.created}
                      </p>
                    </Card.Title>
                  </Card>
                ))}
            </Card>
          </Col>
        </Row>
        <Row hidden={askedQuestion} className="added-padding">
          <Col sm={2}></Col>
          <Col sm={4}>
            <Card>
              <Card.Title>Turbo Answer</Card.Title>
              <Card.Body>
                <Card.Text>{turbo && turbo.answer}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Title>Model Answer</Card.Title>
              <Card.Body>
                <Card.Text>{custom && custom.answer}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
}
