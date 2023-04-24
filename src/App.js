import React from "react"
import './App.css';

function App() {

  const [data, setData] = React.useState({
                                      firstName: "",
                                      lastName: "",
                                      email: ""
                                    })

  const [submitted, setSubmitted] = React.useState(false)

  const [valid, setValid] = React.useState(false)

  function handleFirstName(event) {
      return setData({...data, firstName:event.target.value});
  }    
  
  function handleLastName(event) {
    return setData({...data, lastName:event.target.value});
  }  

  function handleEmail(event) {
    return setData({...data, email:event.target.value});
  }  

  function handleRegistration(event) {
    event.preventDefault();
    if(data.firstName && data.lastName && data.email) {
      setValid(true)
    }
    setSubmitted(true)
  }

  console.log(data);
  return (
    <div className="app-container">
     <form onSubmit = {handleRegistration}>
        {submitted &&  valid && <div className="success-msg">Success! Thank you for registering</div>}
        <input 
          type = "text"
          placeholder='First Name'
          id = "first_name"
          className = "form-field"
          name = "first-name"
          onChange={handleFirstName}
          value={data.firstName}
        />
        <br />
        {submitted && !data.firstName && <span class = "error">First name is required</span>}
        <br/>

        <input 
          type = "text"
          placeholder='Last Name'
          id = "last_name"
          className = "form-field"
          name = "last-name"
          onChange={handleLastName}
          value={data.lastName}
        />
        <br />
        {submitted && !data.lastName && <span class = "error">Last name is required</span>}
        <br/>
        <input 
          type = "text"
          placeholder='Email'
          id = "email"
          className = "form-field"
          name = "email"
          onChange={handleEmail}
          value={data.email}
        />
        <br />
        {submitted && !data.email && <span class = "error">Email address is required</span>}
        <br />
        <button className="register-button">
          Register
        </button>
     </form>
    </div>
  );
}

export default App;
