import Card from "../../UI/Card/Card";
import style from "./User.module.css";

const User = (props) =>
{
    return (
        <li>
            <Card className={style['user-item']}>
                <div className ={style['user-item__description']}>
                    <h2>
                        {props.userName}
                    </h2>
                    <div className ={style['user-item__age']}>
                        {props.userAge}
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default User;