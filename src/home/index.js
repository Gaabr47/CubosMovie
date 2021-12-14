

import Postagens from '../components/posts'
import './style.css'

import Busca from '../components/busca'
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import { PostContext } from '../context/index'
export default function Home() {
    const { id } = useParams()
    const { buscaOn, setBuscaOn, arrayNavigation } = useContext(PostContext)


    return (
        <main style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="busca">
                <form>
                    <input onChange={(e) => setBuscaOn(e.target.value)} type="search" placeholder='Busque um filme por nome ou ano...' />
                </form>
            </div>
            {buscaOn === '' ?
                
               '123'
                :
                <Busca />
            }

            <div className="navigation">
                <ul>
                    {arrayNavigation.map((item, index) => {
                        return (

                            <div>

                                <li key={index}><Link to={`/page/${item}`}>{item === id ? 'Igual' : item}{id}</Link></li>
                            </div>
                        )
                    })}
                </ul>
            </div>

        </main>
    )
}
