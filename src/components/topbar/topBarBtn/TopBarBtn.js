import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import './TopBarBtn.css';


export default function AccountMenu(props) {    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [emailData , setEmailData] = React.useState([]);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    const fetchEmail = async () => {

      try {
          const response = await fetch("https://68758471814c0dfa6538ba46.mockapi.io/panel/email");
          const data = await response.json();
          setEmailData(data);
      } catch (error) {
        console.error("Error fetching email data:", error);
      }
    }
    fetchEmail()
  }, [])

  console.log(emailData);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
        <li className="topBarListItem">
            <div className="messageContainer">
                {React.cloneElement(props.icon, {
                    className: 'logoutIcon',
                    onClick: handleClick,
                    fontSize: 'small',
                    'aria-controls': open ? 'account-menu' : undefined,
                    'aria-haspopup': 'true',
                    'aria-expanded': open ? 'true' : undefined,
                })}

                {props.nameIcon ? props.nameIcon === 'mail' ? <div className="mailNotification"></div> : <div className="messageNotification"></div> : ''}
            </div>
        </li>


        {
            props.nameIcon

            &&

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                paper: {
                    elevation: 0,
                    sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Typography>Messages</Typography>
                <Divider />

                {
                    emailData.length > 0
                     ?
                    emailData.slice(0, 3).map(email => {
                        return (
                            <React.Fragment key={email.id}>
                                <MenuItem onClick={handleClose} className='messageListItem'>
                                    <img src={email.avatar} alt="profile" />
                                    <div>
                                        <h6>{email.name} send you a message</h6>
                                        <p>{new Date(email.createdAt).toLocaleTimeString()}</p>
                                    </div>
                                </MenuItem>
                                <Divider />
                            </React.Fragment>
                        );
                    })
                     :
                    <Typography sx={{ px: 2, py: 1, textAlign: 'center' }}>No messages available</Typography>
                }


                {
                    emailData.filter(mail => {return mail.isRead})
                }

            </Menu>
        }
    </React.Fragment>
  );
}











// import * as React from 'react';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import './TopBarBtn.css';

// export default function AccountMenu(props) {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [emailData, setEmailData] = React.useState([]);
//   const open = Boolean(anchorEl);

//   // دریافت داده‌ها از API با useEffect
//   React.useEffect(() => {
//     const fetchEmails = async () => {
//       try {
//         const response = await fetch('https://68758471814c0dfa6538ba46.mockapi.io/panel/email');
//         const data = await response.json();
//         setEmailData(data);
//       } catch (error) {
//         console.error('خطا در دریافت ایمیل‌ها:', error);
//       }
//     };
//     fetchEmails();
//   }, []);

//   // محاسبه زمان نسبی (مثل "1 دقیقه پیش")
//   const getRelativeTime = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffInSeconds = Math.floor((now - date) / 1000);

//     if (diffInSeconds < 60) return `${diffInSeconds} ثانیه پیش`;
//     const diffInMinutes = Math.floor(diffInSeconds / 60);
//     if (diffInMinutes < 60) return `${diffInMinutes} دقیقه پیش`;
//     const diffInHours = Math.floor(diffInMinutes / 60);
//     if (diffInHours < 24) return `${diffInHours} ساعت پیش`;
//     return `${Math.floor(diffInHours / 24)} روز پیش`;
//   };

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <React.Fragment>
//       <li className="topBarListItem">
//         <div className="messageContainer">
//           {React.cloneElement(props.icon, {
//             className: 'logoutIcon',
//             onClick: handleClick,
//             fontSize: 'small',
//             'aria-controls': open ? 'account-menu' : undefined,
//             'aria-haspopup': 'true',
//             'aria-expanded': open ? 'true' : undefined,
//           })}
//           {props.nameIcon ? (
//             props.nameIcon === 'mail' ? (
//               <div className="mailNotification"></div>
//             ) : (
//               <div className="messageNotification"></div>
//             )
//           ) : null}
//         </div>
//       </li>

//       {props.nameIcon && (
//         <Menu
//           anchorEl={anchorEl}
//           id="account-menu"
//           open={open}
//           onClose={handleClose}
//           onClick={handleClose}
//           slotProps={{
//             paper: {
//               elevation: 0,
//               sx: {
//                 overflow: 'visible',
//                 filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                 mt: 1.5,
//                 '& .MuiAvatar-root': {
//                   width: 32,
//                   height: 32,
//                   ml: -0.5,
//                   mr: 1,
//                 },
//                 '&::before': {
//                   content: '""',
//                   display: 'block',
//                   position: 'absolute',
//                   top: 0,
//                   right: 14,
//                   width: 10,
//                   height: 10,
//                   bgcolor: 'background.paper',
//                   transform: 'translateY(-50%) rotate(45deg)',
//                   zIndex: 0,
//                 },
//               },
//             },
//           }}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//         >
//           <Typography sx={{ px: 2, py: 1 }}>پیام‌ها</Typography>
//           <Divider />
//           {emailData.length > 0 ? (
//             emailData.slice(0, 3).map((email) => (
//               <React.Fragment key={email.id}>
//                 <MenuItem onClick={handleClose} className="messageListItem">
//                   <img src={email.avatar} alt="profile" width="32" height="32" />
//                   <div>
//                     <h6>{email.name} send you a message</h6>
//                     <p>{getRelativeTime(email.createdAt)}</p>
//                   </div>
//                 </MenuItem>
//                 <Divider />
//               </React.Fragment>
//             ))
//           ) : (
//             <Typography sx={{ px: 2, py: 1, textAlign: 'center' }}>
//               هیچ پیامی وجود ندارد
//             </Typography>
//           )}
//           <Typography align="center" padding={2}>
//             {emailData.length} پیام جدید
//           </Typography>
//         </Menu>
//       )}
//     </React.Fragment>
//   );
// }