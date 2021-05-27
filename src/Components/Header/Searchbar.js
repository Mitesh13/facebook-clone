import FacebookIcon from '@material-ui/icons/Facebook';

const Searchbar = () => {
    return (
        <div className="searchbar">
            <FacebookIcon style={{fontSize:50}}/>
            <input type="text" placeholder="Search Facebook"/>
        </div>
    )
}

export default Searchbar
