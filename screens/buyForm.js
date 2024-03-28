import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  menFragrancesLightStrength,
  menFragrancesMediumStrength,
  menFragrancesStrongStrength,
  womenFragrancesLightStrength,
  womenFragrancesMediumStrength,
  womenFragrancesStrongStrength,
} from "../backend/DataBase";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";

const buyForm = () => {
  const navigation = useNavigation();
  const [fragrance, setFragrance] = useState(null);
  const [fragranceList, setFragranceList] = useState([]);
  const [quantity, setQuantity] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const fragranceOptions = menFragrancesLightStrength
    .concat(menFragrancesMediumStrength)
    .concat(menFragrancesStrongStrength)
    .concat(womenFragrancesLightStrength)
    .concat(womenFragrancesMediumStrength)
    .concat(womenFragrancesStrongStrength)
    .map((obj) => ({
      label: obj.name,
      value: obj.name,
    }));

  const quantityOptions = [
    { label: "50ml", value: "50ml" },
    { label: "100ml", value: "100ml" },
  ];

  const handleBuyRequest = () => {
    if (fragrance && quantity && customerName && address && email) {
      navigation.navigate("ConfirmationScreen");
    } else {
      alert("Please enter all fields");
    }
  };
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "400",
          color: "#0066FF",
        }}
      >
        Choose Fragrance
      </Text>
      <View style={{ paddingHorizontal: 10 }}>
        <SelectList
          setSelected={(value) => setFragrance(value)}
          data={fragranceOptions}
          save="value"
        />
      </View>

      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "400",
          color: "#0066FF",
        }}
      >
        Quantity
      </Text>
      <View style={{ paddingHorizontal: 10 }}>
        <SelectList
          setSelected={(value) => setQuantity(value)}
          data={quantityOptions}
          save="value"
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "400",
          color: "#0066FF",
        }}
      >
        Customer Name
      </Text>
      <View>
        <TextInput
          style={{ alignSelf: "center", fontSize: 20, textAlign: "center" }}
          placeholder="Enter customer name"
          value={customerName}
          onChangeText={(text) => setCustomerName(text)}
        />
      </View>

      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "400",
          color: "#0066FF",
        }}
      >
        Email
      </Text>
      <View>
        <TextInput
          style={{ alignSelf: "center", fontSize: 20, textAlign: "center" }}
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "400",
          color: "#0066FF",
        }}
      >
        Address
      </Text>
      <View>
        <TextInput
          style={{ alignSelf: "center", fontSize: 20, textAlign: "center" }}
          placeholder="Enter address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          width: 130,
          height: 40,
          backgroundColor: "#f27575",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
        }}
        onPress={handleBuyRequest}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          Request Order
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default buyForm;
