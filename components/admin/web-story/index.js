import React, { Fragment, useEffect, useState } from 'react'
import { List, Avatar, Space } from 'antd';
import styles from './index.module.scss'
import AddNew from './AddNew';
import { getStories } from '../../../services/stories-editor';



export default function WebStory() {

  const [stories,setStories] = useState([])

  useEffect(()=>{
    (async ()=>{
      const res = await getStories();
      setStories(res.data)
    })();
  },['init'])

  return (
    <Fragment>
      <div className={styles.top}>
        <h4>Web Stories</h4>
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
        dataSource={stories}
        
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
                <div className={styles.button}><a target={"_blank"} rel="noreferrer" href={`/admin/story-editor?key=`+item?._id}>
                Edit
                </a></div>
            </div>
            
        )}
      />
      {/* <br></br>
      <div className={styles.top}>
        <h1>Stories</h1>
        <AddNew/>
      </div> */}
    </Fragment>
  )
}

