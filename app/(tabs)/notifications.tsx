import React from "react";
import { View, Button, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";
import { colors } from "@/constants/const";
import { showNotification } from "@/lib/utils";
import LinearGradientCmp from "@/components/ui/LinearGradientCmp";

export default function NotificationsPAge() {
  return (
     <View style={{ display: "flex",backgroundColor: "transparent" ,flex:1 }}>
      <Button
        title="Show Notification"
        onPress={() =>
          showNotification({
            title: "New NOtification ",
            body: "thi is a new notification test !",
            data: { info: "info" },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});
