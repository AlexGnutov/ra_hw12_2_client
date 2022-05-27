import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import {useDispatch, useSelector} from "react-redux";
import ServiceItem from "./service-item";
import {useEffect} from "react";
import LoadingSpinner from "./messages/loading-spinner";
import ErrorMessage from "./messages/error-message";
import {fetchServicesRequest} from "../actions/action-creators";

function ServiceList() {
    const {items, loading, error} = useSelector(state => state.servicesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServicesRequest());
    }, [dispatch]);

    if (loading) {
        return <LoadingSpinner/>
    }

    if (error) {
        return <ErrorMessage/>
    }

    return (
        <ListGroup className={'services-list'} as={'ul'}>
            {items.map(item =>
                <ListGroupItem className={'services-list-item'} as={'li'} key={item.id}>
                    <ServiceItem item={item}/>
                </ListGroupItem>
            )}
        </ListGroup>
    )
}

export default ServiceList;
