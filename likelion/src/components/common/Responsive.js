import styled from "styled-components";

const ResponsiveBlock = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 748px) {
    width: 80%;
    min-width: 200px;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
