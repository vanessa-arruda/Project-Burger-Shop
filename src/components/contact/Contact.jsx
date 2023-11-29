// Write all the code here
import burger from "../../assets/burger2.png";
import { toast, Toaster } from "react-hot-toast";
import Popup from "reactjs-popup";

const Contact = () => {

   const handleSubmit = () => {
   }

  return (
    <div className="contact">
        <form className="form">
            <h2>Contact us</h2>
            <label htmlFor="name"></label>
                <input 
                id="name" 
                type="text" 
                placeholder="Your name..."
                />
            <label htmlFor="email"></label>
                <input 
                id="email" 
                type="email" 
                placeholder="Your email..."
                />
            <label htmlFor="feedback"></label>
                <textarea 
                id="feedback"
                placeholder="Type your feedback...">
                </textarea>
            <Popup trigger=
            {<button onClick={() => handleSubmit}>Send</button>}
            >
            <div
            style={{color:"red", transform: 'translate(0%,-500%)', backgroundColor: '#fff', 
            padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}
            >Thank you for contacting us. We will get back to you shortly.
            </div>   
            </Popup>
        </form>
        <div className="formBorder">
            <div>
                <img src={burger}/>
            </div>
        </div>
    </div>
  )
}


export default Contact;