
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import api from "../../api/api"
import { PostContext } from "../../context"
import './style.css'
export default function Postagens() {
    const [postList, setPostList] = useState([])
    const [generos, setGeneros] = useState([])
    const { setNavigation, teste,buscaOn,setBuscaOn } = useContext(PostContext)
    const [paginacao, setPaginacao] = useState('')
    const { id } = useParams()

    useEffect(() => {
        async function listMovies() {
            const response = {
                principal: await api.get('/popular?api_key=fe23e2883b46907fcadb189b39420b26&language=pt-br&page=4'),
                generos: await api.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fe23e2883b46907fcadb189b39420b26&language=pt-br')
            }

            setGeneros(response.generos.data.genres)
     
            setPostList(response.principal.data.results)



        }

        if (id === undefined || id === '1' ) {
            setPaginacao('0')
        
        }else {
            setPaginacao(id*5)
        }

        listMovies()


    }, [id])



    setNavigation(postList.length)
  
   
    return (

        <article>
  

            {postList.slice(paginacao,paginacao+5).map((item) => {
                const percentPosts = item.vote_average * 10

                return (
                    <section>

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
                                            item.genre_ids.map((ids) => {

                                                return (
                                                    <ul>

                                                        {generos.map((items) => {
                                                            return (
                                                                <>
                                                                    {items.id === ids ? <li>{items.name}</li> : <div style={{ display: 'none' }}></div>}
                                                                </>
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
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                        </span>
                    </section>
                )


            })}

        </article >
    )
}