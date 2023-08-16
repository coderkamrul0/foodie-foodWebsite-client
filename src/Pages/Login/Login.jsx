/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import registerBg from "../../assets/registerBg.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${registerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const {signInWithGoogle,setLoading,signIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result => {
      console.log(result.user);
      navigate(from, { replace: true })
    })
    .catch(error => {
      setLoading(false)
      console.log(error);
    })
  }


  // Google Login
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
            <h4 className="text-center font-bold text-4xl text-white">Login Your Account</h4>
          <form onSubmit={handleLogin}>
            
            <div className="mb-4">
              <label className="block text-sm text-white font-medium">Email</label>
              <input
              name="email"
                type="email"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-white font-medium">Password</label>
              <input
              name="password"
                type="password"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="bg-[#b8912f] text-black px-4 py-2 rounded-md hover:bg-[#FFC222] transition-colors w-full"
              >
                Login
              </button>
            </div>
            <div onClick={handleGoogleLogin} className="bg-[#4285f4] hover:bg-[#236ee7] cursor-pointer py-1 rounded-md mt-5">
              <button className="flex items-center gap-5 text-white font-bold">
                  <FcGoogle size={30} className="bg-white ms-1"/>
                  Sign In With Google
              </button>
            </div>
            <div className="text-center py-3 text-white">
                <p>Don't have an account ? <span className="text-[#FFC222]"><Link to='/register'>Register Now</Link></span> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
