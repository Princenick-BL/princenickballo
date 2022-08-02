import React, { Component } from 'react'
import style from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default class header extends Component {
    render() {
        return (
            <div className={style.headerContainer}>
                <div className={style.headTop}>
                    <div className={style.logo}>
                        Prince Nick BALLO
                    </div>
                </div>

                <div className={style.header}>
                    <nav className="nav">
                        <ul>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="/"><a>Home</a></Link></li>
                        </ul>
                    </nav>

                    <div className={style.translucide}>
                        <div className={style.discoverText}>Découvrez mes compétences de A à Z !!!</div>
                        <div className={style.script}>
                            <div className={style}></div>
                            {"<"}<div>script</div> {">"}
                            <p>Developpeur web full stack</p>
                            {"</"}<div>script</div> {">"}
                        </div>

                    </div>
                    
                </div>
            </div>

        )
    }
}
