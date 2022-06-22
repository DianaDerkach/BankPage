import React from "react";
import { Text, View } from "react-native";
import Home from "../pages/Home";
import Succeeded from "../pages/Succeeded";

type idPageToShowType = {
  home: string,
  succeeded: string,
  initial: string,
}

interface ContentGeneratorProps {
  idPageToShow: idPageToShowType,
}

export const ContentGenerator = ({ idPageToShow }: ContentGeneratorProps) => {
  const ui = {
    home: <Home/>,
    succeeded: <Succeeded/>,
    initial: <View/>
  }

  return (
    ui[idPageToShow]
  )
};
