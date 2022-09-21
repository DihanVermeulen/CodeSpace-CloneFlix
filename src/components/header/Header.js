import './Header.css';
import shortened_logo from '../../shortened_logo.svg';
import profile1 from '../../assets/images/profile1.png';

const Header = () => {
    return (
        <header className='main-header'>
            <section className='main-header--top'>
                <img className='main-header--top_logo' src={shortened_logo} alt='logo'></img>
                <img className='main-header--top_profile' src={profile1} alt='profile'></img>
            </section>
            <section className='main-header--bottom'>
                <div className='main-header--bottom_content'>
                    <h2>Movie Header</h2>
                </div>
            </section>
        </header>
    )
}

export default Header