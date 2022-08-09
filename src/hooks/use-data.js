import { useEffect, useState } from "react";

const useData = (path = '/items',refetch = false) => {

    const [data, setData] = useState([]);
    useEffect( () => {
      fetch(path , {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
  }).then(response => {
    if(!response.ok){
      if (response.status === 500) return window.alert('Check your internet connection')
      else return window.alert('Something went wrong!!, try again')
    }else{
      response.json().then((result)=> {
          setData(result);
      })
      .catch(err => window.alert(err.message));
    }
  })

},[refetch]);
  
    return data;

}

export default useData;