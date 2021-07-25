import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "../../components/Card";
import ExtendedCard from "../../components/Card/ExtendedCard";
import LinearBackground from "../../components/LinearBackground";
import PrimaryButton from "../../components/PrimaryButton";
import GlobalOptionsContext from "../../context";

import colors from "../../constants/colors";

interface TimeCard {
  textLeft: string;
  textRight: string;
  isOpened: boolean;
  dropDownValues: number[];
  chosenValue: number;
}

const OptionsScreen = () => {
  const globalOptions = useContext(GlobalOptionsContext);

  const { navigate } = useNavigation();

  let timerCards: TimeCard[] = [
    {
      textLeft: "Focus Time",
      textRight: globalOptions.focusTime + " Min",
      isOpened: false,
      dropDownValues: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      chosenValue: globalOptions.focusTime,
    },
    {
      textLeft: "Short Break",
      textRight: globalOptions.shortBreak + " Min",
      isOpened: false,
      dropDownValues: [5, 10, 15, 20],
      chosenValue: globalOptions.shortBreak,
    },
    {
      textLeft: "Long Break",
      textRight: globalOptions.longBreak + " Min",
      isOpened: false,
      dropDownValues: [15, 20, 25, 30, 35, 40, 45, 50],
      chosenValue: globalOptions.longBreak,
    },
    {
      textLeft: "Sessions",
      textRight: globalOptions.sessions + " Intervals",
      isOpened: false,
      dropDownValues: [1, 2, 3, 4, 5, 6, 7, 8],
      chosenValue: globalOptions.sessions,
    },
  ];

  const saveChangesHandler = () => {
    console.log("saving changes ... ");

    timerCards.map((timerCard) => {
      globalOptions.updateFocusTime(timerCard.chosenValue);
      globalOptions.updateShortBreak(timerCard.chosenValue);
      globalOptions.updateLongBreak(timerCard.chosenValue);
      globalOptions.updateSessions(timerCard.chosenValue);
    });
  };

  const cancelHandler = () => {
    navigate("TimerScreen");
  };

  const onOptionChange = (identifier: string, value: number) => {
    console.log(identifier, value);

    timerCards.find((timerCard) => {
      if (timerCard.textLeft === identifier) {
        timerCard.chosenValue = value;

        switch (identifier) {
          case "Sessions":
            timerCard.textRight = `${value} Intervals`;
            break;
          default:
            timerCard.textRight = `${value} Min`;
            break;
        }
      }
    });
  };

  const onButtonPress = (identifier: string) => {
    timerCards.find((timerCard) => {
      if (timerCard.textLeft === identifier) {
        console.log(timerCard.isOpened, "card open");
        timerCard.isOpened = !timerCard.isOpened;
      }
    });
  };

  return (
    <>
      <View style={styles.container}>
        <LinearBackground />
        <View style={styles.optionContainer}>
          <FlatList
            data={timerCards}
            keyExtractor={(item, index) => item.textLeft}
            extraData={timerCards}
            renderItem={(itemData) => {
              const { textLeft, textRight, isOpened, dropDownValues } =
                itemData.item;

              return (
                <>
                  <Card
                    key={itemData.index}
                    textLeft={textLeft}
                    textRight={textRight}
                    isOpened={isOpened}
                    onButtonPress={() => onButtonPress(textLeft)}
                  />

                  {isOpened && (
                    <ExtendedCard
                      dropDownValues={dropDownValues}
                      identifier={textLeft}
                      onOptionChange={onOptionChange}
                      isListOpen={isOpened}
                    />
                  )}
                </>
              );
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPress={cancelHandler}
            style={{ backgroundColor: colors.gray }}
            title="Cancel"
          />

          <PrimaryButton title="Save" onPress={saveChangesHandler} />
        </View>
      </View>
    </>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.2,
    marginBottom: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  optionContainer: {
    flex: 0.9,
    marginTop: 50,
    paddingBottom: 10,
  },
});
