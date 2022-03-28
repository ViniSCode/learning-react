import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 250px;
  height: 50px;

  margin: 15rem auto 0 auto;
  border: 2px solid #aaa;
  border-radius: 2px;
  transition: filter .3s ease;

  &:hover{
    filter: brightness(0.1);
  }

  .signOut-icon {
    margin-right: 1rem;
    width: 40px;
    height: 40px;
    color: #888;
  }

  p {
    color: gray;
    font-size: 1.2rem;
  }
`