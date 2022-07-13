import React, { useState } from "react";
import { ButtonGroup } from "react-native-elements";
import styled from "styled-components/native";

import Text from "./ui/Text";


import { Searchbar } from 'react-native-paper';

import { FontAwesome } from "@expo/vector-icons";

import { theme } from "../theme";

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};



export default SearchBarComponent;

const Container = styled.View`
  height: 80px;
  width: 100%;
  justify-content: center;
`;

const TextContainer = styled.View`
  margin-left: 3%;
  Color: #FFFFFF;
`;

const RowContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const TouchOp = styled.TouchableOpacity`
  width: 36px;
  height: 40px;
  justify-content: flex-end;
`;
