import './App.css';
import UserListe from './components/UserListe';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {

  const initialState = [{id: 1, name : "Kouyate Karim"}, {id : 2, name : "Ngatia Eric"}, {id: 3, name : "Yoyo 225"}];
  const [users, setUsers] = useState(initialState);


  const addUser = (user) => {
    let newUsers = [...users];

    newUsers.push(user);

    setUsers(newUsers);
  }

  const deleteUser = (id) => {
    let newUsers = [...users];

    let index = newUsers.findIndex((user) => user.id === id);

    newUsers.splice(index, 1);

    setUsers(newUsers);

  }


  return (
    <div className="body">
    <div className="App container">
        <SearchBar addUser={addUser}/>
        <UserListe users={users} deleteUser={deleteUser}/>
    </div>
</div>
  );
}

export default App;
