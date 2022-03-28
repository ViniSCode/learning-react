import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 250px;
  height: 50px;

  margin: 15rem auto 2rem auto;
  border: 2px solid #aaa;
  border-radius: 2px;
  transition: border .3s ease;

  &:hover{
    border-color: black;
  }

  .google-icon {
    margin-right: 1rem;
    width: 40px;
    height: 40px;
  }

  p {
    color: gray;
    font-size: 1.2rem;
  }
`