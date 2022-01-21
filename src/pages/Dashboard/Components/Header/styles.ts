import styled from "styled-components/native"
import { Pixel } from "../../../../utils/Utils"

export const Title = styled.Text`
  font-size: ${Pixel(22)}px;
  font-weight: bold;
  color: white;
  align-self: flex-start;
`

export const HeaderContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`
export const IconsContainer = styled.View`
  flex: .6;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`