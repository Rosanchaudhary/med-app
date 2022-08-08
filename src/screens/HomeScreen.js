import React from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";

import SlidingUpPanel from "rn-sliding-up-panel";
import AppBar from "../widgets/AppBar";
import TextInputWithPrefix from "../widgets/TextInputWithPerfix";
import MapWidget from "../widgets/MapWidget";
import SearchList from "../widgets/SearchList";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import TestScreen from "./TestScreen";

const { height } = Dimensions.get("window");

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      isChecked: false,
    };
  }
  setVisible() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  setChecked() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    const renderDropdown = () => {
      if (this.state.visible) {
        return (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              backgroundColor: "#fff",
              width: "100%",
              height: 200,
              top: 150,
              zIndex: 1,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#131D55",
                    fontSize: 16,
                    fontWeight: "500",
                    padding: 10,
                  }}
                >
                  Type of service
                </Text>
                <TestScreen />
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#131D55",
                    fontSize: 16,
                    fontWeight: "500",
                    padding: 10,
                  }}
                >
                  Virtual/In Office
                </Text>
                <TestScreen />
              </View>
            </View>
            <Text
              style={{
                color: "#131D55",
                fontSize: 16,
                fontWeight: "500",
                padding: 10,
              }}
            >
              New Patients
            </Text>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={this.state.isChecked}
                onValueChange={this.setChecked.bind(this)}
                color={this.state.isChecked ? "#4630EB" : undefined}
              />
              <Text style={styles.paragraph}>Accepting New Patients</Text>
            </View>
            <View
            style={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between"
            }}>
              <View
                style={{
                  backgroundColor: "#5C70FF",
                  height: 45,
                  width: 200,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                  margin: 10,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 16,
                  }}
                >
                  Search
                </Text>
              </View>
              <Text
                  style={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: 16,
                  }}
                >
                  Clear
                </Text>
            </View>
          </View>
        );
      }
    };
    return (
      <View style={styles.container}>
        <AppBar />
        <View style={styles.textInputWithIcon}>
          <TextInputWithPrefix />
          <View style={{ width: 6 }}></View>
          <TouchableOpacity onPress={this.setVisible.bind(this)}>
            <View style={styles.filterIcon}>
              <Text>
                <Icon name="angle-down" size={14} color="#fff" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {renderDropdown()}
        <MapWidget />
        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={{ top: height - 100, bottom: 60 }}
          animatedValue={this._draggedValue}
          showBackdrop={false}
        >
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <View
                style={{ height: 4, width: 100, backgroundColor: "#878CA9" }}
              ></View>
              <Text
                style={{
                  alignSelf: "flex-start",
                  paddingLeft: 10,
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#131D55",
                }}
              >
                See Results
              </Text>
            </View>
            <View style={styles.container}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    height: 49,
                    width: 150,
                    backgroundColor: "#585F87",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 12, fontWeight: "500", color: "white" }}
                  >
                    Near you,In person
                  </Text>
                </View>
                <View
                  style={{
                    height: 49,
                    width: 150,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#585F87",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                      color: "#585F87",
                    }}
                  >
                    Virtual Appointment
                  </Text>
                </View>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                <SearchList />
                <SearchList />
                <SearchList />
                <SearchList />
                <SearchList />
                <SearchList />
              </ScrollView>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  panelHeader: {
    height: 60,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textInputWithIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    paddingLeft: 20,
  },
  filterIcon: {
    backgroundColor: "#5C70FF",
    height: 40,
    width: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#AEB7FF",
  },
  section: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    border: 1,
    borderRadius: 4,
    borderColor: "black",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
};

export default HomeScreen;
