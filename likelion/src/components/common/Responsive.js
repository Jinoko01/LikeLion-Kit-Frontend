import styled from "styled-components";

const ResponsiveBlock = styled.div`
  width: 85%;
  margin: 0 auto;

  @media (max-width: 748px) {
    width: 90%;
    min-width: 600px;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
