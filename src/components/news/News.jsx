import { useEffect, useState } from "react"
import styles from '../news/News.module.css';

const News=(props)=>{
  console.log(props);
 const[news,setNews]=useState('')

   const fetchData=async()=>{
     let res= await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0b0fa44677ad4d4db4ac7e8edf0cb242')
     let data= await res.json();
     setNews(data.articles);
  }
    console.log(news);
  useEffect(()=>{
    fetchData()
  },[])
  const dynamicStyle = props.tootleState ? styles.cardGrid:styles.card ;

    return(
        <>
                <div className={styles.container}>
              <div className={`${styles.mainDiv}`}>
        {
            news && news.map((item,index)=>{
              return(
                  <div className={`${styles.card} ${dynamicStyle}`}>
                    <img  src={item.urlToImage} className="card-img-top" alt="..."/>
                    <div className={styles.cardBody}>
                      <h5 className="card-title">{item.author}</h5>
                      <p className="card-text">{item.title}</p>
                      <a href={item.url} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                  </div>
              
              )

            })
        }
</div>
       
    </div>
        
        </>

    )

}

export default News;