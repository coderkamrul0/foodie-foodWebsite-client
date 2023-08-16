/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import registerBg from "../../assets/registerBg.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${registerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const {createUser,updateUserProfile,setLoading,signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegistration =(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, email, password, confirmPassword);

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name)
          .then(() => {
            const saveUser = {name:name, email:email}
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId){

                navigate(from, { replace: true });
              }
            })

          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user
        const saveUser = {name:loggedInUser.displayName, email:loggedInUser.email, photo:loggedInUser.photoURL}
        fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {
                navigate(from, { replace: true });
            })

        // navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };


  return (
    <div className="h-[calc(100vh-60px)]" style={backgroundImageStyle}>
      <div className="max-w-screen-xl mx-auto md:flex px-2">
        <div className="md:w-1/2">

        </div>
        <div className="md:w-1/2 mt-5 md:mt-20 bg-slate-500 p-5 rounded bg-opacity-25">
            <h4 className="text-center font-bold text-4xl text-white">Create A Account</h4>
          <form onSubmit={handleRegistration}>
            <div className="mb-4 w-full">
              <label className="block text-sm text-white font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-white font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-white font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-white font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#b8912f] text-black px-4 py-2 rounded-md hover:bg-[#FFC222] transition-colors w-full"
              >
                Register
              </button>
            </div>
            <div onClick={handleGoogleLogin} className="bg-[#4285f4] hover:bg-[#236ee7] cursor-pointer py-1 rounded-md mt-5">
              <button className="flex items-center gap-5 text-white font-bold">
                  <FcGoogle size={30} className="bg-white ms-1"/>
                  Sign In With Google
              </button>
            </div>
            <div className="text-center py-3 text-white">
                <p>Already have an account ? <span className="text-[#FFC222]"><Link to='/login'>Login Now</Link></span> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
