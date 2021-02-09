import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import ThemeContext from "../context/ThemeContext";

const Wrapper = styled.div`
  background-color: ${(props: any) => props.theme.background_primary};
  color: ${(props: any) => props.theme.text_primary};
`;

export interface SigninPageProps {}

const SigninPage: React.FC<SigninPageProps> = () => {
  const theme = useContext(ThemeContext);

  const globalCss = (
    <Global
      styles={css`
        body {
          background-color: ${theme.background_primary};
        }
      `}
    />
  );

  return (
    <Wrapper theme={theme}>
      {globalCss}
      Hello TSX File!
    </Wrapper>
  );
};

export default SigninPage;
