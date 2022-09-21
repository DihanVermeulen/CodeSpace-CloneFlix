import './Header.css';
import shortened_logo from '../../assets/images/shortened_logo.svg';
import longer_logo from '../../assets/images/longer_logo.svg';
import profile1 from '../../assets/images/profile1.png';
import { useEffect, useState } from 'react';

const Header = () => {
    let logo = shortened_logo;
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth <= 600) {
            setIsMobile(true)
            document.querySelector('.main-header--top_logo').setAttribute('src', shortened_logo);
        } else {
            setIsMobile(false)
            document.querySelector('.main-header--top_logo').setAttribute('src', longer_logo);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    if (window.innerWidth <= 600) {
        logo = shortened_logo;
    }
    else {
        logo = longer_logo
    }

    return (
        <header className='main-header'>
            <section className='main-header--top'>
                <img className='main-header--top_logo' src={logo} alt='logo'></img>

                <img className='main-header--top_profile' src={profile1} alt='profile'></img>
            </section>
            <section className='main-header--bottom'>
                <div className='main-header--bottom_content'>
                    <h2>Movie Header</h2>
                    <div>
                        <button className='cloneflix-button_primary'>See trailer</button>
                        <button className='cloneflix-button_secondary'>+ Watch List</button>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header