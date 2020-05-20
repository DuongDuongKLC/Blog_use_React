export default class Product extends React.Component {
    onAddToCart(text){
        alert(text);
        console.log(text);
    }
    render(){
        return(
            <div>
                <h5 class="card-title" onClick={()=> this.onAddToCart("Dai Duong")}> {this.props.name} </h5>
            </div>
        )
    } 
}
