import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background: var(--secondary);
  padding: .5rem 3rem;
  margin-top: 1.6rem;
  cursor: pointer;
  color: white;
  border-radius: 23.5px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter .3s ease;

  &:hover{
    filter: brightness(0.9);
  }
  
  .arrow-icon {
    margin-left: 6px;
    width: 24px;
    height: 24px;
  }
`