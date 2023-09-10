import "./Card.css"
function Card(props){
    return(
        <div className="per-card" >
            {props.children}
        </div>
    );

}
export default Card;