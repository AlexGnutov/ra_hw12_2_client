import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {fetchServicesRequest} from "../../actions/action-creators";

function ErrorMessage() {
    const dispatch = useDispatch();

    const repeatHandler = () => {
        dispatch(fetchServicesRequest());
    }

    return (
        <Alert className={'services-alert'} variant={'danger'}>
            Произошла ошибка!{' '}
            <Button variant={'dark'} onClick={repeatHandler}>Повторить запрос</Button>
        </Alert>
    )
}

export default ErrorMessage;
