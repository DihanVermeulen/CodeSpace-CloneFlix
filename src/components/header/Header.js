import './Header.css';
import shortened_logo from '../../assets/images/shortened_logo.svg';
import longer_logo from '../../assets/images/longer_logo.svg';
import profile_photo from '../../assets/images/profile_photo.png';
import { useEffect } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownButton } from '../Dropdown/DropdownButton/DropdownButton';

const Header = () => {
    let logo = shortened_logo;

    const handleResize = () => {
        if (window.innerWidth <= 600) {
            document.querySelector('.main-header--top_logo').setAttribute('src', shortened_logo);
        } else {
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
                <div className='flex flex-column'>
                    <div className='flex align-center'>
                        <img className='main-header--top_profile' src={profile_photo} alt='profile'></img>
                        <DropdownButton>
                            <Dropdown></Dropdown>
                        </DropdownButton>
                    </div>
                </div>
            </section>
            <section className='main-header--bottom'>
                <div className='main-header--bottom_content'>
                    <h2>Movie Header</h2>
                    <div>
                        <button className='cloneflix-button_primary'>See trailer</button>
                        <button className='cloneflix-button_secondary'>+ Watch List</button>
                    </div>
                    <div>
                        <button className='cloneflix-button_tertiary'>My List</button>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header