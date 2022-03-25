import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1280px;
  margin: 1rem auto;
  padding: 1rem;

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Logo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
  
  a{
    font-size: 1.25rem;
    font-family: 'Satisfy', cursive;
  }
`

export const NavMenu = styled.div`
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
  background: var(--primary);
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