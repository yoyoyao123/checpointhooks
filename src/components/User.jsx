import React from 'react'

function User(props) {

    const deletUser = (id) => {
        props.deleteUser(id);
    }

  return (
    <div className="user">
    <div className="photo-card">
        <div className="photo-container">
            <img src="OIF.jpg" alt="" />
        </div>
    </div>

    <div className="description-card">
        <h3 className="name">{props.user.name}</h3>

        <button onClick={()=> deletUser(props.user.id)}>Supprimer</button>
    </div>
    </div>
  )
}

export default User
