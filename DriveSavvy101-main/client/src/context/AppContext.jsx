import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext= createContext()

export const AppContextProvider= (props)=>{
    const backendUrl= import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin,setIsLoggedin]=useState(false);
    const [userData,setUserData]=useState(false);
    
    const getUserData= async()=>{
        try{
            const {data}= await axios.get(backendUrl + '/api/user/data')
            data.success ? setUserData(data.userData) : toast.error(data.message) 
        }
        catch(error){
            toast.error(error.response?.data?.message || error.message)
        }
          
    }

    const value={
        backendUrl,
        isLoggedin,setIsLoggedin,
        userData,setUserData,
        getUserData
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}