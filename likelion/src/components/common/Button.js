import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  background-color: ${palette.gray[8]};
  &:hover {
    background-color: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.lightorange &&
    css`
      background-color: ${palette.lightorange[1]};
      &:hover {
        background-color: ${palette.lightorange[0]};
      }
    `}
  
    &:disabled {
    background-color: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} orange={props.orange ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
