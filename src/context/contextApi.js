import React,{createContext,useState,useEffect} from "react";
import fetchFromApi from "../utils/api";
export const Context = createContext();

export const AppContext = (props) =>{

    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileSearch, setMobileSearch] = useState(false)
    const [loading,setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [searchResult, setSearchResult] = useState(null);

    useEffect(()=>{
        fetchSelectedCategoryData(selectedCategory);
    },[selectedCategory])

    const fetchSelectedCategoryData = (query)=>{
        setLoading(true);
        fetchFromApi(`search/?q=${query}`).then(({contents})=>{
            setSearchResult(contents);
            setLoading(false);
        })
    }

    return(
        <Context.Provider
        value={{
            mobileMenu,
            setMobileMenu,
            mobileSearch,
            setMobileSearch,
            loading,
            setLoading,
            selectedCategory,
            setSelectedCategory,
            searchResult,
            
        }}
        >
        {props.children}
        </Context.Provider>
    )
}