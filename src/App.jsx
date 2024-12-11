import { useState, useEffect, createContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard'
import Landing from './components/Landing/Landing'
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from './services/authService'
import * as foodService from './services/foodService'
import FoodList from './components/FoodList/FoodList'
import FoodDetails from './components/FoodDetails/FoodDetails';
import FoodForm from './components/FoodForm/FoodForm';

export const AuthedUserContext = createContext(null)


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [foods, setFoods] = useState([]);

  const navigate = useNavigate()

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

  const handleDeleteFood = async (foodId) => {
    const deletedFood = await foodService.deleteFood(foodId);
    setFoods(foods.filter((food) => food._id !== foodId));
    navigate('/foods');
  };

  const handleAddFood = async (foodFormData) => {
    const newFood = await foodService.create(foodFormData);
    setFoods([newFood, ...foods]);
    navigate('/foods');
  };

  const handleUpdateFood = async (foodId, foodFormData) => {
    console.log('foodId:', foodId, 'foodFormData:', foodFormData);
    const updatedFood = await foodService.update(foodId, foodFormData)
    setFoods(foods.map((food) => (foodId === food._id ? updatedFood : food)))
    navigate(`/foods/${foodId}`);
  }

  return (
    <>
    <AuthedUserContext.Provider value={user}>
      <NavBar user={user} handleSignout={handleSignout}/>
      <Routes>
  {user ? (
    <>
              <Route path='/' element={<Dashboard  user={user}/>}/>
              <Route path='/foods' element={<FoodList foods={foods}/>}/>
              <Route path='/foods/:foodId' element={<FoodDetails handleDeleteFood={handleDeleteFood}/>}/>
              <Route path='/foods/new' element={<FoodForm handleAddFood={handleAddFood}/>}/>
              <Route path='/foods/:foodId/edit' element={<FoodForm handleUpdateFood={handleUpdateFood}/>}/>
            </>
          ) : (
            <Route path='/' element={<Landing />}/>
          )}
          <Route path='/signup' element={<SignupForm setUser={setUser}/>} />
          <Route path='/signin' element={<SigninForm setUser={setUser}/>} />
</Routes>
</AuthedUserContext.Provider>
    </>
  )
}
export default App
