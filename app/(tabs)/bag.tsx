import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/const";
import { useTranslation } from "react-i18next";

const Bag = () => {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === "ar";
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      <Text> {t("screens.(tabs).bag.title")} </Text>
    </View>
  );
};

export default Bag;
