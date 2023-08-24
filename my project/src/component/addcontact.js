import React, {useState} from "react";



function Addcontact(){

    const [title, setTitle] = useState("");

    const feg =(event)=>{
        setTitle(event.target.value);
        console.log(event.target.value);


    }

    const [Email, setEmail] = useState("");

    const fet =(event)=>{
        setEmail(event.target.value);
        console.log(event.target.value);


    }


const sub = (event)=>{
    event.preventDefault();

    const reg = {
        tit: title,
        ema:Email
    };
    
    console.log(reg);


    setTitle("");
    setEmail("");


}


const [count, setCount] = useState(0);



const get =()=>{
    setCount(count + 1);

}

    return(
        <div className="ui name">
            <h1>add contact</h1>

            <form className="form" onSubmit={sub}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="Name" placeholder="Name" value={title} onChange={feg} />  
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Email" value={Email}  onChange={fet}/>  
                </div>
                <button type="submit" className="btn">Add</button>
            </form>

            <button type="button"  onClick={get}>press</button>

            

            <h1>{count}</h1>


            

        </div>

    );
}
export default Addcontact;