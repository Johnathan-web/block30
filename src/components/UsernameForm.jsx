import { useState } from "react";
import { useAddUsernameMutation } from './userSlice';

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const [addUsername, { isLoading, error }] = useAddUsernameMutation({ email: username, password });

const postUsername = async() => {
    const login = await addUsername();
    console.log(login);

    setUsername('');
    setPassword('');

}
return(
<>
      <h2>Create a Username</h2>
      <form onSubmit={postUsername}>
        <label>
          Username
          <input
            type="text"
            value={username}                
            onChange={(e) => setUsername(e.target.value)}
          />
         </label>
          <label>
          Password
          <input
            type="password"
            value={password}               
            onChange={(e) => setPassword(e.target.value)}
          />
         </label>
        <button>Create Profile</button>
        {isLoading && <output>Uploading username information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </>
  );
}