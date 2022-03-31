import styled, { css } from 'styled-components';


export const Container = styled.div` 
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  background: linear-gradient(37deg, #1268cc 0%, #459BFF 95%);
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  transform: translateY(100px);
  
  > svg{
    position: absolute;
    top: 3rem;
    right: 1rem;
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: white;
    transition: .7s;
    transform: rotate(45deg);
  }


  ${({ isMenuVisible }) => isMenuVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    
    svg {
      transform: rotate(0deg);
    }
  `}
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;

  a {
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
  }
  `

export const Logo = styled.div`
  position: absolute;
  top: 2rem;
  left: 1rem;
`