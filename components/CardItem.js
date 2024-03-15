import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/cardItem";
import { Entypo } from "@expo/vector-icons";

const CardItem = ({ itemData }) => {
  const { name, price, image } = itemData;
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}> $ {price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
