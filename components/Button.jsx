import styled, {css} from "styled-components"

export const ButtonStyle = css`
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    svg{
        height: 16px;
        margin-right: 5px;
    }
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.primary && !props.outline && css`
        color: #fff;
        background-color: #3939bf;
        border: 1px solid #3939bf;
    `}
    ${props => props.primary && props.outline && css`
        color: #3939bf;
        background-color: transparent;
        border: 1px solid #3939bf;
    `}
    ${props => props.size === 'l' && css`
        font-size:1.2rem;
        padding: 10px 25px;
        svg{
            height: 20px;
        }
    `}
`

const StyledButton = styled.button`
    ${ButtonStyle}
`;

const Button = ({children, ...props}) => {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  )
}

export default Button