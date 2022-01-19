import React from "react"
import { TouchableOpacityProps } from "react-native"
import { Container, Title } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  outlined?: boolean;
}

export default function Button({title, outlined, ...props} : ButtonProps) {
  return (
    <Container
      isOutlined={outlined}
      {...props}
    >
      <Title isOutlined={outlined}>{title}</Title>
    </Container>
  )
}