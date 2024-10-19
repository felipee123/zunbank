import React from "react";
import styled from 'styled-components/native';
import { colors } from "../components/thema/tokens";
import Constants from "expo-constants";


export const Container = styled.View`
  flex: 1;
`;

export const ContainerText = styled.View`
  flex: 1;
  margin-top: ${Constants.statusBarHeight };
  justify-content: space-evenly;
`;

export const Top = styled.View`
  height: 25%;
  background-color: ${colors.primary};
  align-items: center;
`;

export const Main = styled.View`
  flex: 1;
  background: ${colors.sencondary}; 
`;

export const ContainerIcon = styled.View`
  width: 85%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 
`;

export const IconUser = styled.View`
width: 64px;
height: 64px;
border-radius: 64px;
background-color: rgb(105, 129, 249);
justify-content: center;
align-items: center;
`;

export const IconContainerGroup= styled.View`
width: 150px;
flex-direction: row;
justify-content: space-between;
`;

export const Name= styled.Text`
color:${colors.sencondary};
font-size: 20px;
font-family:${colors.fonts.Roboto_700Bold};
`;

export const ContainerMoney= styled.View`
 margin:40px;

`;

export const TextAccount= styled.Text`
color:${colors.fonts.colors};
font-size: 28px;
font-family:${colors.fonts.Roboto_500Medium};
`;

export const TextMoney= styled.Text`
color:${colors.fonts.colors};
font-size: 36px;
font-family:${colors.fonts.Roboto_700Bold};
margin-top:12px;
`;