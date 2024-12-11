import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as foodService from '../../services/foodService';


const { foodId } = useParams();
const [food, setFood] = useState(null);


useEffect(() => {
    const fetchFood = async () => {
      const foodData = await foodService.show(hootId);
      console.log('foodData', foodData);
      setFood(foodData);
    };
    fetchFood();
  }, [foodId]);
  

if (!food) return <main>Loading...</main>;

return (
    <main>
      <header>
        <p>{food.category.toUpperCase()}</p>
        <h1>{food.title}</h1>
        <p>
          {food.author.username} posted on
          {new Date(food.createdAt).toLocaleDateString()}
        </p>
      </header>
      <p>{food.text}</p>

      <section>
  <h2>Comments</h2>

  {!food.comments.length && <p>There are no comments.</p>}

  {food.comments.map((comment) => (
    <article key={comment._id}>
      <header>
        <p>
          {comment.author.username} posted on
          {new Date(comment.createdAt).toLocaleDateString()}
        </p>
      </header>
      <p>{comment.text}</p>
    </article>
  ))}
</section>
    </main>
  );
  

  console.log('food state:', food);
