import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto 15rem auto;
  padding: 1rem;

  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`

export const Card = styled.div`
  max-width: 38rem;
  margin-right: 2rem;

  @media (max-width: 700px) {
    margin-right: 0;
    max-width: 100%;

    & + & {
      margin-top: 2rem;
    }
  }

  &:last-child {
    margin-right: 0rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    border-radius: 5px;
  }
`

export const Text = styled.div`
  margin-top: 1rem;
  
  h2 {
    font-size: 1.563rem;
    line-height: 30px;
    font-weight: 400;
  }
  
  p {
    color: var(--text-color);
    font: 1rem;
  }

  @media (max-width: 700px) {
    p{
      text-align: justify;
    }
  }
`