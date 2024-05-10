import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { RouterProvider } from "react-router-dom";
import router from './router';


function App() {
 const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
  </>
//     <>
//       <Navbar />
//       <h1 className='text-3xl font-bold underline'>Vite + React</h1>

// {/* <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="hall" element={<Hall />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter> */}
    
//     </>
  )
}

export default App
