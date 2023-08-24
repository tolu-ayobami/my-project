import { useState } from "react/cjs/react.development";

const Bed = ({name, onde}) =>{

    const[load, setLoad] = useState(true);

    const Fata = () => {
        setLoad(!load);
    }

    return(

        <div>
            {name.map((tour) => {

                return(

                    <div className="all">
                    <img src={tour.image} alt={tour.name} />

                    <div className="ger">

                    <h1>{tour.name}</h1>

                    <h1>{tour.email}</h1>

                    </div>

                    <p>{load? tour.Text : `${tour.Text.substring(0, 200)}...`}
                     <button type="button" className="clear" onClick={Fata}>clear</button></p>

                    <button type="button"  onClick={()=> onde(tour.id)}>clear</button>
                    
                    </div>
                );
            })}
        </div>
    );
}

export default Bed;