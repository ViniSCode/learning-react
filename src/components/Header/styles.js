import styled, { css } from 'styled-components';

export const Container = styled.header`
  max-width: 1280px;
  margin: 1rem auto;
  padding: 1rem;

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login-icon{
    width: 36px;
    height: 36px;
    color: gray;
  }

  .menuOpen {
    width: 25px;
    height: 25px;
    opacity: 1;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }
`

export const Logo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
  opacity: 1;

  a{
    font-size: 1.25rem;
    font-family: 'Satisfy', cursive;
  }

  ${({isMenuVisible}) => isMenuVisible && css`
    opacity: 0;
  `}
`

export const NavMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  
  display: flex;
  align-items: center;

  a {
    margin-left: 2.5rem;
    
    &:first-child {
      margin-left: 0;
    }
  }
`

export const CreatePostButton  = styled.div`
  background: var(--secondary);
  color: white;
  border-radius: 5px;
  padding: 0.6rem 0.8rem; 
  transition: all 0.3s ease;

  &:hover{
    filter: brightness(.9);
  }
`

export const Avatar = styled.div`
  margin-top: 5px;

  img{
    border-radius: 50%;
    width: 36px;
  }
`