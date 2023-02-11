import Card from "../Card/Card";
import Button from "../Button/Button";
import style from "./Error.module.css";

const ErrorModal = (props) =>
{
    return(
        <div>
            <div className={style.backdrop}/>
            <Card className={style.modal}>
                <header className={style.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={style.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className={style.actions}>
                    <Button>Delete</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;