import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    
        return () => {
            clearTimeout(timeout);
        };
        }, []); 

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_8x6myfu', 'template_ddmjtbs', refForm.current, 'NmYrJCkJn_51Qff7n')
          .then(
            () => {
                alert('Email sent')
                window.location.reload(false)
            },
            () => {
                alert('Error sending email, try again')
            }
          )   
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e',]}
                            namex={15}
                        />
                    </h1>
                    <p>
                        I am interested in remote jobs - especially ambitious or large projects.
                        If you have any questions, feel free to contact me.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" placeholder='Name' name="from_name" required  />
                                </li>
                                <li className='half'>
                                    <input type="email" name="from_email" placeholder='Email' required />
                                </li>
                                <li >
                                    <input placeholder='Subject' type='text' name='Subject' required />
                                </li>
                                <li >
                                    <textarea placeholder='Message' name='Message' required ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    David Ordoñez
                    <br />
                    Colombia,
                    <span>david.camilo.ordonez@correounivalle.edu.co</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[3.3784400,-76.5272000]} zoom={12}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[3.3784400,-76.5272000]}>
                            <Popup> David lives here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact