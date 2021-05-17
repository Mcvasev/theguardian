import React, { useState, useEffect} from "react";
import TitleHead from "./TitleHead";

export default function AppGuardian() {
    let [arrNews, setArrNews] = useState([]);    
    let [query, setQuery] = useState('')
    let [page, setPage] = useState(1)
    useEffect(() =>{
        getArrNews().then((data) => {
            setArrNews(data.response.results)
        console.log(data)})
    }, [query, page])
    let getArrNews = () =>{
        return fetch(`https://content.guardianapis.com/search?api-key=b6a6185f-a149-4cab-b23a-ed24ef9cf6f0&page-size=10&page=${page}&q=${query}`)
            .then(response => response.json())              
    }
    let getQuery = (e) => {
        e.preventDefault()
        let form = new FormData(e.target)
        setQuery(form.get('text'))
        setPage(1)
    }
    let nextPage = () => {        
        setPage(page + 1)
    }
    let previousPage = () => { 
        if (page === 1){
            alert('меньше некуда')
        }       
        setPage(page - 1)
    }
    return (
        <div>
            <TitleHead getQuery = {getQuery}/>
            <button onClick = {previousPage}>предыдущая страница</button>
            <p>{page}</p>
            <button onClick = {nextPage}>следующая страница</button>
            {arrNews.map((item) => <p><a href = {item.webUrl}>{item.webTitle}</a></p>)}
        </div>
    )
}