import React from 'react'
import styles from '../../styles/index.module.scss'
import HeadCustom from '../../components/HeadCustom'
import Link from 'next/link'
import Image from 'next/image'

export default function index() {
    return (
        <>
            <HeadCustom />

            <div className={styles.homeV2}>
                <div className={styles.logo}>
                    <Link href={"/"}>Prince ING</Link>
                </div>
                <div className={styles.creations}>
                    <div className={styles.grid}>
                        <Link href={"/api/louvre-museum-gallery"}>
                            <div className={styles.creation}>

                                <div
                                    className={styles.icon}
                                >
                                    <Image
                                        src={"/images/paris-louvre.png"}
                                        width={400}
                                        height={400}
                                        alt='Louvre museeum'
                                    />
                                </div> 
                                <div className={styles.bubble}>

                                </div>
                                <div className={styles.iconPlaceHolder}>

                                </div> 
                                I present 10 of the most famous works exhibited at the Louvre Museum in an original visual format. These are the web stories →                                
                            </div>
                        </Link>
                        {/* <Link href={"/web-story"}>
                            <div className={styles.creation}>
                                <div
                                    className={styles.icon}
                                >
                                    <Image
                                        src={"/images/paris-louvre.png"}
                                        width={400}
                                        height={400}
                                        alt='Louvre museeum'
                                    />
                                </div>
                                <div className={styles.bubble}>

                                </div>
                                <div className={styles.desc}>
                                    <p>I present 10 of the most famous works exhibited at the Louvre Museum in an original visual format. These are the web stories →</p>
                                </div>
                                
                            </div>
                        </Link> */}
                    </div>
                </div>

                
            </div>
        </>
    )
}
