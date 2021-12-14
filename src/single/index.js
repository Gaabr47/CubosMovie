
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../api/api"
import { Link } from "react-router-dom"
import { ImHome3 } from 'react-icons/im'
import './style.css'
export default function Single() {
  const { id } = useParams()
  const [singlePost, setSinglePost] = useState('')



  useEffect(()=>{
    async function impressSinglePost() {
      const response = {
        single: await api.get(`/${id}?api_key=fe23e2883b46907fcadb189b39420b26&language=pt-BR`)
      }
      setSinglePost(response.single.data)

    }

    impressSinglePost()
  },[])

  const percentPosts = singlePost.vote_average * 10


  return (
    <main>

      <div className="home"> <Link to="/"><ImHome3 /> Pagina inicial</Link></div>
      <br />
      <article>
        <header><h1>{singlePost.title} </h1></header>
        <div className="center_single_post">

          <span style={{ textAlign: 'left' }}><h3>Sinopse</h3>
            <hr />
            <p>{singlePost.overview}</p>
            <br />
            <h3>Informações </h3>
            <hr />
            <table>
              <thead>
                <tr>
                  <td>Situação</td>
                  <td>Idioma</td>
                  <td>Duração</td>

                  <td>Orçamento</td>
                  <td>Receita</td>
                  <td>Lucro</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{singlePost.status === 'Released' ? 'Lançado' : 'Não lançado'}</td>
                  <td>{singlePost.original_language === 'en' ? 'Ingles' : 'outros'}</td>
                  <td>{singlePost.runtime}min</td>
                  <td>${singlePost.budget}</td>
                  <td>${singlePost.revenue}</td>

                  <td>{singlePost.profit === undefined ? 'Não informado' : `$ ${singlePost.profit} `} </td>
                </tr>
              </tbody>
            </table>
            <div className="categoria">
              {singlePost.genres === undefined ? 'carregando' :
                <ul>
                  {singlePost.genres.map((dados,index) => {
                    return (

                      <li key={index}>{dados.name}</li>

                    )

                  })}
                </ul>
              }
            </div>
          </span>
          <span>
      
            <div className="trailer">         <a href={`https://www.youtube.com/results?search_query=trailer ${singlePost.title}`} rel="noreferrer" target="_blank"><b>Trailer</b></a></div>
            <img alt="poster" src={`https://image.tmdb.org/t/p/original/${singlePost.poster_path}`} />
            <br/>
            <div className="percentPost">{percentPosts}%</div>
          </span>
        </div>

      </article>
    </main>
  )
}