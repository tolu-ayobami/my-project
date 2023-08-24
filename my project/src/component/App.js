import React, { useState } from "react";
import "./App.css";
import Header  from "./header";
import Addcontact  from "./addcontact";
import contactlist from "./contactlist";

import Fat from "./tours";

import Tolu from "./tour";





function App() {
  
const [tour, setTour] = useState(Fat);

const joko = (id) =>{
  setTour(tour.filter((tour) => 
    tour.id !== id
)
)

}

  const [person, setPerson]= useState(contactlist);

  const clear = () => {
    setPerson([]);
  }

return(
  <div className="section">  
<h2>{person.length} birthdays today</h2>

<Header people={person} />


    <button type="button" onClick={clear} className="but">clear all</button>


    <Addcontact /> 
  

    <Tolu tours={tour} onDelete={joko} />
  </div>
);

}
export default App; 