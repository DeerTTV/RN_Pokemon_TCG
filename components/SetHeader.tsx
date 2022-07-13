import React from "react";
import styled from "styled-components/native";

import Text from "./ui/Text";

import { theme } from "../theme";

const SetHeader = ({ img, name, amount, secrets ,release }) => {


  return (
    <Container>
      <TextContainer>
        <Text variant="title" typeColor="inverse">
          {name}
        </Text>
        <TextRow>
          <Text variant="body" typeColor="inverse">
            Released {release}
          </Text>
          <Text variant="body" typeColor="inverse">
            {amount} cards
          </Text>
          {secrets > 0 &&  <Text variant="body" typeColor="inverse">
            {secrets} secrets
          </Text>}
        </TextRow>
      </TextContainer>
    </Container>
  );
};

export default SetHeader;

const Container = styled.View`
  height: 60px;
  width: 100%;
  margin-bottom: 10px;
`;



const TextContainer = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 10px 10px;

`;

const TextRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

`;
