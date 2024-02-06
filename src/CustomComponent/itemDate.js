import './itemDate.css'
function ItemDate(props) {
    const date = props.date;
    const month = props.month
    const year = props.year
    return (
        <div className="mfg-date">
            <div>{date}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}
export default ItemDate;