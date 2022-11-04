import Jubmotron from "../common/Jumbotron";
const NoteApp = (props) => {
  return(<>
    <div>
      <Jubmotron config={props.config}/>
    </div>
  </>);
}
export default NoteApp;