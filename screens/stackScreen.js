import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Swiper from "react-native-deck-swiper";
import CardItem from "../components/CardItem";
import styles from "../styles/cardItem";
const stackScreen = ({ route, navigation }) => {
  const { fragranceList } = route.params;
  const [selectedChoices, setSelectedChoices] = useState([]);
  console.log(fragranceList.size);

  useEffect(() => {
    setSelectedChoices([]);
  }, [fragranceList]);

  const renderCardItem = (item) => {
    return (
      <View style={styles.card}>
        <CardItem itemData={item}></CardItem>
      </View>
    );
  };

  const redirectToLeaderBoard = () => {
    navigation.navigate("SelectedChoices", {
      selectedChoices: selectedChoices,
    });
  };
  const addSelectedCard = (index) => {
    let temp = selectedChoices;
    temp.push(fragranceList[index]);
    setSelectedChoices(temp);
  };
  return (
    <View style={{ backgroundColor: "white" }}>
      <Swiper
        cards={fragranceList}
        renderCard={renderCardItem}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        cardIndex={0}
        stackSeparation={15}
        disableBottomSwipe={true}
        onSwipedLeft={(cardIndex) => console.log("Swiped left")}
        onSwipedRight={(cardIndex) => addSelectedCard(cardIndex)}
        onSwipedTop={(cardIndex) => console.log("Swiped top")}
        onSwipedAll={() => redirectToLeaderBoard()}
        stackSize={5}
        animateCardOpacity={true}
      ></Swiper>
      <View style={{ position: "absolute", left: 120, top: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("SetPreferences")}>
          <Text style={{ textAlign: "center", fontSize: 20, color: "#0066FF" }}>
            Reset Preferences
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default stackScreen;
