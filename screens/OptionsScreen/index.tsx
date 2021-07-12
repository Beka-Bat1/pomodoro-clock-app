import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from "../../components/Card";
import GlobalOptionsContext from "../../context";

interface TimeCard {
  textLeft: string;
  textRight: string;
  isOpened: boolean;
  dropDownValues: number[];
}

const OptionsScreen = () => {
  const globalOptions = useContext(GlobalOptionsContext);

  useEffect(() => {
    console.log(globalOptions);
  }, [globalOptions]);

  const timerCards: TimeCard[] = [
    {
      textLeft: "Focus Time",
      textRight: globalOptions.focusTime + ' Min',
      isOpened: false,
      dropDownValues: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    },
    {
      textLeft: "Short Break",
      textRight: "5 min",
      isOpened: false,
      dropDownValues: [5, 10, 15, 20],
    },
    {
      textLeft: "Long Break",
      textRight: "15 min",
      isOpened: false,
      dropDownValues: [15, 20, 25, 30, 35, 40, 45, 50],
    },
    {
      textLeft: "Sessions",
      textRight: "4 intervals",
      isOpened: false,
      dropDownValues: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  ];

  return (
    <View>
      {timerCards.map((timeCard, index) => {
        return (
          <Card
            textLeft={timeCard.textLeft}
            textRight={timeCard.textRight}
            isOpened={timeCard.isOpened}
            dropDownValues={timeCard.dropDownValues}
          />
        );
      })}
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({});
