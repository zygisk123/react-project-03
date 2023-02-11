import Card from "../../UI/Card/Card"
import User from "../User/User";
import style from "./Users.module.css";

const Users = (props) =>
{
    return(
        <Card className={style.users}>
            <ul>
                {props.users.map(user => 
                    <User key={user.id} userName={user.username} userAge={user.age}/>)
                }
            </ul>
        </Card>
    );
}

export default Users;