import './App.css';
import React, { useState } from 'react';

function App() {
  // State to store the user input and word count
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  // Function to handle user input change
  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    // Calculate the word count (count only words with letters)
    const words = text.trim().split(/\s+/);
    const filteredWords = words.filter(word => /[a-zA-Z]/.test(word)); // Filter out words without letters
    setWordCount(filteredWords.length);
  };

  return (
    <div className="App" style={{ backgroundColor: 'red !important' }}>
      <header className="App-header">
        <div className="box">
          <div>
            <label>
              Responsive Paragraph Word Counter
              <div><br /></div>
              <div>
                <textarea
                  value={inputText}
                  onChange={handleInputChange}
                  rows="4"
                  cols="50"
                />
              </div>
            </label>
          </div>

          <div className="WordCountBox">
            Word Count: {wordCount}
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
