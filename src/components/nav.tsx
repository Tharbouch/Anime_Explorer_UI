import { useEffect, useState } from 'react';
import { FaSistrix, FaUserCircle } from 'react-icons/fa'
const NavBar = () => {

    const [isTransparent, setIsTransparent] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        setIsTransparent(position < window.innerHeight * 0.1);
    };
    return (
        <header className={isTransparent ? 'top-page' : 'active'}>
            <div className='nav container'>
                {/* logo */}
                <a href="/Anime_Explorer_UI" className='logo'>
                    <h1>Anime</h1>
                    <h1>List</h1>
                </a>

                {/* search box */}
                <div className='search-box'>
                    <input type="search" name="" id="search-input" placeholder="Search movie" />
                    <FaSistrix className='search-icon' />

                </div>
                {/* account  */}
                <div className='account-icon'>
                    <FaUserCircle />
                </div>
            </div>
        </header>


    );
}

export default NavBar;