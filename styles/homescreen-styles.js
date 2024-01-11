import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  perfumeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  perfumeItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 16,
  },
  perfumeImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  perfumeName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  perfumePrice: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
  sliderBox: {
    alignContent: "center",
    marginBottom: 15,
  },
});
export default styles;
