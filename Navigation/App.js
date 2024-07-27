import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Alert, Button, Platform, StyleSheet, View } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: true,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        Alert.alert("Permission required", "Push notifications need the appropriate permissions.");
        return;
      }

      // const pushTokenData = await Notifications.getExpoPushTokenAsync({
      //   projectId: "100% legit project ID",
      // });

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    })();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      const userName = notification.request.content.data.userName;
      console.log(userName);
    });

    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      const userName = response.notification.request.content.data.userName;
      console.log(userName);
    });

    return () => {
      subscription.remove();
      subscription2.remove();
    };
  });

  const scheduleNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification.",
        data: { userName: "Max" },
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  const sendPushNotificationHandler = () => {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[you wish 🫵]",
        title: "Test - sent from a device!",
        body: "This is a test",
        data: { userName: "Arnav" },
      }),
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title='Schedule Notification'
        onPress={scheduleNotificationHandler}
      />
      <Button
        title='Send Push Notification'
        onPress={sendPushNotificationHandler}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

