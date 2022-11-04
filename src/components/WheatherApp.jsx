import Jubmotron from "../common/Jumbotron";
const WheatherApp = (props) => {
  return(<>
    <div>
      <Jubmotron config={props.config}/>
    </div>
  </>);
}
export default WheatherApp;