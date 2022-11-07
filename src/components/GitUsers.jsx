import Jubmotron from "../common/Jumbotron";
import {useEffect, useMemo, useState} from 'react';
const GitUsers = (props) => {
  let [userState, setState] = useState({user:'sachin7478', changeUser:false});
  useMemo(
    () => {
      fetch(`https://api.github.com/users/${userState.user}`)
      .then((res) => res.json())
      .then((data)=>{
        console.log(data)
        // setState((prev)=>{
        //     return {...prev,res:data}
        //   })
      })
    },
    [userState]
  )



  return(<>
      <Jubmotron config={props.config}/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>
              <button className="btn btn-warning text-black" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Change user
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <input type="text" className="form-control" onChange={(e) => { setState((prev) => { return {...prev, user:e.target.value}}) }} value={userState.user} />
              </div>
            </div>
          </div>
        </div>
      </div>
  </>);
}
export default GitUsers;