import styled from 'styled-components';

interface CatFactProps {
  index: number;
  fact: string;
  length: number;
}

const FactCard = styled.div`
  background: #fff2cc;
  color: #222;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 1.5rem 1.5rem 1.25rem 1.5rem;
  border-left: 5px solid #f7b731;
  transition: transform 0.15s, box-shadow 0.15s;
  display: flex;
  flex-direction: column;
  min-height: 160px;
  max-width: 100%;
  margin: 0 auto;
  &:hover {
    transform: translateY(-4px) scale(1.025);
    box-shadow: 0 6px 24px rgba(0,0,0,0.13);
  }
  @media (min-width: 600px) {
    min-height: 180px;
    padding: 2rem 2rem 1.5rem 2rem;
  }
`;

const FactTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #b07d19;
`;

const FactText = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 1.05rem;
  flex: 1;
`;

const FactLength = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #888;
  text-align: right;
`;

const FactKeyword = styled.span`
  display: inline-block;
  background: #f7b731;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 6px;
  padding: 0.2em 0.7em;
  margin-bottom: 0.7em;
  align-self: flex-start;
`;

const FactEnding = styled.span`
  display: inline-block;
  background: #b07d19;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 6px;
  padding: 0.2em 0.7em;
  margin-bottom: 0.7em;
  align-self: flex-end;
`;

const CatFact = ({ index, fact, length }: CatFactProps) => {
  const words = fact.split(' ');
  const keyword = words[0];
  const ending = words[words.length - 1].replace(/\W+$/, ''); // remove punctuation
  return (
    <FactCard>
      <FactTitle>Fact #{index + 1}</FactTitle>
      <FactKeyword>Keyword: {keyword}</FactKeyword>
      <FactEnding>Ending Word: {ending}</FactEnding>
      <FactText>{fact}</FactText>
      <FactLength>Length: {length}</FactLength>
    </FactCard>
  );
};

export default CatFact; 