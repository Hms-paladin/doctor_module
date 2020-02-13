import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import avatar from '../../images/avatar.jpg'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
export default class ProfileLogout extends React.Component{
 constructor(props)
 {
     super(props)
     this.state={name:""}
 }
 render()
 {
     return(
         <div>
             <div className="avatar_div"><Paper className="avatar_container">
             <div><Avatar className="Avatar-image" alt="avatar-missing" src={avatar}/>
             <h6>Abdul Rahman</h6>
             <p>Abdul@gmail.com</p>
             <Divider></Divider>
             </div>
           </Paper>
           </div>
         </div>
     )
 }
}