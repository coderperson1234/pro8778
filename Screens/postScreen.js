import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { createDrawerNavigator } from '@react-navigation/drawer';
export default function App() {
    
  renderItem = ({ item: post }) => {
      return <PostCard post={post} navigation={this.props.navigation} />;
    };
  
}
fetchUser = () => {
  let theme; firebase
  .database
  ref("/users/" + firebase. auth().currentUser.uid), .on("value", (snapshot) => {
  theme = snapshot.val().current_theme this.setState({ light_theme: theme === "light" });
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postcardLight: {
    margin: RFValue (20), 
    backgroundColor: "#eaeaea",
     borderRadius: RFValue (20)
    },

    authorNameText: {
      color: "white", 
      fontSize: RFValue (20)
    },
      
       authorNameTextLight: {
      color: "black", 
      fontSize: RFValue (20)
    }
      
      
    
    
})
