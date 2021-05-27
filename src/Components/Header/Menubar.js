import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const Menubar = () => {
    return (
        <ul className="menubar">
            <li className="active">
            <HomeIcon style={{fontSize:30}} />
            </li>
            <li>
            <SubscriptionsIcon style={{fontSize:30}}/>

            </li>
            <li>
            <StoreIcon style={{fontSize:30}}/>

            </li>
            <li>
            <PeopleAltIcon style={{fontSize:30}}/>

            </li>
            <li>
            <SportsEsportsIcon style={{fontSize:30}}/>

            </li>
        </ul>
    )
}

export default Menubar
