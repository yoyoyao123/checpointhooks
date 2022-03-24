import React from 'react'
import User from './User';

function UserListe(props) {
  return (
    <div className="user-list">   
        {props.users.map(user => <User key={user.id} user={user} 
         deleteUser={props.deleteUser}/>)}  
    </div>
  )
}

export default UserListe
