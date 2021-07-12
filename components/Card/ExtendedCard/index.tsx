import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Platform,
  TouchableHighlight,
  Alert,
  Pressable,
} from "react-native";
import GlobalOptionsContext from "../../../context";
import getStyleObj from "./styles";

interface Props {
  dropDownValues: number[];
  identifier: string;
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

  const optionUpdateHandler = (item: any, index: any) => {
    setSelectedItem(index);
    console.log(item, "an item in extended card select item handler ");

    switch (props.identifier) {
      case "Focus Time":
        globalOptions.updateFocusTime(item);
        break;
      case "Short Break":
        globalOptions.updateShortBreak(item);
        break;
      case "Long Break":
        globalOptions.updateLongBreak(item);
        break;
      case "Sessions":
        console.log('updating session');
        console.log(item);
        

        globalOptions.updateSessions(item);
        break;
      default:
        throw new Error("something is wrong during setting option ...");
    }
  };

  const itemToRender = (itemRenderProps: ItemToRender) => {
    return (
      <View style={styles.container}>
        <Pressable
          key={itemRenderProps.index}
          onPress={() =>
            optionUpdateHandler(itemRenderProps.item, itemRenderProps.index)
          }
          style={itemRenderProps.index == selectedItem && styles.innerContainer}
        >
          <Text style={styles.text}>{itemRenderProps.item}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      data={props.dropDownValues}
      keyExtractor={(item: any, index: any) => index}
      extraData={selectedItem}
      renderItem={itemToRender}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default ExtendedCard;
