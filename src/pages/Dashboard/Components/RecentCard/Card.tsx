import React from "react"
import { CardContainer, ImageContainer, TitleContainer, Image, Title } from "./styles"

const mockImage = "https://http2.mlstatic.com/D_NQ_NP_953123-MLB27625818839_062018-O.jpg"

interface CardProps {
  title: string;
}

export function RecentCard({title}: CardProps) {
  return (
    <CardContainer>
      <ImageContainer>
       <Image source={{uri: mockImage}} resizeMode="cover" />
      </ImageContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </CardContainer>
  )
}
