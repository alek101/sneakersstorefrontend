import {useState, useEffect} from 'react';


const useFetchData= () =>{
    const [data, setData] = useState(null);
    const url='http://127.0.0.1:8000/api/products';

  useEffect(()=>{
      fetch(url)
      .then(res=>{
          if(!res.ok){
              throw Error(`Couldn't fetch the data`);
          }
          return res.json()
      })
      .then(res=>{
        setData(res);  
        console.log(res);
      })
      .catch(err=>console.log(err));
  },[])

  return {data}
}

export default useFetchData;