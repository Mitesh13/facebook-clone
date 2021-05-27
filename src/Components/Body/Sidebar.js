import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BugReportIcon from '@material-ui/icons/BugReport';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import ReplayIcon from '@material-ui/icons/Replay';
import FlagIcon from '@material-ui/icons/Flag';

const Sidebar = ({user}) => {
    return (
        <div className="sidebar">
            <Personalise user={user}/>
            <hr />
            <Shortcuts />
            
        </div>
    )
}


export const Shortcuts = () => {
    return (
        <div className="shortcuts">
            <h3>Your Shortcuts</h3>
            <ul>
                <li>
                    <FlagIcon />
                    <span>My Page</span>
                </li>
                <li>
                    <PeopleIcon />
                    <span>My Following page</span>
                </li>
                <li>
                    <PeopleIcon />
                    <span>My Following page</span>
                </li>
                <li>
                    <PeopleIcon />
                    <span>My Following page</span>
                </li>
            </ul>
        </div>
    )
}


const Personalise = ({user}) => {
    
    return (
        
        <ul>
            <li>
                {/* <AccountCircleIcon /> */}
                <img src={user.photoURL} alt="User" height="30" className="user-img"/>

                <span>{user.displayName}</span>
            </li>
            <li>
                <BugReportIcon />
                <span>Covid-19 Information Center</span>
            </li>
            <li>
                <PeopleIcon />
                <span>Friends</span>
            </li>
            <li>
                <PeopleAltIcon />
                <span>Groups</span>
            </li>
            <li>
                <StoreIcon />
                <span>Marketplace</span>
            </li>
            <li>
                <SubscriptionsIcon />
                <span>Watch</span>
            </li>
            <li>
                <EventIcon />
                <span>Events</span>
            </li>
            <li>
                <ReplayIcon/>
                <span>Memory</span>
            </li>
            {/* <li>
                <span></span>
            </li> */}
        </ul>
    )
}

export default Sidebar
