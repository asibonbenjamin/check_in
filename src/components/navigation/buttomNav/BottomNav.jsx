import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { FaHome, FaDoorOpen, FaChartLine, FaUserCog, FaSignInAlt } from 'react-icons/fa';
import './BottomNav.scss';

const BottomNav = () => {
    // const { user } = useAuth();

    const user = true; // Assuming useAuth returns the user object directly

    return (
        <nav className="bottom-nav">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `bottom-nav__item ${isActive ? 'active' : ''}`
                }
                end
            >
                <FaHome className="bottom-nav__icon" />
                <span>Home</span>
            </NavLink>

            <NavLink
                to="/rooms"
                className={({ isActive }) =>
                    `bottom-nav__item ${isActive ? 'active' : ''}`
                }
            >
                <FaDoorOpen className="bottom-nav__icon" />
                <span>Rooms</span>
            </NavLink>

            {user ? (
                <>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `bottom-nav__item ${isActive ? 'active' : ''}`
                        }
                    >
                        <FaChartLine className="bottom-nav__icon" />
                        <span>Dashboard</span>
                    </NavLink>

                    {user.role === 'facility_manager' && (
                        <NavLink
                            to="/admin"
                            className={({ isActive }) =>
                                `bottom-nav__item ${isActive ? 'active' : ''}`
                            }
                        >
                            <FaUserCog className="bottom-nav__icon" />
                            <span>Admin</span>
                        </NavLink>
                    )}
                </>
            ) : (
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        `bottom-nav__item ${isActive ? 'active' : ''}`
                    }
                >
                    <FaSignInAlt className="bottom-nav__icon" />
                    <span>Login</span>
                </NavLink>
            )}
        </nav>
    );
};

export default BottomNav;