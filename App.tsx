import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes/index.stack.routes";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <Routes /> 
    </>
  )
}

