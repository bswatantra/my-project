import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About';
import Home from './Home';


function Header() {
    return (
        <>
            <Router>
                <nav className="bg-gray-100">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex justify-between">
                            <div className="flex space-x-4">
                                <div>
                                    <Link to="" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                        <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        <span className="font-bold">Swatantra</span>
                                    </Link>
                                </div>

                                <div className="hidden md:flex items-center space-x-1">
                                    <Link to="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
                                    <Link to="/about" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</Link>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center space-x-1">
                                <a href="" className="py-5 px-3">Login</a>
                                <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                            </div>

                            <div className="md:hidden flex items-center">
                                <button className="mobile-menu-button">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Header
