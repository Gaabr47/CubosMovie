
import { useEffect, useState } from "react"
import { useContext } from "react/cjs/react.development"
import api from "../../api/api"
import { PostContext } from "../../context"
import './style.css'
export default function Busca() {
    const {buscaOn} = useContext(PostContext)
    const [postList, setPostList] = useState([])
    const [generos, setGeneros] = useState([])

 

    useEffect(() => {
        async function listMovies() {
            const response = {
                principal: await api.get('/popular?api_key=fe23e2883b46907fcadb189b39420b26&language=pt-br&page=4'),
                generos: await api.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fe23e2883b46907fcadb189b39420b26&language=pt-br')
            }

            setGeneros(response.generos.data.genres)

            function filtrar(filtro) {
                
               return (filtro.title.toLowerCase().includes(buscaOn) || filtro.release_date.includes(buscaOn)  )
                 
                   

            }

            
            setPostList(response.principal.data.results.filter((filtrar)))
            
       
        }
        listMovies()


    }, [buscaOn])




    return (
        <article>
            
        {postList.length !== 0 ? 

        <>
        {postList.map((item,index) => {
       
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
                                        item.genre_ids.map((ids,index) => {

                                            return (
                                                <ul key={index}>

                                                    {generos.map((items,index) => {
                                                       
                                                        return (
                                                            <div key={index}>
                                                                {items.id === ids ? <li>{items.name}</li> : <div style={{display:'none'}}></div>}
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
)
    
}