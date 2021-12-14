
import './style.css'



import api from '../api/api';

import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom'

import { PostContext } from '../context/index'
export default function PageNavigation() {
    const { id } = useParams()
    const { setBuscaOn, buscaOn, arrayNavigation } = useContext(PostContext)

    const [generos, setGeneros] = useState([])
    const [busca, setBuscaList] = useState([])
    const [postList, setPostList] = useState([])
    const [paginacao, setPaginacao] = useState('')

    useEffect(() => {
        async function listMovies() {
            const response = {
                principal: await api.get('/popular?api_key=fe23e2883b46907fcadb189b39420b26&language=pt-br&page=4'),
                generos: await api.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fe23e2883b46907fcadb189b39420b26&language=pt-br')
            }

            setGeneros(response.generos.data.genres)

            setPostList(response.principal.data.results)

            function filtrar(filtro) {

                return (filtro.title.toLowerCase().includes(buscaOn) || filtro.release_date.includes(buscaOn))



            }


            setBuscaList(response.principal.data.results.filter((filtrar)))

        }

        if (id === undefined || id === '1') {
            setPaginacao('0')

        } else {
            setPaginacao(id * 5)
        }

        listMovies()


    }, [id, buscaOn])



  


    return (

        <main style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="busca">
                <form>
                    <input onChange={(e) => setBuscaOn(e.target.value)} type="search" placeholder='Busque um filme por nome ou ano...' />
                </form>
            </div>
            {buscaOn === '' ?
                <article>
                    {
                        postList.slice(paginacao, paginacao + 5).map((item, index) => {
                            const percentPosts = item.vote_average * 10

                            return (
                                <section key={index}>

                                    <div className="content_post">
                                        <div className="titulo"> <span className="porcentagem" style={{ padding: 20, borderRadius: '70%' }}>{percentPosts}%</span><h1><a href={`/${item.id}`}>{item.title}</a></h1>

                                        </div>

                                        <div className="center_content_post">
                                            <div style={{ marginLeft: '15%' }}> {item.release_date}</div>
                                            <br />

                                            {item.overview}


                                            {item.genre_ids === undefined ? console.log('undefined') :
                                                <div className="categoria">
                                                    {
                                                        item.genre_ids.map((ids, index) => {

                                                            return (
                                                                <ul key={index}>

                                                                    {generos.map((items, index) => {
                                                                        return (
                                                                            <div key={index}>
                                                                                {items.id === ids ? <li>{items.name}</li> : <div style={{ display: 'none' }}></div>}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            )

                                                        })
                                                    }</div>
                                            }

                                        </div>
                                    </div>
                                    <span>
                                        <img alt="poster" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                                    </span>
                                </section>
                            )


                        })
                    }
                </article>
                :
                <article>

                    {busca.length !== 0 ?

                        <>
                            {busca.slice(paginacao, paginacao + 5).map((item, index) => {

                                const percentPosts = item.vote_average * 10

                                return (
                                    <section key={index}>

                                        <div className="content_post">
                                            <div className="titulo"> <span className="porcentagem" style={{ padding: 20, borderRadius: '70%' }}>{percentPosts}%</span><h1><a href={`/${item.id}`}>{item.title}</a></h1>

                                            </div>

                                            <div className="center_content_post">
                                                <div style={{ marginLeft: '8%' }}> {item.release_date}</div>
                                                <br />

                                                {item.overview}


                                                {item.genre_ids === undefined ? console.log('undefined') :
                                                    <div className="categoria">
                                                        {
                                                            item.genre_ids.map((ids, index) => {

                                                                return (
                                                                    <ul key={index}>

                                                                        {generos.map((items, index) => {

                                                                            return (
                                                                                <div key={index}>
                                                                                    {items.id === ids ? <li>{items.name}</li> : <div style={{ display: 'none' }}></div>}
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                )

                                                            })
                                                        }</div>
                                                }

                                            </div>
                                        </div>
                                        <span>
                                            <img alt="poster" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                                        </span>
                                    </section>
                                )


                            })}
                        </>
                        : <div className="notFound">Nenhum filme encontrado </div>}
                </article >
            }

            <div className="navigation">
                <ul>
                    {arrayNavigation.map((item, index) => {
                        return (

                            <div>

                                <li key={index}><Link to={`/page/${item}`}>{item === id ? 'Igual' : item}</Link></li>
                            </div>
                        )
                    })}
                </ul>
            </div>

        </main>

    )
}