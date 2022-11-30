const initialTabState = {selectedTab: ''}
const tabReducer = (state = initialTabState, action) => {
  switch (action.type) {
    case 'tabSelection':
      return {
        selectedTab: action.payload
      }
    default:
      return {
        selectedTab: 'alpine_js_demo'
      }
  }
};

const initialNotesState = [];
const notesReducer = (state = initialNotesState, action) => {
  switch(action.type) {
    case 'INSERT_NOTE':
      // state.push(action.payload);
      return [...state, action.payload];
    case 'REMOVE_NOTE':
      let noteArray = state;
      return noteArray.filter((item) => {
        return item.note !== action.payload.note
      });
    default:
      return state
  }
}
export default tabReducer;
export {notesReducer}