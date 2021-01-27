import {useState, useEffect} from 'react';


const useFetchData= () =>{
    const [data, setData] = useState(null);
  // const [error, setError] =useState(null);
  const url='http://127.0.0.1:8000/api/products';

  useEffect(()=>{
      const abortController=new AbortController();
      fetch(url, {signal: abortController.signal})
      .then(res=>{
          if(!res.ok){
              throw Error(`Couldn't fetch the data`);
          }
          return res.json()
      })
      .then(res=>{
      //   console.log(res);
        setData(res);  
      })
      .catch(err=>console.log(err));

      // return () =>abortController.abort();
  },[])

  return {data}
}

export default useFetchData;