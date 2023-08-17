import React, { useEffect, useState } from "react";
import { TextInput, View, Keyboard } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./ActionStyles";

const Actions = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardShown(true);
    });
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardShown(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.rightIcon}>
          <Icon
            style={styles.icon}
            name="happy-outline"
            color="gray"
            type="ionicon"
          />
          <TextInput style={styles.textBox} placeholder="Message..." />
        </View>
        <View style={styles.rightIcon}>
          <Icon
            style={
              isKeyboardShown
                ? [styles.rotatedIcon, styles.icon]
                : styles.rotatedIcon
            }
            color="gray"
            name="attach"
            type="ionicon"
          />

          {!isKeyboardShown && (
            <Icon
              style={styles.icon}
              name="camera-outline"
              color="gray"
              type="ionicon"
            />
          )}
        </View>
      </View>

      <Icon
        style={styles.greenIcon}
        name={isKeyboardShown ? "send" : "mic"}
        color="black"
        type={isKeyboardShown ? "ionicon" : "FontAwesome5"}
      />
    </View>
  );
};

export default Actions;
