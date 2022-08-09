import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = (data = {
    username: '',
    password: ''
  }, path = '/signIn', method = 'POST',body= []) =>{
    const navigate = useNavigate();
    const [userState, setUserState] = useState(data);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
      const manageChange = (e) => {
        setUserState(prevData => ( { ...prevData , [e.target.name]: e.target.value }));
      }

      const manageSubmit = (e) => {
        e.preventDefault();
    
      if(path === '/address'){
        setIsLoading(true);
        fetch(path , {
          method: method,
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({userState, body})
      }).then(response => {
          if(!response.ok){
          setIsLoading(false);
          if (response.status === 500) return window.alert('Check your internet connection')
          else return window.alert('Something went wrong!!, try again')
        }else{
          response.json().then((result)=> {
            setIsLoading(false);
            window.alert(result.message);
            navigate('/orders',{state: result.orderList})
          })
          .catch(err => {
            setIsLoading(false);
            window.alert(err.message)});
        }
      }
      )}
      else if (path === '/query') {
        fetch(path , {
          method: method,
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(userState)
      }).then(response => {
        if(!response.ok){
          if (response.status === 500) return window.alert('Check your internet connection')
          else return window.alert('Something went wrong!!, try again')
        }else{
          response.json().then((result)=> {
            setUserState({name: '', email: '', subject: '', message: ''})
            window.alert(result.message);
          })
          .catch(err => window.alert(err.message));
        }
      }
      );
      } else {
        fetch(path , {
          method: method,
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(userState)
      }).then(response => {
        if(!response.ok){
          if(response.status === 401) return window.alert('Invalid username or password')
          else if (response.status === 500) return window.alert('Check your internet connection')
          else return window.alert('Something went wrong!!, try again')
        }else{
          response.json().then((result)=> {
            if(!result.auth) throw Error(result.error.message)
            window.alert(result.message);
            localStorage.setItem('token',result.token)
            setIsLoggedIn(true);
          })
          .catch(err => window.alert(err.message));
        }
      }
      );
      }

    }
    return {isLoggedIn, manageChange,manageSubmit,isLoading,userState} 
}

export default useAuth;