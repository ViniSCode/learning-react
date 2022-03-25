import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`

export const RightText = styled.div`
  max-width: 472px;
  margin-left: 1rem;

  small{
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
    color: var(--text-color);
  }
  
  h2 {
    margin-top: 0.688rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 39px;
  }

  p {
    text-align: justify;
    font-size: 1rem;
    font-weight: 400;
    line-height: 19px;
    text-align: justify;
  }

    
  @media (max-width: 1080px) {
    max-width: 372px;
    
    h2 {
      font-size: 1.8rem;
    }
    
    p {
      text-align: justify;
      font-size: .875rem;
      font-weight: 400;
      line-height: 19px;
      text-align: justify;
    }
  }

  @media (max-width: 900px) {
   margin-left: 0;
   max-width: 100%;
    
    h2 {
      font-size: 2rem;
    }
    
    p {
      text-align: justify;
      font-size: 1rem;
      font-weight: 400;
      line-height: 19px;
      text-align: justify;
    }
  }

`

export const Left = styled.div`
  width: 100%;
  max-width: 790px;

  img {
    max-width: 790px;
    width: 100%;
    height: 400px;
    object-fit: cover;
    max-width: 805px;
    border-radius: 5px;
    margin-right: 1rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;

    img {
      width: 100%;
      max-width: 100%;
    }
  }

`