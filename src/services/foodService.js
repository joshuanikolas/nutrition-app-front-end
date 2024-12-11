const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/foods`;

const show = async (foodId) => {
    try {
      const res = await fetch(`${BASE_URL}/${foodId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  

  const create = async (foodFormData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export { index, show, create };
