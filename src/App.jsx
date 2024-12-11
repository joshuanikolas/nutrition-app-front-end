import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from './services/authService';
import FoodList from './components/FoodList/FoodList';
import * as foodService from './services/foodService';
import FoodDetails from './components/FoodDetails/FoodDetails';
// import { Routes, Route, useNavigate } from 'react-router-dom';
import FoodForm from './components/FoodForm/FoodForm';


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchAllFoods = async () => {
      const foodsData = await foodService.index();
      setFoods(foodsData)
    };
    if (user) fetchAllFoods();
  }, [user]);

  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  const navigate = useNavigate();
  const handleAddFood = async (foodFormData) => {
    const newFood = await foodService.create(foodFormData);
    setFoods([newFood, ...foods]);
    navigate('/foods');
  };

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout}/>
      <Routes>
  {user ? (
    <>
      <Route path="/" element={<Dashboard user={user} />} />
      <Route path="/foods" element={<FoodList />} />
    </>
  ) : (
    <Route path="/" element={<Landing />} />
  )}
  <Route path="/signup" element={<SignupForm setUser={setUser} />} />
  <Route path="/signin" element={<SigninForm setUser={setUser} />} />
  <Route path="/foods" element={<FoodList foods={foods} />} />
  <Route path="/foods/:foodId" element={<foodDetails />} />
  <Route path="/foods/new" element={<FoodForm handleAddFood={handleAddFood} />} />


</Routes>
    </>
  )
}


export default App
