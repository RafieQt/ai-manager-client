import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  
  GoogleAuthProvider,
  
  
} from "firebase/auth";

import AuthProvider from "../../context/AuthProvider";
import { AuthContext } from "../../context/AuthContext";


const Register = () => {
  const {createUser, updateUser, setUser} = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
 

  const handleRegister = async (e) => {
  e.preventDefault();
  setError("");

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const photo = form.photo.value;
  const password = form.password.value;

  try {
    const res = await createUser(email, password);
    await updateUser({ displayName: name, photoURL: photo });
    setUser({ ...res.user, displayName: name, photoURL: photo });
    navigate("/");
  } catch (err) {
    console.error(err);
    setError(err.message);
  }
};

  const handleGoogleRegister = async () => {
    createUser().
    then(res=>{
      const user = res.user;
    }).catch(error=>{
      const errorCode = error.code;
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded"
          
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer transition"
          >
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleRegister}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer transition"
        >
          Register with Google
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
        )}

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
