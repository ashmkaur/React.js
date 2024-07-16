import { createContext, useCallback, useContext } from "react";

export const Themecontext= createContext({
    thememode:"light",
    darktheme: ()=>{},
    lighttheme: ()=>{},
})

export const Themeprovider= Themecontext.Provider

export default function usetheme(){
    return useContext(Themecontext)
}