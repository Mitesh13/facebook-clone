
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Options = ({user}) => {
    return (
        <ul className="options">
            <li style={{display:'flex',alignItems:'center'}}>
            {/* <AccountCircleIcon style={{fontSize: 30}}/>  */}
            <img src={user.photoURL} alt="post" height="30" className="user-img"/>
            <span>{user.displayName.split(" ")[0]}</span>
            </li>
            <li>
            <AddIcon style={{fontSize: 20}}/>

            </li>
            <li>

            <MessageIcon style={{fontSize: 20}}/>
            </li>
            <li>

            <NotificationsIcon style={{fontSize: 20}}/>
            </li>
            <li>

            <ArrowDropDownIcon style={{fontSize: 20}}/>
            </li>
        </ul>
    )
}

export default Options
