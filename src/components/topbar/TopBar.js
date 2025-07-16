import './TopBar.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountMenu from './topBarBtn/TopBarBtn';

export default function TopBar() {
  return (
      <div className="topBar">
        <div className="topBarWrapper">

            <div className="logoContainer">
                <img src="images/logo.svg" alt="logoImg" className="logoImg" />
            </div>

            <div className="topBarMenuWrapper">

                <div className="topBarLeftWrapper">
                    <button className="sideBarTogglerBtn">
                        <MenuIcon className="searchIcon" />
                    </button>
                    <div className="searchContainer">
                        <SearchIcon className="searchIcon" fontSize='small' sx={{fontSize: "18px"}}/>
                        <input type="text" className="searchInputElem" placeholder='Search Items' />
                    </div>
                </div>


                <ul className="topBarList">

                    <li className="topBarListItem">
                        <div className="userInfoContainer">
                            <img src="images/profile.jpg" alt="userImg" className="userImg" />
                            <p className="userName">alireza abarian</p>
                        </div>
                    </li>

                    <AccountMenu icon={<MailOutlineIcon />} nameIcon="mail" />
                    <AccountMenu icon={<NotificationsNoneIcon />} nameIcon="message" />
                    <AccountMenu icon={<LogoutIcon />} />

                    {/* <li className="topBarListItem">
                        <div className="messageContainer">
                            <MailOutlineIcon className="messageIcon" fontSize='small' />
                            <div className="mailNotification"></div>
                        </div>
                    </li>
                    <li className="topBarListItem">
                        <div className="messageContainer">
                            <NotificationsNoneIcon className="messageIcon" fontSize='small' />
                            <div className="messageNotification"></div>
                        </div>
                    </li>
                    <li className="topBarListItem">
                        <div className="messageContainer">
                            <LogoutIcon className="logoutIcon" fontSize='small' />
                        </div>
                    </li>
                    <li className="topBarListItem">
                        <div className="messageContainer">
                            <LogoutIcon className="logoutIcon" fontSize='small' />
                            <AccountMenu className="logoutIcon" fontSize='small' />
                        </div>
                    </li> */}
                </ul>

            </div>

        </div>
      </div>
  )
}
