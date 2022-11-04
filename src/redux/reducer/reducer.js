const initialState = {selectedTab: 'address'}
const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tabSelection':
      return {
        selectedTab: action.payload
      }
    default:
      return {
        selectedTab: 'note_app'
      }
  }
};
export default tabReducer;