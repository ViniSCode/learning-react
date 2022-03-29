import styled from 'styled-components';

export const Container = styled.div`
  > h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 53px;
      line-height: 64px;
      text-align: center;
      color: #000000;
  }
`

export const Card = styled.div`
  max-width: 52.063rem;
  margin: 4.375rem auto 0 auto;
  padding: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #B0B0B0;
  border-radius: 5px;
`

export const RightText = styled.div`
  max-width: 43.25rem;
  margin-left: 1rem;

  small{
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
    color: var(--text-color);
  }
  
  h2 {
    margin-top: 1.688rem;
    margin-bottom: 1.063rem;
    font-size: 1.75rem;
    width: 100%;
    max-width: 100%;    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;

    font-style: normal;
    font-weight: 500;
    line-height: 34px;

  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: justify;
    letter-spacing: 0.08em;
    margin-bottom: 0.625rem;
    color: #555555;
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
