import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 250px;
  height: 50px;

  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 2px;

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