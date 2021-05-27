import Searchbar from './Searchbar'
import Menubar from './Menubar'
import Options from './Options'
import './header.css'

const Header = ({user}) => {
    return (
        <div className="header">
            <Searchbar />
            <Menubar />
            <Options user={user}/>
        </div>
    )
}

export default Header
