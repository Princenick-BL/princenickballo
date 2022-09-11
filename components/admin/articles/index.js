import React, { Fragment, useEffect, useState } from 'react'
import { List, Avatar, Space } from 'antd';
import { getArticles } from '../../../services/articles-editor';
import styles from './index.module.scss'
import AddNew from './AddNew';



export default function Articles() {

  const [articles,setArticles] = useState([])

  useEffect(()=>{
    (async ()=>{
      const res = await getArticles();
      setArticles(res.data)
    })();
  },['init'])

  return (
    <Fragment>
      <div className={styles.top}>
        <h4>Articles</h4>
        <AddNew/>
      </div>
      <List
        className={styles.list}
        itemLayout="vertical"
        size="small "
        
        pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 5,
            position : "both"
        }}
        dataSource={articles}
        
        renderItem={(item) => (
            
            <div className={styles.renderItem}>
                <div className={styles.item}>
                    <img
                        width={100}
                        style={{borderRadius:"5px",maxHeight : "68px"}}
                        alt="logo"
                        src={item?.poster}
                    />  
                    <div className={styles.desc}>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                    </div>

                </div>
                <div className={styles.button}><a target={"_blank"} rel="noreferrer" href={`/admin/editor?key=`+item?._id}>
                Edit
                </a></div>
            </div>
            
        )}
      />
      {/* <br></br>
      <div className={styles.top}>
        <h1>Articles</h1>
        <AddNew/>
      </div> */}
    </Fragment>
  )
}

