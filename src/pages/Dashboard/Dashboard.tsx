import React from "react"
import { Container } from "../LandPage/styles";
import { CardContainer } from "./styles"
import { Header, RecentCard } from "./Components"
import { View, ScrollView, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mockData = [
  {
    title: "teste1"
  },
  {
    title: "teste2"
  },
  {
    title: "teste3"
  },
  {
    title: "teste4"
  },
  {
    title: "teste5"
  },
  {
    title: "teste6"
  },
]

export function Dashboard() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "black", padding: 12, justifyContent: "space-between"}}>
      <ScrollView 
        nestedScrollEnabled 
        style={{flex: 1, backgroundColor: "black"}} 
        contentContainerStyle={{flexGrow: .5, justifyContent: "space-between"}}
      >
        <Header/>
        <CardContainer>
          <View style={{flex: 1}}>
            {
              mockData.slice(0,3).map((item, index) => (
                <RecentCard key={index} title={item.title}/>
              ))
            }
          </View>
          <View style={{flex: 1}}>
              {
              mockData.slice(3).map((item, index) => (
                <RecentCard key={index} title={item.title}/>
              ))
            }
          </View>
        </CardContainer>
        <View>
          <ScrollView 
            horizontal 
            contentContainerStyle={{flexGrow: 1}}>
            {
              mockData.map((item, index) => (
                <RecentCard key={index} title={item.title}/>
              ))
            }
          </ScrollView>
        </View>
        <View style={{flex: 6}}>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
