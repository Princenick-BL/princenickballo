import React, { Component } from 'react'
import Link from "next/link"

export default class caroussel extends Component {
    render() {
        return (
            
			<div className="untitled">
				
				{/* <div className="info">Ce site web à été  réalisé par mes soins avec Next.js</div> */}

				<div className="untitled__slides">
					<div className="untitled__slide">
						<div className="untitled__slideBg"></div>
						<div className="untitled__slideContent">
							<span>ELÈVE INGENIEUR EN INFORMATIQUE </span> 
							<div>
								<span>&#9733;</span>
								<span>&#9733;</span>
								<span>&#9733;</span>
								<span>&#9733;</span>
								<span>&#9733;</span>
							</div>
							<Link href="#ancre2">
								<a>
									<div className="arrow"></div>						
								</a>
							</Link>
						</div>
					</div>
					<div className="untitled__slide">
						<div className="untitled__slideBg"></div>
						<div className="untitled__slideContent">
							
							<span>CRÉATION DE SITES WEB</span> 
							<p>Sites vitrines, logiciels WEB, sites évennementiels</p>
							<Link href="#ancre2">
								<a>
									<div className="arrow"></div>						
								</a>
							</Link>

						</div>
					</div>
					<div className="untitled__slide">
						<div className="untitled__slideBg"></div>
						<div className="untitled__slideContent">
							<span>ENSEMBLE, DONNONS VIE À VOS RÊVES</span> 
							<div className="emojis"> 😉 😉 😉</div>
							<Link href="#ancre2">
								<a>
									<div className="arrow"></div>						
								</a>
							</Link>	
						</div>
					</div>
				
				</div>
				<div className="untitled__shutters"></div>
			</div>
        )
    }
}
