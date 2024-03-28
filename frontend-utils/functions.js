import {
  menFragrancesLightStrength,
  menFragrancesMediumStrength,
  menFragrancesStrongStrength,
  womenFragrancesLightStrength,
  womenFragrancesMediumStrength,
  womenFragrancesStrongStrength,
} from "../backend/DataBase";

export function filterFragrances(gender, budget, perfumeStrength) {
  let fragranceList = [];
  if (gender == "male") {
    if (perfumeStrength == "low") {
      fragranceList = menFragrancesLightStrength;
    }
    if (perfumeStrength == "medium") {
      fragranceList = menFragrancesMediumStrength;
    }
    if (perfumeStrength == "high") {
      fragranceList = menFragrancesStrongStrength;
    }
  } else if (gender == "female") {
    if (perfumeStrength == "low") {
      fragranceList = womenFragrancesLightStrength;
    }
    if (perfumeStrength == "medium") {
      fragranceList = womenFragrancesMediumStrength;
    }
    if (perfumeStrength == "high") {
      fragranceList = womenFragrancesStrongStrength;
    }
  } else if (gender == "unisex") {
    if (perfumeStrength == "low") {
      fragranceList = menFragrancesLightStrength.concat(
        womenFragrancesLightStrength
      );
    }
    if (perfumeStrength == "medium") {
      fragranceList = menFragrancesMediumStrength.concat(
        womenFragrancesMediumStrength
      );
    }
    if (perfumeStrength == "high") {
      fragranceList = menFragrancesStrongStrength.concat(
        womenFragrancesStrongStrength
      );
    }
  }
  let ret = fragranceList.filter((e) => e.price <= budget);
  return ret;
}
