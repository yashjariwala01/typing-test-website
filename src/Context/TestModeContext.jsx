// import React from "react";
// import { useContext, useState } from "react";


// const TestModeContext = React.createContext();
// // 
// export const TestModeContextProvider = ({children})=>{

//     const [testTime, setTestTime] = useState(15);

//     const value={
//         testTime,
//         setTestTime
//     }

//     return(<TestModeContext.Provider value={value}> {children}</TestModeContext.Provider>)
// }

// export const useTestMode = useContext(TestModeContext);


import { createContext,useContext,useState } from "react";

// pseudo Provider.
const TestModeContext = createContext();

export const TestModeContextProvider = ({children})=>{

    const [testTime, setTestTime] = useState(15);

    const values = {
        testTime,
        setTestTime
    }

    return (<TestModeContext.Provider value={values}>{children}</TestModeContext.Provider>)
}

export const useTestMode = ()=> useContext(TestModeContext);