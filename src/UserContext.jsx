import {createContext, useState,useEffect} from "react";
import { jwtDecode } from "jwt-decode";
import { useCookies } from 'react-cookie';


export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [userInfo,setUserInfo] = useState("");
  const [userToken, setUserToken] = useState(null);
  const [search,setSearch]= useState("");

  useEffect(() => {
    var sessionObject = JSON.parse(localStorage.getItem('sessionObject'));
      if (sessionObject) {
        var currentDate = new Date();
        var expirationDate = new Date(sessionObject.expiresAt);
      if (currentDate > expirationDate) {
        // The sessionStorage item has expired, remove it
        localStorage.removeItem('sessionObject');
      } else {
        setUserInfo(sessionObject.username);
      }
      } else {
      // The sessionStorage item does not exist, handle the error
      console.error('The sessionStorage item does not exist');
    }
    const storedUserInfo = sessionStorage.getItem('userInfo');

    if (storedUserInfo) {
      const { data, expiresAt } = JSON.parse(storedUserInfo);
  
      // Check if the stored information has not expired
      if (expiresAt && new Date().getTime() < expiresAt) {
        setUserInfo(data.name);
      } else {
        // Clear expired user info
        sessionStorage.removeItem('userInfo');
      }
    }
   }, []);
 
  return (
    <UserContext.Provider value={{userInfo,setUserInfo,userToken, setUserToken,search,setSearch}}>
      {children}
    </UserContext.Provider>
  );
}