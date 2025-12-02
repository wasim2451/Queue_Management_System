import{useState} from 'react';
import {FaUser} from 'react-icons/fa'
export default function QueueForm({onAdd}){
    const[name,setName]=useState("");
    const[services,setServices]=useState("");
    // Form function handler
    const handleSubmit=(e)=>{
        e.preventDefault();
        // Form Validation 
        if(!name.trim()||!services.trim()){
            return ;
        }

        onAdd({name,services});
        setName("");
        setServices("");
        console.log("Added");
    }
    return (
        <div>
            <h2 className="header queue-title">Add to Queue</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input type="text"
                placeholder="Customer Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className='input-field'
                />
                <select name="services" 
                className='service-options'
                value={services}
                onChange={(e)=>setServices(e.target.value)}
                >
                    <option value="Select Service">Select Service</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Support">Support</option>
                    <option value="Payment">Payment</option>

                </select>
                <button type='submit'> 
                    Add customer &nbsp; <FaUser/>
                </button>
            </form>
        </div>
    )
}