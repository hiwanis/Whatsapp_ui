import React from "react";
import { Text, View, ScrollView } from "react-native";
import chatMessage from "../data/chat";
import styles from "./ChatStyle";

const Chat = () => {
  return (
    <ScrollView style={styles.scrollView} scrollEnabled={true}>
      <View>
        {chatMessage.map((chat, i) => (
          <View
            key={i}
            style={[
              styles.chatContainer,
              chat.owner ? styles.ownerView : styles.nonOwnerView,
            ]}
          >
            <Text style={styles.messageText}>{chat.text}</Text>
            <Text style={styles.timeText}>{chat.time}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Chat;
