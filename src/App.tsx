import { useState, useEffect } from 'react';
import CatFact from './CatFact';
import styled from 'styled-components';

interface CatFactData {
  fact: string;
  length: number;
}

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  align-items: stretch;
`;

function App() {
  const [facts, setFacts] = useState<CatFactData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://catfact.ninja/facts?limit=20')
      .then((res) => res.json())
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch cat facts.');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Cat Facts</h1>
      {loading && <p>Loading facts...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <FactsGrid>
          {facts.map((fact, idx) => (
            <CatFact key={idx} index={idx} fact={fact.fact} length={fact.length} />
          ))}
        </FactsGrid>
      )}
    </div>
  );
}

export default App; 