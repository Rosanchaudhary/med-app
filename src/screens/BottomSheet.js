import React from "react";
import { Text, View, Dimensions } from "react-native";

import SlidingUpPanel from "rn-sliding-up-panel";
import AppBar from "../widgets/AppBar";
import TextInputWithPrefix from "../widgets/TextInputWithPerfix";
import MapWidget from "../widgets/MapWidget";
import Icon from "react-native-vector-icons/FontAwesome";

const { height } = Dimensions.get("window");



class BottomSheet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <View style={styles.textInputWithIcon}>
          <TextInputWithPrefix />
          <View style={{ width: 6 }}></View>
          <View style={styles.filterIcon}>
            <Text>
              <Icon name="angle-down" size={14} color="#fff" />
            </Text>
          </View>
        </View>
        <MapWidget />
        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={{ top: height - 100, bottom: 60 }}
          animatedValue={this._draggedValue}
          showBackdrop={false}
        >
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <View style={{height:4,width:100,backgroundColor:"#878CA9"}}></View>
              <Text style={{alignSelf:"flex-start"}}>See Results</Text>
            </View>
            <View style={styles.container}>
              <Text>Bottom Sheet Content</Text>
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
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  panelHeader: {
    height: 60,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius:30,
    borderTopRightRadius:30
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
};

export default BottomSheet;
