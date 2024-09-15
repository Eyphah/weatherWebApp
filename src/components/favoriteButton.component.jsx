import '../assets/style/favorite.style.css'
import starOnImg from '../assets/images/star_on.png'
import starOffImg from '../assets/images/star_off.png'

const FavoriteButton = ({setFavorite, favorite, current}) => {

    const starImg = (current === favorite) ? starOnImg : starOffImg;

    return (
        <img src={starImg} alt="Favorite" onClick={() => setFavorite(current)}/>
    );
}
export default FavoriteButton;