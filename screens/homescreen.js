import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
import styles from "../styles/homescreen-styles";
import { returnFeaturedItems, returnNewsFeedItems } from "../backend/API";
const Homescreen = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [newsFeedItems, setNewsFeedItems] = useState([]);

  useEffect(() => {
    let tempFeaturedItems = returnFeaturedItems();
    setFeaturedItems(tempFeaturedItems);
    let tempNewsFeedItems = returnNewsFeedItems();
    setNewsFeedItems(tempNewsFeedItems);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Your Fragrance Feed</Text>
      </View>
      <View style={styles.sliderBox}>
        <SliderBox images={newsFeedItems} autoplay={true} circleLoop={true} />
      </View>
      <Text style={styles.heading}>Featured Collection</Text>
      <View style={styles.perfumeContainer}>
        {featuredItems.slice(0, 3).map((perfume) => (
          <View key={perfume.id} style={styles.perfumeItem}>
            <Image source={perfume.image} style={styles.perfumeImage} />
            <Text numberOfLines={1} style={styles.perfumeName}>
              {perfume.name}
            </Text>
            <Text style={styles.perfumePrice}>{perfume.price}</Text>
          </View>
        ))}
      </View>
      <View style={styles.perfumeContainer}>
        {featuredItems.slice(3, 6).map((perfume) => (
          <View key={perfume.id} style={styles.perfumeItem}>
            <Image source={perfume.image} style={styles.perfumeImage} />
            <Text numberOfLines={1} style={styles.perfumeName}>
              {perfume.name}
            </Text>
            <Text style={styles.perfumePrice}>{perfume.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Homescreen;
