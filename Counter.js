import { Pressable, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

var increment = { type: 'increment' }

function Counter({ count, increment }) {
    return (
        <View style={{ flex: 1, }}>
            <Text>Counter is: {count}</Text>
            <Pressable style={{ width: 100, height: 100, backgroundColor: 'blue' }} onPress={increment}>
                <Text>C</Text>
            </Pressable>
        </View>

    )
}
const styles = StyleSheet.create({})
var mapStateToProps = (state) => ({
    count: state.count
})
var mapDispatchToProps = (dispatch) => ({
    increment: () => {
        dispatch(increment)
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

