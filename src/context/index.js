import { createContext, useState } from "react"

export const PostContext = createContext({})

export default function PostProvider({ children }) {
   
    const [buscaOn, setBuscaOn] = useState('')
    const navigation = 20;

    const arrayNavigation = [];
    const navigationSize = navigation / 5;
    for (let i = 1; i < navigationSize; i++) {
        arrayNavigation.push(i)
    }


    return (
        <PostContext.Provider value={{ buscaOn, setBuscaOn,arrayNavigation }}>
            {children}
        </PostContext.Provider>
    )

}