function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            }
        case 'minus':
            return {

            };
        default:
            return state;
    }
}
export default reducer;