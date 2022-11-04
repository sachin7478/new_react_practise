import NoteApp from "../components/NoteApp";
import WheatherApp from "../components/WheatherApp";
const config = {
  header:{},
  sidebar:{
    tabs:[
      {
        component: NoteApp,
        view_name: 'Note App',
        name: 'note_app',
        desc: 'To Store Notes using redux',
        title: 'Notes App'
      },
      {
        component: WheatherApp,
        view_name: 'Wheather App',
        name: 'wheather_app',
        desc: 'to Show wheather of cities',
        title: 'Wheather App'
      }
    ]
  }
}

export default config