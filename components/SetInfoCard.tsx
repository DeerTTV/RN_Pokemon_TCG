import React, { useState, useEffect, memo } from "react";
import { useNavigation } from "@react-navigation/core";
import styled from "styled-components/native";

import { NavProps } from "../screens";

import Text from "./ui/Text";

type HomeNavProps = NavProps<"Home">;

const SetCard = ({ cardSet }) => {
  const navigation = useNavigation<HomeNavProps>();


  const { legalities, images, name, id, series, total, printedTotal, releaseDate } = cardSet;

const secretTotal = total - printedTotal;

  const onPressHandler = () => {
    navigation.navigate("SetDetails", { setID: id, cardSet });
  };

  return (
    <CardContainer onPress={onPressHandler}>
      <SymbolContainer>
        <Symbol source={{ uri: images.symbol }} resizeMode="contain" />
      </SymbolContainer>
      <ContentContainer>

        <InfoContainer>
          <Text>
            <Text variant="body">{name}</Text>
          </Text>
          <Text variant="small">
            Pokemon -
            <Text variant="small"> {series}</Text>
          </Text>
          <Text variant="small">
            <Text variant="small">{total} </Text>
            Cards
            {secretTotal > 0 && <Text variant="small"> * {secretTotal} Secrets</Text>} 
          </Text>
          <Text variant="small">
            <Text variant="small">{releaseDate}</Text>
          </Text>
        </InfoContainer>
        <StatsContainer>  
          <StatsText>
          <Text variant="header">$3000</Text>
          </StatsText> 
          <StatsText>
          <Text variant="small">BB $160 ($6.00)</Text>
          </StatsText> 
          <StatsText>
          <Text variant="small">Own 12 (10.21%)</Text>
          </StatsText> 
          <StatsText>
            <Text variant="small">Collection Value</Text>
          <Text variant="small">$36.00 (~$3.00)</Text>
          </StatsText> 
          </StatsContainer>
      </ContentContainer>

    </CardContainer>
  );
};

export default memo(
  SetCard,
  (prevProps, nextProps): any => prevProps.show === nextProps.show
);

const CardContainer = styled.TouchableOpacity`
  height: 110px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  margin: 6px 3%;
  shadow-color: ${({ theme }) => theme.colors.bg.grey80};
  shadow-offset: 5px 5px;
  shadow-opacity: 0.3;
  elevation: 5;
  border-radius: 25px;
  overflow: hidden;
  padding: 3px 6px 5px 6px;
  flex-direction: row;
`;



const Symbol = styled.Image`
  height: 40px;
  width: 40px;


`;

const ContentContainer = styled.View`
  flex-direction: row;
  flex: 26;
  padding: 0 2%;
  
`;

const InfoContainer = styled.View`
  align-items: flex-start;
  position: relative;
  width: 100%;
  flex: 6
`;



const SymbolContainer = styled.View`
justify-content: center;
flex: 4;
`;

const StatsContainer = styled.View`
  flex-direction: column;
  align-items: flex-end;
  flex: 4;
  width: 100%;
  position: relative;
`;

const StatsText = styled.View`
  align-items: flex-end;


`;
