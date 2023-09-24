import Link from "next/link";
import { ButtonStyle } from "./Button";
import styled from "styled-components"

const StyledLink = styled(Link)`
    ${ButtonStyle}
`;

const LinkButton = (props) => {
  return (
    <StyledLink {...props} />
  )
}

export default LinkButton