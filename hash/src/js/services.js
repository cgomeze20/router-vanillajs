export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if(!response.ok) throw new Error("Error fetching data.");
      const data = await response.json();
      return data

    } catch (error) {
      console.log(error);
    }
  }
