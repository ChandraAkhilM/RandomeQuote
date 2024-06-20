import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';
import './App.css';

const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" }
];

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    generateNewQuote();
  }, []);

  const generateNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const tweetQuote = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text)} - ${encodeURIComponent(quote.author)}`;

  return (
    <Container id="quote-box" className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row className="mb-4">
        <Col className="text-center bg-light p-4 rounded">
          <h1 id="text">{quote.text}</h1>
          <h4 id="author" className="text-end">{quote.author}</h4>
          <div className="d-flex justify-content-end mt-3">
            <a
              id="tweet-quote"
              href={tweetQuote}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-2"
            >
              <FaTwitter />
            </a>
          </div>
        </Col>
      </Row>
      <Button id="new-quote" onClick={generateNewQuote} variant="success">New Quote</Button>
    </Container>
  );
}

export default App;
