import styled from "styled-components/native";
import { Pixel } from "../../../../utils/Utils";

export const CardContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${"#3E404666"};
  width: ${"90%"};
  border-radius: ${Pixel(4)}px;
  margin-bottom: ${Pixel(7)}px;
`
export const ImageContainer = styled.View`
 flex: .9;
`

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-top-left-radius: ${Pixel(4)}px;
  border-bottom-left-radius: ${Pixel(4)}px;
`
export const Title = styled.Text`
  color: white;
  font-size: ${Pixel(16)}px;
  font-weight: bold;
`