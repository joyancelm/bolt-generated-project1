import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4; /* Light gray background */
  color: #333; /* Dark gray text */
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  text-align: center;
  color: #555; /* Slightly lighter gray for subtitle */
`;

const InputArea = styled.div`
  width: 80%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const Input = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  resize: vertical; /* Allow vertical resizing only */
  box-sizing: border-box; /* Include padding in width calculation */
`;

const Button = styled.button`
  background-color: #007bff; /* Blue button */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease; /* Smooth transition on hover */
  &:hover {
    background-color: #0069d9; /* Darker blue on hover */
  }
`;

const OutputArea = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  white-space: pre-wrap;
  background-color: #f9f9f9; /* Slightly lighter gray for output */
  overflow-y: auto; /* Add scrollbar if output is too long */
  max-height: 300px; /* Limit output height */
`;

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTranslate = () => {
    const translatedText = simulateTranslation(input);
    setOutput(translatedText);
  };

  const simulateTranslation = (text) => {
    // Mock response – replace with a realistic mock if needed
    const mockTranslation = {
      translatedText: text.toUpperCase() + " (Mock Translation)",
      detectedLanguageCode: "en"
    };
    return JSON.stringify(mockTranslation, null, 2); // Prettify JSON for display
  };

  return (
    <Container>
      <Title>Legal Jargon Translator</Title>
      <Subtitle>(Because lawyers charge enough as it is!)</Subtitle>
      <InputArea>
        <Input
          placeholder="Enter legal jargon here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleTranslate}>Translate</Button>
      </InputArea>
      <OutputArea>
        {output}
      </OutputArea>
    </Container>
  );
}

export default App;
