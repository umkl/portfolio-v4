'use client';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router';
import { text, curve, translate } from './anim';

const routes = {
    "/": "Welcome",
    "/blog": "Blog",
    "/contact": "Contact",
	"/projects": "Projects",
	"/services": "Services",
	"/services/frontend-dev": "Frontend Development"
}

const anim = (variants) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    }
}

export default function Curve({children}) {
    const router = useRouter();
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    })

    useEffect( () => {
        function resize(){
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])
    
    return (
    <div className='page curve z-50 '  >
       <div style={{opacity: dimensions.width == null ? 1 : 0}} className='background'/>
       <motion.p className='route font-bold font-clash text-[4rem] uppercase text-[#C2CAD1] drop-shadow-[0_0_0.3rem_#ffffff70]' {...anim(text)}>
            {routes[router.route]}
        </motion.p>
       {dimensions.width != null && <SVG {...dimensions}/>}
        {
            children
        }
    </div>
    )
}

const SVG = ({height, width}) => {

    const initialPath = `
        M0 300 
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    )
}