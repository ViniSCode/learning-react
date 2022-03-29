import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto 15rem auto;
  padding: 6.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(50, 157, 255, 0.13);

  @media (max-width: 768px) {
    padding: 4rem 2rem 4rem 2rem;
  }
`

export const Text = styled.div`
  min-width: 370px;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 3.313rem;
    line-height: 64px;
    color: #000000;
  }
  
  li {
    margin-left: 1.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1.563rem;
    line-height: 31px;
    
    &:first-child{
      margin-top: 2.125rem;
    }
  }

  @media (max-width: 984px) {
    h2 {
      font-size: 2.5rem;
    }
    min-width: 260px;

    @media (max-width: 768px) {
      min-width: 100%;
      margin-bottom: 2rem;
    }
  }`

export const Card = styled.div`
  max-width: 30rem;
  width: 100%;

  display: flex;
  gap: 2rem;
  align-items: start;
  justify-content: center;

  img{
    max-width: 465.13px;
  }
  
  img{
    width: 100%;
  }

  @media (max-width: 984px) {
    img{
      width: 80%;
    }
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;

    img{
      width: 100%;
    }
  }`