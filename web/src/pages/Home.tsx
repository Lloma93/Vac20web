import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/sidebar-home.css';
import '../styles/pages/home.css';
import ListApprove from './ListApprove';
import { useHistory } from "react-router-dom";



function Home() {

    const handleLogout = () => {
        localStorage.removeItem('@token')
    }

    return (
        // <h1>home</h1>
        <div id="page-map">
            <aside>
                <header>
                
                <h2> Validação do seu estabelecimento.</h2>
                <p>Torne a sua cidade mais segura.</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>Capital</span>
                </footer>
            </aside>

            <div>
                <ListApprove />
            </div>

            <Link to="/home" className="approve">
                <span className="material-icons md-32">check_circle</span>
            </Link>
            <Link to="" className="logout" onClick={handleLogout}>
                <span className="material-icons md-32">logout</span>
            </Link>
        </div>
    );
}

export default Home;