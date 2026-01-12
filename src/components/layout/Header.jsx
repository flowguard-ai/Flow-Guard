import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => (
    <header className="header glass">
        <div className="container header-content">
            <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                <Shield size={24} className="logo-icon" />
                <span>순공시간</span>
            </div>
            <nav className="desktop-nav">
                <a href="#pricing">가격 및 플랜</a>
                <a href="#footer" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
                }}>사업자 정보</a>
            </nav>
            <button className="cta-button" onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}>내 아이 집중력 MRI 촬영하기</button>
        </div>
    </header>
);

export default Header;
