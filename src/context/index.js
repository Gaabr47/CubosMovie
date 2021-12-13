import { createContext, useState } from "react"
import { useParams } from "react-router-dom"
export const PostContext = createContext()

export default function PostProvider({ children }) {


   
    const [buscaOn, setBuscaOn] = useState('')
    const [navigation, setNavigation] = useState('')

 
    const arrayNavigation = []
    const navigationSize = navigation / 5
    for (let i = 1; i < navigationSize; i++) {
        arrayNavigation.push(i)
    }
 


    return (
        <PostContext.Provider value={{ buscaOn, setBuscaOn, setNavigation,arrayNavigation }}>
            {children}
        </PostContext.Provider>
    )

}