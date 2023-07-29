const fetchDataFromAPI = async () => {
  try {
    const response = await fetch('https://api.example.com/data'); // Replace with your API URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchDataFromAPI