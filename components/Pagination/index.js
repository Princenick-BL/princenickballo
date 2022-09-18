import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import styles from './index.module.scss'
import { count } from '../../services/articles'
import axios from 'axios'

export default function Pagination({type=1}) {

    const [current,setCurrent] = useState(1)
    const [lenght,setLength] = useState([])

    useEffect(()=>{
        (async()=>{
            const query = new URLSearchParams(window.location.search);
            const token = query.get('page')
            setCurrent(parseInt(token)||1)        
            const countRes = await count()
            var size = parseInt(token)==1 ? ~~(countRes+6/10) : ~~(countRes/10)
           
            setLength(Array.from(Array(size||1).keys()))
            
        })();
    },[])
    
    return (
        <div className={styles.container}>
            {current-1 > 0 && (
                <Link  href={`/read/article/?page=${current-1}`}>
                    <a className={styles.button}>{"PREV"}</a>
                </Link>
            )}
            <div className={styles.pagination}>
                {lenght.map(val=>{
                    
                    if((val+1 === 1) || (val+1 === current) || (val+1 === (current + 1)) || (val+1 === lenght.length)){
                        return(
                            <Link key={val}  href={val+1==1 ?"/read":`/read/article/?page=${val+1}`}>
                                <div className={styles.nextLink + " "+ (val+1==current?styles.current:"")}>{val+1}</div>
                            </Link>
                        )
                        
                    }else{
                        return <div key={val}>.</div>

                    }
                })}
            </div>
            {lenght.length > 1 && (
                <Link  href={`/read/article/?page=${current+1}`}>
                    <a className={styles.button}>{"NEXT"}</a>
                </Link>
            )}
            
        </div>
    )
}
