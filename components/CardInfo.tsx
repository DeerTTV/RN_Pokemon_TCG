import React, { memo } from "react";
import { FlatList } from "react-native";

import styled from "styled-components/native";

import BkgColorView from "./ui/BkgColorView";
import Text from "./ui/Text";

const CardInfo = ({ info, set, onPress }) => {
  const { images, name, hp, subtypes, supertype, flavorText, types, rules, number, tcgplayer, rarity } =
    info;

  const { images: set_img, name: set_name, total: set_total, printedTotal: set_printed, releaseDate: set_release } = set;
  const set_secrets = set_total - set_printed
  const key = Object.keys(tcgplayer.prices)[0];
  const card_val = tcgplayer.prices[key].market;

  const typeColor = types ? types[0].toLowerCase() : "default";

  const cardTypes = ["normal", "holofoil", "reverseHolofoil", "1stEditionHolofoil", "unlimitedHolofoil"];
  const cardTypeTitles = ["Normal", "Holofoil", "Reverse Holofoil", "1st Edition Holo Foil", "Unlimited Holofoil"];



  const PriceList = () => {

    return (
      cardTypes.map((type, index) => {
        if (info.tcgplayer.prices[type]) {
          return (
            <Text key={index}>
              <Text variant="small">{cardTypeTitles[index]}</Text>
              <Text variant="small"> Market: &nbsp;
        <Text variant="small">{"$ " + info.tcgplayer.prices[type].market} &nbsp;</Text>
              </Text>
              <Text variant="small">Low: &nbsp;
        <Text variant="small">{"$ " + info.tcgplayer.prices[type].low} &nbsp;</Text>
              </Text>
              <Text variant="small">Mid: &nbsp;
        <Text variant="small">{"$ " + info.tcgplayer.prices[type].mid} &nbsp;</Text>
              </Text>
              <Text variant="small"> High: &nbsp;
        <Text variant="small">{"$ " + info.tcgplayer.prices[type].high} &nbsp;</Text>
              </Text>
            </Text>
          )
        } else { return null }
      }))
  };

  const onImgClickHandler = () => {
    onPress(images.large);
  };

  return (
    <ListContainer>
      <CardImageContainer onPress={onImgClickHandler}>
        <CardImage source={{ uri: images.small }} resizeMode="contain" />
      </CardImageContainer>
      <CardContainer bgColor={typeColor}>
        <InfoContainer>
          {/* <Text variant="small">
            <Text variant="header">{name} </Text>
          </Text>
          <Text variant="small">
            {set_name} -  <Symbol source={{ uri: set_img.symbol }} resizeMode="contain" />
          </Text>
          <Text variant="small">
            {rarity} - {number}/{set_total}
          </Text> */}
                    <PriceList></PriceList>
        </InfoContainer>

        <RightInfo>
          {/* <Text variant="small">
            {card_val > 0 && <Text variant="small">${card_val}</Text>}
          </Text>
          <Text variant="small">
            $ +- | % +-
            </Text>
          <Text variant="small">
            Date Acquired
            </Text> */}
        </RightInfo>

      </CardContainer>
    </ListContainer>
  );
};

export default memo(
  CardInfo,
  (prevProps, nextProps): any => prevProps.show === nextProps.show
);

const ListContainer = styled.TouchableOpacity`
flex-direction: row;
padding: 1%;
height: 110px;
width: 100%;
justifyContent: space-evenly;
`;

const CardContainer = styled(BkgColorView)`

  shadow-color: ${({ theme }) => theme.colors.bg.grey80};
  shadow-offset: 5px 5px;
  shadow-opacity: 0.3;
  elevation: 5;
  border-radius: 10px;
  overflow: hidden;


  justifyContent: space-between;
  flex-direction: row;
  flex: 24;
  padding: 0 2%;
  width: 100%;

`;

const InfoContainer = styled.View`
  align-items: flex-start;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 5;
`;



const CardImageContainer = styled.View`
  flex: 6;
  justifyContent: center;
`;

const CardImage = styled.Image`
  height: 90%;
  width: 100%;

`;


const Symbol = styled.Image`
  height: 10px;
  width: 10px;


`;

const RightInfo = styled.View`
flex-direction: column;
align-items: flex-end;
justify-content: space-evenly;
flex: 0;
`;
