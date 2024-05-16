
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
  let navigate = useNavigate();
  
  
  //get category from api
   const api_url="https://wedding-halls.flexi-code.com/public/api/wedding-hall-categories"
  const [categories,setCategories] = useState([])
  const fetchData =async () => {
    try {
      await fetch(api_url).then((res)=>res.json()).then((cat)=>setCategories(cat.data))
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(()=>{
    fetchData()
    
  },[])


  //dropdown handling
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  }
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  
  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' , path:'/'},
    { id: 2, text: 'About Us' },
    { id: 3, text: 'Contact' ,path:'contact' },
    { id: 4, text: 'Login',path:'login' },
    { id: 5, text: 'Sign Up',path:'signUp' },
  ];
  // extract email from JWT token 

// if(localStorage.getItem("userToken")){
// const token = localStorage.getItem("userToken")
// const decoded = jwtDecode(token);
// console.log(decoded); 
// }
  return (

    <div className='bg-mainColor flex justify-between items-center h-24 px-4 w-full text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
        <NavLink to={'/'}>Occasion Halls</NavLink></h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        
          <li
            
            className='p-4 text-center	 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            style={{width:100}}
          >
            <NavLink className='w-full' to={"/"}>Home</NavLink>
            
          </li>
          <li
            
            className='p-4 text-center	 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            style={{width:120}}
          >
            <NavLink to={"aboutus"}>About Us</NavLink>
            
          </li>
          <li
            
            className='p-4 text-center	 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            style={{width:100}}
          >
            <NavLink to={"contact"}>Contact</NavLink>
            
          </li>
          {
            !localStorage.getItem("userToken") &&
            <>
            <li
            
            className='p-4 text-center	 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            style={{width:100}}
          >
            <NavLink to={"login"}>Login</NavLink>
            
          </li>
          <li
            
            className='p-4 text-center	 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            style={{width:100}}
          >
            <NavLink to={"signUp"}>SignUp</NavLink>
            
          </li>
          </>
          }
          
          
          {
            localStorage.getItem("userToken") && <li className='p-4 text-center	 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'> 
            <button style={{width:70}} onClick={()=>{
             localStorage.removeItem("userToken");
             navigate("/")
            }}>Sign Out</button></li>
          }
         
         <li>
         <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="rounded-xl text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0  m-2 p-4 md:hover:bg-[#00df9a]  font-medium flex items-center justify-between"  onClick={handleDropDown}>Halls <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
      <div id="dropdownNavbar" className={`absolute top-12 right-0 z-10 w-44 mt-12 bg-white rounded divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`} >
                    <ul className="py-1 " aria-labelledby="dropdownLargeButton">
                      {
                        categories && categories.map((cat)=>(
                          <li key={cat.id}>
                              <Link to={`Category/${cat.id}`} className="text-sm hover:bg-mainColor text-black hover:text-white block px-4 py-2">{cat.name}</Link>
                          </li>
                        ))
                      }
                   
                    </ul>
                    
                </div>
         </li>
      </ul>
      

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-mainColor m-4'>Occasion Halls</h1>

        {/* Mobile Navigation Items */}
         <li
            
            className='p-4 text-center w-full	 hover:bg-mainColor rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
            style={{width:100}}
          >
            <NavLink to={"/"}>Home</NavLink>
            
          </li>
          <li
            
            className='p-4 text-center w-full	 hover:bg-mainColor rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
            style={{width:120}}
          >
            <NavLink to={"aboutus"}>About Us</NavLink>
            
          </li>
          <li
            
            className='p-4 text-center	w-full hover:bg-mainColor rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
            style={{width:100}}
          >
            <NavLink to={"contact"}>Contact</NavLink>
            
          </li>
          {
            !localStorage.getItem("userToken") &&
            <>
            <li
            
            className='p-4 text-center	w-full hover:bg-mainColor rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
            style={{width:100}}
          >
            <NavLink to={"login"}>Login</NavLink>
            
          </li>
          <li
            
            className='p-4 text-center w-full	 hover:bg-mainColor rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
            style={{width:100}}
          >
            <NavLink to={"signUp"}>SignUp</NavLink>
            
          </li>
          </>
          }
          
          
          {
            localStorage.getItem("userToken") && <li className='p-4	 hover:bg-mainColor rounded-xl m-2 cursor-pointer duration-300 hover:text-white'> 
            <button  onClick={()=>{
             localStorage.removeItem("userToken");
             navigate("/")
            }}>Sign Out</button></li>
          }
         
         <li>
         <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="rounded-xl text-white border-b border-gray-100 md:hover:bg-transparent md:border-0  m-2 p-4 hover:bg-mainColor  font-medium flex items-center justify-between"  onClick={handleDropDown}>Halls <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
      <div id="dropdownNavbar" className={`absolute top-80 left-0 z-10 w-44 mt-12 bg-white rounded divide-y divide-gray-100 shadow ${
          isOpen ? "block" : "hidden"
        }`} >
                    <ul className="py-1 " aria-labelledby="dropdownLargeButton">
                      {
                        categories && categories.map((cat)=>(
                          <li key={cat.id}>
                              <Link to={`Category/${cat.id}`} className="text-sm hover:bg-mainColor text-black hover:text-white block px-4 py-2">{cat.name}</Link>
                          </li>
                        ))
                      }
                   
                    </ul>
                    
                </div>
         </li>
        
      </ul>
    </div>
  );
};

export default Navbar;