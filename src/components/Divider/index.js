import styled from 'styled-components';
const TextDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  > div {
    width: 90%;
    height: 1px;
    background: #DCDCDC;
  }
`
export function Divider() {
  return (
    <TextDivider>
      <div></div>
    </TextDivider>
  )
}
