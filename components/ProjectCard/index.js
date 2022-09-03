import React,{useState} from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

export default function ProjectCard({data,odd=false}) {

    const [size,setSize] = useState({})

    return (
        <div className={styles.card + " "+ (odd? styles.odd : "")}>
            <Image
                onLoad={({ target }) => {
                    const { naturalWidth, naturalHeight } = target ;
                    setSize({
                        width:naturalWidth,
                        height:naturalHeight
                    })
                }}
                width={size?.width || "1280"}
                height={size?.height || "853"}
                layout="responsive"
                src={data?.url}
            />
            <div className={styles.elmt}>
                <div className={styles.banner}>
                </div>
                <div className={styles.cnt}> 
                    <p>{data?.title}</p>
                
                    <p>
                        {data?.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
