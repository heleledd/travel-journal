import markerIcon from '../assets/marker.svg'

export default function Entry(props) {
    return (
        <div className='entry'>
            <div className="main-image-container">
                <img className='main-image' src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="entry-content">
                <div className="location-info">
                    <img src={markerIcon} className="marker-icon" alt="Marker Icon" />
                    <span className='entry-country'>{props.country}</span>
                    <a className='entry-map-link' href={props.googleMapLink}>View on Google Maps</a>
                </div>
                <p className='entry-title'>{props.title}</p>
                <p className='entry-date'>{props.dates}</p>
                <p className='entry-description'>{props.text}</p>
            </div>
        </div>
    )
}