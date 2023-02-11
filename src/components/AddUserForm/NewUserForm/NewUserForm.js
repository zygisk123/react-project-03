import style from "./NewUserForm.module.css";
import Button from "../../UI/Button/Button";
import React, { useState } from 'react';
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
const NewUserForm = (props) =>
{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [usernameIsValid, setUsernameIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);

    const titleChangeHandler = (event) =>
    {
        setEnteredUsername(event.target.value);
        if (event.target.value.trim().length > 0)
        {
            setUsernameIsValid(true);
        }
    }

    const ageChangeHandler = (event) =>
    {
        setEnteredAge(event.target.value);
        if (event.target.value.trim().length > 0)
        {
            setAgeIsValid(true);
        }
    }

    const userFormSubmitHandler = (event) =>
    {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0)
        {
            return;
            setUsernameIsValid(false);
        }

        if (+enteredAge < 1)
        {
            return
            setAgeIsValid(false);
        }

        const userData = 
        {
            username: enteredUsername,
            age: enteredAge,
            //id: Math.random().toString()
        }
        setEnteredUsername('');
        setEnteredAge('');
        props.onFormSubmitHandler(userData);
    }

    return(
        <div>
            <ErrorModal title="Error" message="Something went wrong"/>
            <Card className={style.input}>
                <form onSubmit={userFormSubmitHandler}>
                    <div className={style['new-user__controls']}>
                        <div className={`${style['new-user__control']} ${!usernameIsValid && style.invalid}`}>
                            <label htmlfor='username'>Username</label>
                            <input id='username' type = "text" value={enteredUsername} onChange={titleChangeHandler}/>
                        </div>
                        <div className={`${style['new-user__control']} ${!ageIsValid && style.invalid}`} >
                            <label htmlFor="age">Age</label>
                            <input id='age' type = "number"  step="1" value={enteredAge} onChange={ageChangeHandler}/>
                        </div>
                        <div className={style['new-user_actions']}>
                            <Button type="submit">
                                Add User
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default NewUserForm;