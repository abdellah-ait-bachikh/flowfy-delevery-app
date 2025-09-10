import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/const";
import { useTranslation } from "react-i18next";
import LinearGradientCmp from "@/components/ui/LinearGradientCmp";

const Bag = () => {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === "ar";
  return (
    <View style={{ display: "flex",backgroundColor: "transparent" ,flex:1 }}>

      <Text> {t("screens.(tabs).bag.title")} </Text>
    </View>
   
  );
};

export default Bag;
