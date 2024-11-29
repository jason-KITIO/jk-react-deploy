import './profileCard.css'
import PropTypes from 'prop-types'

function ProfileCard(props) {
    return (
        <div className='profile-card '>
            <img src={props.imageUrl} />
            <h2>{props.titre}</h2>
            <p>{props.texte}</p>
        </div>
    )
}

ProfileCard.propType = {
    imageUrl: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    texte: PropTypes.string.isRequired
}

export default ProfileCard