import React from "react"
import { NativeModules, Platform, Text } from "react-native";
import { Container } from "../LandPage/styles"
import { Title, Header, IconsContainer } from "./styles"
import Icon from "react-native-vector-icons/EvilIcons"
import { Icon as Entypo } from "react-native-vector-icons/Entypo"

function Dashboard() {

  const [stateTime, setStateTime] = React.useState<string>();

  function getCurrentTime() {
    const currentHour = new Date().getHours()

    if (currentHour < 12) setStateTime("morning")
    else if (currentHour < 18) setStateTime("afternoon")
    else setStateTime("evening")
  }

  // function locale() {
  //   const deviceLang = Platform.OS === "ios" ? 
  //     NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] 
  //   : NativeModules.I18nManager.localeIdentifier ;
  //   console.log(deviceLang) 
  // }

  React.useEffect(() => {
    getCurrentTime()
    // locale()
  }, [])

  return (
    <Container>
      <Header>
        <Title>Good {stateTime}</Title>
        <IconsContainer>
          <Icon name="bell" size={20} style={{color: "white", alignSelf: "flex-end"}} />
          <Icon name="bell" size={20} style={{color: "white", alignSelf: "flex-end"}} />
          <Entypo name="bell" size={20} style={{color: "white", alignSelf: "flex-end"}} />
        </IconsContainer>
      </Header>
    </Container>
  )
}

export default Dashboard;