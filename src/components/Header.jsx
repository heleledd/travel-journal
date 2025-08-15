import globeIcon from '../assets/globe_icon_white.svg'

export default function Header() {
    return (
        <header>
            <img src={globeIcon} className="header-icon" alt="Globe Icon" />
            <span>my travel journal.</span>
        </header>
    )
}