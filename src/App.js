import axios from "axios";
import { useEffect, useState } from "react";



function App() {
  const [getData, setGetData] = useState(null)


  const url = 'https://course-api.com/react-store-products';

  const fetchData = async () => {
    try{
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        }
      })

      setGetData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>app running</h1>
      {JSON.stringify(getData)}
    </div>
  );
}

export default App;
