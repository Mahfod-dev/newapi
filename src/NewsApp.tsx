import { useState } from 'react'
import FormNews from './components/FormNews'
import ListingNews from './components/ListingNews'
import { Newsapi } from './interface/api'
import './App.css'

function NewsApp() {
 const [news,setNews] = useState<Newsapi>({status:'',totalResults:0,articles:[]})

 return (
    <div className="App">
    <FormNews setNews={setNews}/>
    {news.articles.length === 0 ? <p>Please enter a search term</p> : <ListingNews news={news} /> } 
    </div>
  )
}

export default NewsApp
