import Sidebar from './Sidebar'
import Feed from './Feed'
import Contacts from './Contacts'
import './Body.css'

const Body = ({user}) => {
    return (
        <div className="body-container">
            <Sidebar user={user}/>
            <Feed user={user}/>
            <Contacts />
        </div>
    )
}

export default Body
