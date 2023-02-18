import { Article } from '../interface/api'

type Props={
 news:{
  status:string,
  totalResults:number,
  articles:Article[]
}
}


const ListingNews = ({news}:Props) => {

  return (
    <>
    {
      news.articles.slice(0,10).map((article,index)=>{
        return (
          <Listing key={index} article={article}/>
        )
      })
    }
    
    </>
  )
}

type ArticleProps={
  article:Article
}


const Listing = ({article}:ArticleProps)=>{
  return (
  <div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img style={{width:"200px",height:"200px"}} src={article.urlToImage} alt={article.title} />
          </div>

  )
}


export default ListingNews