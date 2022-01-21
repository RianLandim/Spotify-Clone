import React from "react"
import { NativeModules, Platform, Text, View } from "react-native";
import { Title, HeaderContainer, IconsContainer } from "./styles"
import MaterialIcons  from "react-native-vector-icons/MaterialCommunityIcons"

export function Header() {

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
      <HeaderContainer>
        <View style={{justifyContent: "flex-start"}}>
          <Title>Good {stateTime}</Title>
        </View>
        <View style={{flex: .5}}/>
        <IconsContainer>
          <MaterialIcons name="bell-outline" size={24} style={{color: "white", alignSelf: "flex-end"}} />
          <MaterialIcons name="clock-outline" size={24} style={{color: "white", alignSelf: "flex-end"}} />
          <MaterialIcons name="cog-outline" size={24} style={{color: "white", alignSelf: "flex-end"}} />
        </IconsContainer>
      </HeaderContainer>
  )
}