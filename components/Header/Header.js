import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./HeaderStyles";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Icon
          style={styles.backIcon}
          name="chevron-back-outline"
          color="black"
          type="ionicon"
        />
        <Image
          source={require("../../assets/profile.jpg")}
          style={styles.profile}
        />
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.text}>
            Anna
          </Text>
          <Text numberOfLines={1} style={styles.subText}>
            Last seen 12:40 AM
          </Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Icon
          style={styles.icon}
          name="videocam"
          color="black"
          solid={true}
          type="ionicon"
        />
        <Icon
          style={styles.icon}
          name="phone"
          color="black"
          type="FontAwesome5"
        />
        <Icon
          style={styles.icon}
          name="more-vertical"
          color="black"
          type="feather"
        />
      </View>
    </View>
  );
};

export default Header;
