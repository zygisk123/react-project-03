import style from "./NewUserForm.module.css";
import Button from "../../UI/Button/Button";
import React, { useState, useRef } from 'react';
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
const NewUserForm = (props) =>
{
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const userFormSubmitHandler = (event) =>
    {
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
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

        props.onFormSubmit(userData);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
                    <input id='username' type = "text" ref={nameInputRef}/>
                    <label htmlFor="age">Age</label>
                    <input id='age' type = "number"  step="1" ref={ageInputRef}/>
                    <Button type="submit">
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default NewUserForm;