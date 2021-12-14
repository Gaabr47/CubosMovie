

import Postagens from '../components/posts'
import './style.css'

import Busca from '../components/busca'
import { useContext } from 'react/cjs/react.development'
import { Link, useParams } from 'react-router-dom'
import { PostContext } from '../context/index'
export default function Home() {
    const {id} = useParams()
 /*    const { buscaOn, setBuscaOn, arrayNavigation } = useContext((PostContext)) */


    return (
        <main style={{display:'flex',flexDirection:'column'}}>
          <div className="busca">
                <form>
                    <input  type="search" placeholder='Busque um filme por nome ou ano...' />
                </form>
            </div>
           
            <div className="navigation">
                <ul>
                   
                </ul>
            </div>

        </main>
    )
}