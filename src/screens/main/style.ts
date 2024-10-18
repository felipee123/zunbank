import React from "react";
import styled from 'styled-components/native';
import { colors } from "../components/thema/tokens";

export const Container = styled.View`
  flex: 1;
`;
export const Top = styled.View`
  height: 25%;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
 
`;
export const Main = styled.View`
  flex: 1;
  background: ${colors.sencondary}; 
`;

export const ContainerIcon = styled.View`
  width: 85%;
  height: 60px;
`;

export const IconUser = styled.View`
width: 64px;
height: 64px;
border-radius: 64px;
background-color: rgb(105, 129, 249,);
justify-content: center;
align-items: center;
`;