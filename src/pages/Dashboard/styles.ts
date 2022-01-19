import styled from "styled-components/native"
import { Pixel } from "../../utils/Utils"

export const Title = styled.Text`
  font-size: ${Pixel(18)}px;
  font-weight: bold;
  color: white;
  align-self: flex-start;
  padding: ${Pixel(24)}px;
`

export const Header = styled.View`
  flex: .5;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`
export const IconsContainer = styled.View`
  flex: 2;
  flex-direction: row;
`