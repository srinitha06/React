import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    async function addNewEmployee(e){
        e.preventDefault();
        const roleArray=rolenames.split(",").map(role=>role.trim());
        console.log(roleArray);
        
            const req = await axios.post("http://localhost:3001/api/auth/signup",{
                name,
                username,
                email,
                password,
                role
            });
            if(req.data){
                alert(req.data);
            }
            else{
                alert("error during signup");
            }
      
    }
    
    return (
        <section>
            <h2>Signup</h2>
            <div>
                <form onSubmit={addNewEmployee}>
                    <label htmlFor="name">Employee Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br></br>

                    <label htmlFor="email">Employee Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br></br>

                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <br></br>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br></br>
                    <label htmlFor="role">Role</label>
                    <input 
                        type="text" 
                        id="role" 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <br></br>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </section>
    );
};

export default Signup;