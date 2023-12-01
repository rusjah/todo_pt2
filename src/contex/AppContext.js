import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [authorization, setAuthorization] = useState(false)

    return <AppContext.Provider value={{authorization, setAuthorization}}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = (() => {
    return useContext(AppContext)
});