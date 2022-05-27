function ServiceItem(props) {
    const {item} = props;
    return (
        <>
            <div className={'services-list-item-text'}>
                {item.name}: {item.price} руб.
            </div>
        </>
    )
}

export default ServiceItem;
