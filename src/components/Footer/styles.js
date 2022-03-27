import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 10rem;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.75rem 0;

  position: sticky;
  top: 100%;
 }

 @media (min-height: 1580px){
   position: sticky;
   top: 100%;
 }
`

export const Icons = styled.div`
  margin-bottom: 1.625rem;

  .social-icons {
   margin-right: 1.8rem;
   width: 39px;
   height: 39px;
   color: white;
   cursor: pointer;
   transition: transform .4s ease;

   &:hover{
     transform: translateY(-5px);
   }

   &:last-child {
     margin-right: 0rem;
   }
`

export const Text = styled.div`
  margin-bottom: 1.625rem;

  a {
    color: white;
    margin-right: 1.5rem;

    &:last-child {
      margin-right: 0;
    }
  }

  + a{
    color: var(--lighter-text);
  }
`