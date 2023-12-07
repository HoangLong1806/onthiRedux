import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store';
import { Provider } from 'react-redux';
import Counter from './Counter';

// console.log(store);
// store.dispatch({
//   type: 'plus',
//   todo: ''
// })
// console.log(store.getState())





export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
