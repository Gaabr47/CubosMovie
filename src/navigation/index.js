
import './style.css'
import Postagens from '../components/posts'
import './style.css'

import Busca from '../components/busca'
import { useContext } from 'react/cjs/react.development'
import { Link, useParams } from 'react-router-dom'
import {ImHome3} from 'react-icons/im'
import { PostContext } from '../context/index'
export default function PageNavigation() {
    const {id} = useParams()
    const {setBuscaOn, buscaOn, arrayNavigation } = useContext((PostContext))

    return (
    
            <main style={{display:'flex',flexDirection:'column'}}>
                  <div className="busca">
                <form>
                    <input onChange={(e) => setBuscaOn(e.target.value)} type="search" placeholder='Busque um filme por nome ou ano ...' />
                </form>
                <div className="home"> <Link to="/"><ImHome3 /> Pagina inicial</Link></div>
            </div>
 
                {buscaOn === '' ?
                
                    <Postagens />
                    :
                    <Busca />
                }

<div className="navigation">
                <ul>
                    {arrayNavigation.map((item,index) => {
                        return (



                            <li key={index} onClick={() => window.scrollTo(0, 0)}><Link to={`/page/${item}`}>{item === id ? <div className="Active">{item}</div> : item}</Link></li>

                        )
                    })}
                </ul>
            </div>
            </main>

            
     
    )
}