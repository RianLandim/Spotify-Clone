import { TouchableOpacityProps, TextProps, Dimensions } from "react-native"
import styled from "styled-components/native"
import {Pixel} from "../../utils/Utils"

interface TouchableProps extends TouchableOpacityProps {
  isOutlined?: boolean;
}
interface TitleProps extends TextProps {
  isOutlined?: boolean;
}


export const Container = styled.TouchableOpacity<TouchableProps>`
  justify-content: center;
  align-items: center;
  background-color: ${({isOutlined}) => (isOutlined ? "#000" : "#09D967")};
  border-radius: ${Pixel(25)}px;
  width: ${Dimensions.get('screen').width - Pixel(24)}px;
  height: ${Pixel(52)}px;
  border-width: ${({isOutlined}) => (isOutlined ? .5 : 0)}px;
  border-color: ${({isOutlined}) => (isOutlined ? "#fff" : "#000")}
`

export const Title = styled.Text<TitleProps>`
  font-weight: bold;
  font-size: ${Pixel(18)}px;
  color: ${({isOutlined}) => (isOutlined ? "#fff" : "#000")};
`