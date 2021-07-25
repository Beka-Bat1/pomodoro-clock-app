import React, { useContext, useRef, useState, useEffect } from "react";
import { Text, View, Pressable, Animated } from "react-native";
import GlobalOptionsContext from "../../../context";
import getStyleObj from "./styles";

interface Props {
  dropDownValues: number[];
  identifier: string;
  onOptionChange: Function;
  isListOpen: boolean;
}

interface ItemToRender {
  item?: any;
  index?: any;
  separators?: any;
}

const ExtendedCard = (props: Props) => {
  const styles = getStyleObj();
  const globalOptions = useContext(GlobalOptionsContext);
  // selected item gets different style
  const [selectedItem, setSelectedItem] = useState(-1);

  let { isListOpen, dropDownValues, identifier, onOptionChange } = props;

  const optionUpdateHandler = (item: any, index: any) => {
    setSelectedItem(index);

    switch (identifier) {
      case "Focus Time":
        onOptionChange("Focus Time", item);
        break;
      case "Short Break":
        onOptionChange("Short Break", item);
        break;
      case "Long Break":
        onOptionChange("Long Break", item);
        break;
      case "Sessions":
        onOptionChange("Sessions", item);
        break;
      default:
        throw new Error("something is wrong during setting option ...");
    }
  };

  const heightValue = useRef(new Animated.Value(0)).current;

  const containerHeight = heightValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 300],
  });

  useEffect(() => {
    switch (isListOpen) {
      case false:
        Animated.timing(heightValue, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        break;
      case true:
        Animated.timing(heightValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
        break;
      default:
        console.warn("errr");
    }
  }, [isListOpen]);

  const itemToRender = (itemRenderProps: ItemToRender) => {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          key={itemRenderProps.index}
          onPress={() =>
            optionUpdateHandler(itemRenderProps.item, itemRenderProps.index)
          }
          style={[
            styles.button,
            itemRenderProps.index == selectedItem
              ? styles.selectedButton
              : styles.unselectedButton,
          ]}
        >
          <Text style={styles.text}>{itemRenderProps.item}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <Animated.FlatList
      style={[styles.listContainer, { height: containerHeight }]}
      data={dropDownValues}
      keyExtractor={(item: any, index: any) => index + item}
      extraData={selectedItem}
      renderItem={itemToRender}
      ItemSeparatorComponent={() => (
        <React.Fragment>
          <View style={styles.separator} />
        </React.Fragment>
      )}
    />
  );
};

export default ExtendedCard;
