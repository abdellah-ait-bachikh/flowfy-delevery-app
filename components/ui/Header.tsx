import { Pressable, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "@/constants/const";
import { usePathname, useRouter, useSegments } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const handleBack = () => {
    if (pathname === "/") {
      if (router.canGoBack()) {
        router.back();
      } else {
        return;
      }
      router.replace("/");
    } else {
      router.push("/(tabs)");
    }
  };
  return (
    <>
      <StatusBar  style="light" translucent />
      <View style={{ paddingTop: insets.top, backgroundColor: "transparent" }}>
        <View
          style={{
            flexDirection: isRTL ? "row-reverse" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Pressable
              onPress={handleBack}
              style={{
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                transform: [{ scaleX: isRTL ? -1 : 1 }],
              }}
            >
              <MaterialIcons name="arrow-back-ios" size={25} />
            </Pressable>
          </View>
          <View>
            <Text>test</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
