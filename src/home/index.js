

import Postagens from '../components/posts'
import './style.css'
import { useState } from 'react'
import Busca from '../components/busca'
import { useContext } from 'react/cjs/react.development'
import { Link, useParams } from 'react-router-dom'
import { PostContext } from '../context/index'
export default function Home() {
    const {id} = useParams()
    const { buscaOn, setBuscaOn, arrayNavigation } = useContext((PostContext))


    return (
        <main style={{display:'flex',flexDirection:'column'}}>
          <div className="busca">
                <form>
                    <input onChange={(e) => setBuscaOn(e.target.value)} type="search" placeholder='Busque um filme por nome ou ano...' />
                </form>
            </div>
            {buscaOn === '' ?
                <Postagens />
                :
                <Busca />
            }
            <div className="navigation">
                <ul>
                    {arrayNavigation.map((item) => {
                        return (

<div>   

                            <li><Link to={`/page/${item}`}>{item === id ? 'Igual' : item }{id}</Link></li>
                            </div>
                        )
                    })}
                </ul>
            </div>

        </main>
    )
}