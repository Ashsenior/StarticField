import React from 'react';
import {render} from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from './Home/SF_PAGES/Home_page'
import {EventsPage} from './Home/SF_PAGES/Events_page'
import {About} from './Home/SF_PAGES/About'
import {Contact} from './Home/SF_PAGES/Contact'
import {Bg_page} from './Home/SF_PAGES/Bg_page'
import {Footer} from './Home/SF_PAGES/Footer'
import {News} from './Home/SF_PAGES/News'
import {Profile} from './Home/SF_PAGES/Profile'

export default function App() {
    return (
        <Router>
            <Bg_page />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/events' element={<EventsPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/news' element={<News />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer />
        </Router>
    );
};

const appDiv = document.getElementById("app");
render(<App />, appDiv);