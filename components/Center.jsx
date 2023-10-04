import styled from "styled-components";

const CenteredDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (max-width: 767px) {
    padding: 0 10px;
  }
`;

const Center = ({children}) => {
  return (
    <CenteredDiv>{children}</CenteredDiv>
  )
}

export default Center