import React from "react";



function FormComponent() {

  

  
  return (
    <main>
      
      <form action="../../postForm" method="post"  className="inputForm">
      
        <div className="App">
        <h2>Daily Activity Form</h2> 
        <label>Full Name</label>
        <input
          className="text"
          type="text"
          name="username"
          placeholder="Enter your Full Name......"
          required
          autoComplete="off"
        />      
        <label>Sign-in</label>
        <input
          className="text"
          type="time"
          name="signin"
          placeholder="Sign-in"
          required
        />
        
        <label>Sign-Out</label>
        <input
          className="text"
          type="time"
          name="signout"
          placeholder="Sign-out"
          required
        />
          <label>Tool</label>
        <input
          className="text"
          type="text"
          name="tool"
          placeholder="Which tool you have used today......?"
          autoComplete="off"
          required
        />
        <label>Daily Task</label>
          <input
            className="txt"
            type="text"
            name="task"
            placeholder="Todays Task"
            autoComplete="off"
            required
          />
        
         
        <button type="submit" className="submit">Submit</button>
        </div>        
      </form>
      <hr />
    </main>
  );
}

export default FormComponent;