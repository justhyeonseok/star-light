import { Link } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>←</button>
            <nav>
                <ul>
                    <li><Link to="/information" onClick={onClose}>공연정보</Link></li>
                    <li><Link to="/member" onClick={onClose}>별 소개</Link></li>
                    <li><Link to="/PlayList" onClick={onClose}>플레이리스트</Link></li>
                    <li><Link to="/board" onClick={onClose}>빛나는 한마디</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
