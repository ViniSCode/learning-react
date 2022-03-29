import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background: var(--primary);
  padding: .5rem 3rem;
  margin-top: 1.6rem;
  cursor: pointer;
  color: white;
  border-radius: 23.5px;
  font-weight: 500;
  transition: filter .3s ease;

  &:hover{
    filter: brightness(0.9);
  }
`