import { useState } from "react";
import axios from "axios";
import './Signup.css';


const Signup = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState([]);

    const handleRoleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setRole([...role, value]);
        } else {
            setRole(role.filter(r => r !== value));
        }
    };

    async function addNewEmployee(e) {
        e.preventDefault();
        console.log(role);
        try {
            const req = await axios.post("http://localhost:3001/api/auth/signup", {
                name,
                username: userName,
                email,
                password,
                role
            });
            if (req.data) {
                alert(req.data);
            } else {
                alert("error during signup");
            }
        } catch (err) {
            console.log(err);
            alert("server error");
        }
    }

    return (
        <section>
            <h2>Signup</h2>
            <div>
                <form onSubmit={addNewEmployee}>
                    <label>Employee Name</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label>Employee Email</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label>Username</label>
                    <input 
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <br />
                    <label>Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <label>Roles:</label><br />
                    <label>
                        <input 
                            type="checkbox" 
                            value="admin" 
                            onChange={handleRoleChange} 
                        /> Admin
                    </label><br />
                    <label>
                        <input 
                            type="checkbox" 
                            value="developer" 
                            onChange={handleRoleChange} 
                        /> Developer
                    </label><br />
                    <label>
                        <input 
                            type="checkbox" 
                            value="user" 
                            onChange={handleRoleChange} 
                        /> User
                    </label><br />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </section>
    );
};

export default Signup;
