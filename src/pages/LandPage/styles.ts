import styled from "styled-components/native"
import { SafeAreaView, View, Text } from "react-native"
import { Pixel } from "../../utils/Utils"

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`
export const LogoContainer = styled(View)`
  flex: 1;
  padding: ${Pixel(24)}px;
  margin-top: ${Pixel(72)}px; 
`
export const TextContainer = styled(View)`
  /* flex: 1; */
  padding: ${Pixel(24)}px; 
`
export const Phrase = styled(Text)`
  color: white;
  font-size: ${Pixel(28)}px;
  font-weight: bold;
  text-align: center;
`
export const ButtonsContainer = styled(View)`
  flex: 2;
  padding: ${Pixel(24)}px;
  justify-content: space-around; 
`