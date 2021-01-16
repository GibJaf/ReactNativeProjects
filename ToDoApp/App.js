import React , { Component }from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';


class App extends Component {

  constructor(props) {
    super(props);
    //this.state = { count: 0 };
    this.state = {
      tasks: [{
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        }]
    }
  }

  onPress = () => {
    console.log(this.state.tasks);
    this.setState({
      //count: this.state.count + 1
    });
  };

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>

      <Text>
        Some random text
      </Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 100
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default App;
