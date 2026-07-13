import { CreateContext } from "react";
import { food_list } from "../assets/asset";
export const StoreContext = CreateContext(null)
const StoreContextProvider = () =>{

    const contextValue = {
        food_list
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;