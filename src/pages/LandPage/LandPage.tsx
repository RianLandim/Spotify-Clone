import React from "react"
import { Container, LogoContainer, TextContainer, ButtonsContainer, Phrase } from "./styles"
import { Text } from "react-native"
import Button from "../../components/Button/Button"
import { useNavigation } from "@react-navigation/native"

export function LandPage() {

  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <Text style={{color: 'white'}}>Logo Img</Text>
      </LogoContainer>
      <TextContainer>
        <Phrase>Millions of songs.{"\n"}Free on Spotify.</Phrase>
      </TextContainer>
      <ButtonsContainer>
        <Button 
          title="Sign up free" 
          outlined={false} 
        />
        <Button 
          title="Continue with facebook" 
          outlined />
        <Button 
          title="Continue with apple" 
          outlined />
        <Button 
          title="Log in" 
          outlined 
          onPress={() => navigation.navigate("Dashboard" as never)}
        />
      </ButtonsContainer>
    </Container>
  )
}