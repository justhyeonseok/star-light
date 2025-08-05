import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Information from './pages/Information';
import MemberLine from './pages/MemberLine';
import PlayList from './pages/PlayList';
import SmallTalk from './pages/SmallTalk';
import Sidebar from './components/Sidebar';
import './App.css';
import HomeButton from "./components/HomeButton.tsx";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Router>
            <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            <button className="menu-toggle" onClick={() => setMenuOpen(true)}>☰</button>
            <HomeButton />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/information" element={<Information />} />
                <Route path="/member" element={<MemberLine />} />
                <Route path="/PlayList" element={<PlayList />} />
                <Route path="/board" element={<SmallTalk />} />
            </Routes>
        </Router>
    );
}

export default App;
