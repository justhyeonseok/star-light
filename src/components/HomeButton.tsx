

import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/')}
            style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
            }}
            aria-label="Home"
        >
            홈
        </button>
    );
}

