import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

console.log('EL', elevation[7]);
export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: ${black};
  ${elevation[4]}
  ${transition({})}
  &:hover {
    ${elevation[5]}
  }
`;
