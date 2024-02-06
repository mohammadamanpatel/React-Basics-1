import './item.css'

function Item (props){
    const item = props.name;
    return (
        <p className="item">{item}</p>
    )
}
export default Item