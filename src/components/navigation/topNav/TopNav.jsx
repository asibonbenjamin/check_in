import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../../../hooks/useAuth';
import './TopNav.scss';

const TopNav = () => {
    // const { user, logout } = useAuth();
    const user = true;

    return (
        <nav className="top-nav">
            <div className="top-nav__brand">
                <Link to="/">CheckIn</Link>
            </div>

            <div className="top-nav__links">
                <Link to="/" className="top-nav__link">Home</Link>
                <Link to="/rooms" className="top-nav__link">Rooms</Link>

                {user ? (
                    <>
                        <Link to="/dashboard" className="top-nav__link">Dashboard</Link>
                        {user.role === 'facility_manager' && (
                            <Link to="/admin" className="top-nav__link">Admin</Link>
                        )}
                        <button
                            onClick={logout}
                            className="top-nav__button"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="top-nav__button">Login</Link>
                        <Link to="/register" className="top-nav__button--primary">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default TopNav;