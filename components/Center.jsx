import styled from "styled-components";

const CenteredDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Center = ({children}) => {
  return (
    <CenteredDiv>{children}</CenteredDiv>
  )
}

export default Center