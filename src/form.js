export default function Form(){
  return (
    <>
      <form>
        <div>
          <label for="firstname">Firstname:</label>
          <input type="text" id="firstname" placeholder="Enter your first firstname" required/>
        </div>
        <div>
          <label for="lastname">lastname:</label>
          <input type="text" id="lastname" placeholder="Enter your first lastname" required/>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required/>
        </div>
          <div>
          <label for="phoneNumber">PhoneNumber:</label>
          <input type="number" id="phoneNumber" placeholder="Enter your Phonenumber" required/>
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" id="address" placeholder="Enter your residence" required/>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required/>
        </div>
        <p>By continuing, you agree to our 
          <a href="#"> terms of service.</a></p>
        <button>Sign up</button>

      </form>
    </>
  )
}