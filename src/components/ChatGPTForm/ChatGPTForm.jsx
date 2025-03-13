import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Box } from "../Atoms/Box/Box";
import { improveText } from "../../api/openai";

const FormContainer = styled.div`
  max-width: 800px;
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
`;

const TextArea = styled.textarea`
  width: 95%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 15px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  margin-top: 10px;
`;

const ResultContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const ResultTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 15px;
`;

function ChatGPTForm() {
  const [inputText, setInputText] = useState("");
  const [improvedText, setImprovedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastRequestTime, setLastRequestTime] = useState(0);

  const handleSubmit = async () => {
    const now = Date.now();
    if (now - lastRequestTime < 10000) {
      setError("Veuillez attendre 10 secondes entre chaque requête");
      return;
    }

    setLastRequestTime(now);
    setLoading(true);
    setError("");
    setImprovedText("");

    const response = await improveText(inputText, import.meta.env.VITE_OPENAI_API_KEY);
    
    if (!response.success) {
      setError(response.error);
      if (response.error.includes("Clé API manquante")) {
        toast.error(response.error);
      }
    } else {
      toast.success("Amélioration réussie !");
      setImprovedText(response.data);
    }
    
    setLoading(false);
  };

  return (
    <FormContainer>
      <Title>Améliorer une lettre d'adressage médicale</Title>

    <Box $width="100%">
        <TextArea
            rows={10}
            placeholder="Collez ici la lettre à améliorer..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        />
    </Box>

      <div>
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Amélioration en cours..." : "Améliorer"}
        </Button>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {improvedText && (
        <ResultContainer>
          <ResultTitle>Lettre améliorée :</ResultTitle>
          <pre style={{color: 'black', whiteSpace: 'pre-wrap', fontFamily: 'inherit'}}>{improvedText}</pre>
        </ResultContainer>
      )}
    </FormContainer>
  );
}

export default ChatGPTForm;
