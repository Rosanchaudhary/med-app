import React from "react";
import { Text, View ,StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchList = () => {
  return (
    <View
      style={styles.container}
    >
      <View
        style={{
          height: 8,
          width: "100%",
          backgroundColor: "#131D55",
          borderTopLeftRadius: 8,
          borderTopEndRadius: 8,
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 8,
          }}
        >
          <Text
            style={{
              color: "#1C59BA",
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            Available in 7 hour
          </Text>
          <Text
            style={{
              color: "#131D55",
              fontWeight: "400",
              fontSize: 14,
            }}
          >
            Kensington Medical Clinic
          </Text>
          <Text
            style={{
              color: "#585F87",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            1.2 km away
          </Text>
        </View>
        <View style={{ padding: 10, justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: "#5C70FF",
              height: 41,
              width: 90,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              Book Now
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "500",
          color: "#5C70FF",
        }}
      >
        See All Services
      </Text>
      <Text>
        <Icon name="angle-down" size={14} color="#5C70FF" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom:10,
        marginLeft:8,
        height: 124,
        width: "95%",
        borderWidth: 1,
        borderColor: "#585f87",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderTopLeftRadius: 8,
        borderTopEndRadius: 8,
      },
  });

export default SearchList;
