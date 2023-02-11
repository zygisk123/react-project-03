import UserForm from "../NewUserForm/NewUserForm";
import style from "./NewUser.module.css";
import Card from "../../UI/Card/Card";
const NewUser = (props) => 
{
    const userFormData = (enteredData) =>
    {
        const newUser = {
            ...enteredData,
            id: Math.random().toString()
        };
        
        props.onFormSubmit(newUser);
    }

    return(
        <div className={style['new-user']}>
            <UserForm onFormSubmitHandler={userFormData}/>
        </div>
    );
}

export default NewUser;