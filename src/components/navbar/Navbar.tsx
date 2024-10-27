import { NavLink } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'

import React from 'react';

interface NavbarProps {
    onAddproduct: (product: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAddproduct  }) => {
    return (
        <nav className="bg-white sticky top-0 z-20">
            <div className="flex justify-between items-center container mx-auto px-5 py-4">
                <div className="flex items-center justify-center gap-1">
                    <NavLink to="/main" className={({ isActive, isPending }) =>
                        `${isPending ? "text-rose-500" : isActive ? "text-blue-500" : ""}`
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 stroke-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </NavLink>
                    <span>Tienda</span>
                    <SearchBar onAddproduct={onAddproduct } />
                </div>

                <ul className=" flex gap-5 items-center">
                    <li>
                        <NavLink to="#">
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            Pagos
                        </NavLink>
                    </li>
                    <li className="relative overflow-hidden">
                        <span className="absolute rounded-full size-2 bg-red-500 right-0 z-10"></span>
                        <NavLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/main/account">
                            <img className="object-cover size-8 rounded-full" src="https://images.pexels.com/photos/27872750/pexels-photo-27872750/free-photo-of-koln-pexels-meetup-model-phibiduboi-on-instagram.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar