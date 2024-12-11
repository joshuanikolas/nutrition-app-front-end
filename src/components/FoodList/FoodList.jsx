import { Link } from 'react-router-dom';

const FoodList = (props) => {
    return (
        <main>
            {props.foods.map((food) => {
                return (
                    <Link key={food._id} to={`/foods/${food._id}`}>
                        <article>
                            <header>
                                <h2>{food.title}</h2>
                                <p>
                                    {food.author.username} posted on {new Date(food.createdAt).toLocaleDateString()}
                                </p>
                            </header>
                            <p>{food.text}</p>
                        </article>
                    </Link>
                )
            })}
        </main>
    )
};

  export default FoodList;