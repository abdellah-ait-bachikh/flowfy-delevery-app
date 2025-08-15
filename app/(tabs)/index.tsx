import { View, Text, Pressable } from "react-native";
import React from "react";
import { colors } from "@/constants/const";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const Index = () => {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === "ar";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: rtl ? "flex-end" : "flex-start",
      }}
    >
      <View style={{ display: "flex" }}>
        <Text> {t("screens.(tabs).index.title")} </Text>
      </View>

      <LanguageSwitcher />
    </View>
  );
};

export default Index;
