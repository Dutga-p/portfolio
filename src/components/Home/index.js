import { Link } from'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home =()=>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray  = ['D','a','v','i','d','','C','a','m','i','l','o','','O','r','d','o','ñ','e','z','','M','a','r','i','n']
    const jobArray=[
        's','o','f','t','w','a','r','e','',
        'd','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => {
            clearTimeout(timeout);
        };
        }, []);    
    
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className={`${letterClass} _14`}> </span>
                    <AnimatedLetters  letterClass={letterClass}
                    strArray={nameArray}
                    idx={35}/>
                    <br/>
                    <AnimatedLetters  letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                    </h1>
                    <h2> Frontend Developer </h2>
                    <Link to="/CONTACT" className='flat-button'>Contact me</Link>
                </div>
                <Logo/>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home