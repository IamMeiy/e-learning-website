import React, { useEffect, useState } from 'react';
import '../css/HomeContent.css';

const HomeContent = () => {
  const [user, setUser] = useState(null);
  const [greet, setGreet] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [randomAuthor, setRandomAuthor] = useState('');
  const date = new Date();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      greetings();
      fetchQuotes();
    }
  }, []);

  const greetings = () => {
    if (date.getHours() < 12) {
      setGreet('Morning');
    } else if (date.getHours() >= 12 && date.getHours() <= 17) {
      setGreet('Afternoon');
    } else if (date.getHours() >= 17 && date.getHours() <= 24) {
      setGreet('Evening');
    }
  };

  const fetchQuotes = () => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setCurrentQuoteIndex(Math.floor(Math.random() * data.length));
        setRandomAuthor(generateRandomAuthor());
      })
      .catch((error) => {
        console.error('Error fetching quotes:', error);
      });
  };

  const generateRandomAuthor = () => {
    const adjectives = ['Inspiring', 'Creative', 'Wise', 'Unknown'];
    const nouns = ['Philosopher', 'Thinker', 'Dreamer', 'Author'];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`;
  };

  const getNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    setRandomAuthor(generateRandomAuthor());
  };

  return (
    <div className="centered-container">
      {user ? (
        <div>
          <h2 className="welcome-message">Welcome, {user.name}!</h2>
          <p className="greeting">Good {greet}</p>
          <div className="quote-container">
            {quotes.length > 0 && (
              <div>
                <p className="quote-text">
                  <strong>{quotes[currentQuoteIndex].text}</strong>
                </p>
                <p className="quote-author">- {randomAuthor}</p>
                <button className="next-button" onClick={getNextQuote}>
                  Next Quote
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="not-authenticated-message">You are not authenticated. Please log in.</p>
      )}
    </div>
  );
};

export default HomeContent;
