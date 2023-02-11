import style from "./NewUserForm.module.css";
import Button from "../../UI/Button/Button";
import React, { useState } from 'react';
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
const NewUserForm = (props) =>
{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const titleChangeHandler = (event) =>
    {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) =>
    {
        setEnteredAge(event.target.value);
    }

    const userFormSubmitHandler = (event) =>
    {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0)
        {
            setError({
                title: "Invalid input",
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }

        if (+enteredAge < 1)
        {
            setError({
                title: "Invalid input",
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }

        const userData = 
        {
            username: enteredUsername,
            age: enteredAge,
            //id: Math.random().toString()
        }
        setEnteredUsername('');
        setEnteredAge('');
        props.onFormSubmit(userData);
    }

    const errorHandler = () =>
    {
        setError(null);
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={style.input}>
                <form onSubmit={userFormSubmitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type = "text" value={enteredUsername} onChange={titleChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id='age' type = "number"  step="1" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default NewUserForm;