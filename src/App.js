import './App.css';
import NewUser from "./components/AddUserForm/NewUserForm/NewUserForm";
import Users from "./components/UsersList/Users/Users";
import React, {useState} from 'react';

function App() {

  const [users, setUsers] = useState([]);

  const getUserData = (enteredData) =>
  {
    setUsers((prevUser) =>
    {
      return [...prevUser, enteredData];
    })
    console.log(enteredData);
  }

  return (
    <div>
      <NewUser onFormSubmit={getUserData}/>
      <Users users={users}/>
    </div>
  );
}

export default App;
