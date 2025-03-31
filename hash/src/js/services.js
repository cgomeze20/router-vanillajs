export const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json();
      return data  
    } catch (error) {
      console.log(error);
    }
  }

 export  const fetchPostId = async (id) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      const data = await response.json();
      return data  
    } catch (error) {
      console.log(error);
    }
  }