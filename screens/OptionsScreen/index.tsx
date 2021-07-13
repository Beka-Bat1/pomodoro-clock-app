import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from "../../components/Card";
import LinearBackground from "../../components/LinearBackground";
import PrimaryButton from "../../components/PrimaryButton";
import colors from "../../constants/colors";
import GlobalOptionsContext from "../../context";

interface TimeCard {
  textLeft: string;
  textRight: string;
  isOpened: boolean;
  dropDownValues: number[];
  chosenValue: number;
}

const OptionsScreen = () => {
  const globalOptions = useContext(GlobalOptionsContext);

  useLayoutEffect(() => {
    console.log(timerCards);
  });

  const timerCards: TimeCard[] = [
    {
      textLeft: "Focus Time",
      textRight: globalOptions.focusTime + " Min",
      isOpened: false,
      dropDownValues: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      chosenValue: 1,
    },
    {
      textLeft: "Short Break",
      textRight: globalOptions.shortBreak + " Min",
      isOpened: false,
      dropDownValues: [5, 10, 15, 20],
      chosenValue: 1,
    },
    {
      textLeft: "Long Break",
      textRight: globalOptions.longBreak + " Min",
      isOpened: false,
      dropDownValues: [15, 20, 25, 30, 35, 40, 45, 50],
      chosenValue: 1,
    },
    {
      textLeft: "Sessions",
      textRight: globalOptions.sessions + " Intervals",
      isOpened: false,
      dropDownValues: [1, 2, 3, 4, 5, 6, 7, 8],
      chosenValue: 1,
    },
  ];

  const saveChangesHandler = () => {
    console.log("saving changes ... ");
  };

  const onOptionChange = (identifier: any, value: any) => {
    timerCards.find((timerCard) => {
      timerCard.textLeft === identifier
        ? (timerCard.chosenValue = value)
        : null;
    });
  };

  return (
    <>
      <LinearBackground />
      <View style={styles.container}>
        {timerCards.map((timeCard, index) => {
          return (
            <Card
              textLeft={timeCard.textLeft}
              textRight={timeCard.textRight}
              isOpened={timeCard.isOpened}
              dropDownValues={timeCard.dropDownValues}
              onOptionChange={onOptionChange}
            />
          );
        })}

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => console.log("Cancel")} style={{backgroundColor: colors.gray}} title="Cancel" />

          <PrimaryButton onPress={saveChangesHandler} title="Save" />
        </View>
      </View>
    </>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
    overflow: "hidden",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 10,
    position: "absolute",
    bottom: 50,
  },
});
