
import React,{useState } from "react";
const Form_three =()=> {
	const [name, setName] = useState("");
	const handleSubmit = (event) => {
	event.preventdefault();
	
	console.log(name);
	//sole.log(pin);
	}
	return (
		<form onSubmit={handleSubmit}>
		<label>Enter Your name:    
		<input type="text" value= {name} onChange={(e) => setName(e.target.value)}/>

        </label>
        <input type= "submit" />
        </form>
    )
}	

export default Form_three;