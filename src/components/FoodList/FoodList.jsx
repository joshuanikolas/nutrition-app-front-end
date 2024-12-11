import { Link } from 'react-router-dom';


const FoodList = (props) => {
    return (
        <main>
            {props.foods.map((food) => {
                return (
                    <Link key={food._id} to={`/foods/${food._id}`}>
                <header>
                  <h1>Hi there, {author.username}</h1>
                  <p>
                    Here is where you have logged all your meals and you are able to see what you have eaten throughout your fitness journey. 
                  </p>
                </header>
                </Link>
                )
            })}
        </main>
    );
};


  export default FoodList;