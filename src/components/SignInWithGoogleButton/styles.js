import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 250px;
  height: 50px;

  margin: 0 auto;
  border: 2px solid #aaa;
  border-radius: 2px;
  transition: border .3s ease;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);

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