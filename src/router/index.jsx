import Layout from '../components/pages/Layout';
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from '../components/pages/Home';
import Contact from '../components/pages/Contact';
import Hall from '../components/pages/Hall';
import PageNotFund from '../components/pages/PageNotFund';
import LoginPage from '../components/pages/Login';
import SignupPage from '../components/pages/SignUp';
import AboutUs from '../components/pages/AboutUs';
import HallsInCategories from '../components/pages/HallsInCategories';
const router = createBrowserRouter(
    createRoutesFromElements(
      <>
              <Route path="/" element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="hall/:id" element={<Hall />} />
              <Route path="Category/:id" element={<HallsInCategories />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signUp" element={<SignupPage />} />
              <Route path="*" element={<PageNotFund />} />
              </Route>



      </>
      
    )
  );
  
  export default router;
  