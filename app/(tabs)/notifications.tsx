import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import { colors } from '@/constants/const';

export default function NotificationsPAge() {
  const showNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hello 👋',
        body: 'This is a local notification',
        data: { info: 'Test data' ,}
      },
      trigger: null // Show immediately
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Show Notification" onPress={showNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:colors.white }
}); 