import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import styles from './index.module.scss'

export default function Pagination(props) {

    const [current,setCurrent] = useState(1)
    const [lenght,setLength] = useState(Array.from(Array(10).keys()))

    useEffect(()=>{
        const query = new URLSearchParams(window.location.search);
        const token = query.get('page')
        setCurrent(token||1)        
    },[])
    
    return (
        <div className={styles.container}>
            <Link  href={`/read/article/?page=${current-1}`}>
                <a className={styles.button}>{"PREV"}</a>
            </Link>
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
            <Link  href={`/read/article/?page=${current+1}`}>
                <a className={styles.button}>{"NEXT"}</a>
            </Link>
        </div>
    )
}
