import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

function AlertProvider({ children }) {

    const [alert, setAlert] = useState({ type: '', message: '' });

    return <AlertContext.Provider value={{ alert, setAlert }}>
        {children}
    </AlertContext.Provider>
}

function useAlert() {
    return useContext(AlertContext);
}

export { AlertProvider, useAlert };