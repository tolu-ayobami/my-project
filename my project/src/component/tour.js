
import Bed from "./toures";


const Tolu = ({tours, onDelete}) =>{

return(
<div>
<h1 style={{color: "blue", backgroundColor:"powderblue"}}>Our Tours</h1>
<div>

    <Bed  name={tours} onde={onDelete}/>
</div>


</div>



);
}

export default Tolu;