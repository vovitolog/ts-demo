import styled, {css} from "styled-components";

type StyledButtonProps = {
    btnType?: "primary" | "secondary"
}

export const StyledButton= styled.button<StyledButtonProps>`
  border: none;
  border-radius: 5px;
  padding: 4px 20px;
  height: 30px;
  
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  
  ${props => props.btnType === "primary" && css<StyledButtonProps>`
    background-color: #4E71FE;;
    color: #ffffff;
  `}

  ${props => props.btnType === "secondary" && css<StyledButtonProps>`
    background-color: #ffffff;;
    color: #4E71FE;
    border: 2px solid #4E71FE;
    box-sizing: border-box;
  `}
`
