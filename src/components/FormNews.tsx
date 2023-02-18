import React,{useState} from 'react'
import {fetchNewAPI} from '../api'
import {Newsapi} from '../interface/api'

type NewsProps={
    setNews : React.Dispatch<React.SetStateAction<Newsapi>>
}

const FormNews = ({setNews}:NewsProps) => {

const [searchNews,setSearchNews] = useState('')

return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        fetchNewAPI(searchNews).then(setNews)
        setSearchNews('')
    }}>
    <input type="text" onChange={(e) => setSearchNews(e.target.value)} value={searchNews} />
    <button  type="submit">Search</button>

</form>
  )
}
export default FormNews