import './App.css';
import NewUser from "./components/AddUserForm/NewUserForm/NewUserForm";
import Users from "./components/UsersList/Users/Users";
import React, {useState, Fragment} from 'react';

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
    <Fragment>
      <NewUser onFormSubmit={getUserData}/>
      <Users users={users}/>
    </Fragment>
  );
}

export default App;
