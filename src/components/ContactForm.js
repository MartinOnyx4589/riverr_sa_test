import React,{useState} from 'react'

export default function ContactForm({refreshContact}) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const resetForm =() =>{
        setName('');
        setMessage('');
        setEmail('');
    }

    const handleSubmit = async (e) =>{
    e.preventDefault();
    const body = {name, message, email};

    try {
        const res = await fetch("./api/createContact", {
            method: 'POST',
            body: JSON.stringify(body)
        })
        resetForm();
        refreshContact();
    } catch (error) {
        console.error(error)
    }
    }

    return (
        <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Name..."
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}                     
                    />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Message..."
                        name="message"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}                     
                    />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Email..."
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}                     
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        submit
                    </button>


                    
                </form>
            </div>
  
                
 


        
    )
}
