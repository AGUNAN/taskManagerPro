import React from 'react'
import {  Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import NavBar from './components/NavBar';
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "./components/common/LoadingSpinner";

const App = () => {

  // const { data: authUser, isLoading } = useQuery({
	// 	// we use queryKey to give a unique name to our query and refer to it later
	// 	queryKey: ["authUser"],
	// 	queryFn: async () => {
	// 		try {
	// 			const res = await fetch("/api/auth/me");
	// 			const data = await res.json();
	// 			if (data.error) return null;
	// 			if (!res.ok) {
	// 				throw new Error(data.error || "Something went wrong");
	// 			}
	// 			console.log("authUser is here:", data);
	// 			return data;
	// 		} catch (error) {
	// 			throw new Error(error);
	// 		}
	// 	},
	// 	retry: false,
	// });

	// if (isLoading) {
	// 	return (
	// 		<div className='h-screen flex justify-center items-center'>
	// 			<LoadingSpinner size='lg' />
	// 		</div>
	// 	);
	// }
  return (
    <div >
      <NavBar/>
       <Routes>
				<Route path='/' element={ <Home  />} />
				<Route path='/login' element={ <Login /> } />
				<Route path='/signup' element={<SignUp /> } />
			</Routes>
      <Toaster />
    </div>
  )
}

export default App