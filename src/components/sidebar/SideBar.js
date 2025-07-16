import './SideBar.css';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactsIcon from '@mui/icons-material/Contacts';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';

// const menuItems = [
//   {
//     id: 'dashboardMenu',
//     title: 'Dashboard menu',
//     icon: <GpsFixedIcon className='sideBarTitleIcon' fontSize='small' />,
//     subItems: [
//       { name: 'Profile', route: '/dashboard/profile' },
//       { name: 'Account', route: '/dashboard/account' },
//       { name: 'Logout', route: '/logout' },
//     ]
//   },
//   {
//     id: 'userMenu1',
//     title: 'User Settings',
//     icon: <FormatListBulletedIcon className='sideBarTitleIcon' fontSize='small' />,
//     subItems: [
//       { name: 'Profile', route: '/user/profile' },
//       { name: 'Logout', route: '/logout' },
//     ]
//   },
//   {
//     id: 'userMenu2',
//     title: 'Calendar',
//     icon: <CalendarMonthIcon className='sideBarTitleIcon' fontSize='small' />,
//     subItems: [
//       { name: 'Logout', route: '/calendar/logout' },
//     ]
//   },
//   {
//     id: 'userMenu3',
//     title: 'Contacts',
//     icon: <ContactsIcon className='sideBarTitleIcon' fontSize='small' />,
//     subItems: [
//       { name: 'Profile', route: '/contacts/profile' },
//       { name: 'Account', route: '/contacts/account' },
//       { name: 'Logout', route: '/contacts/logout' },
//     ]
//   },
//   {
//     id: 'userMenu4',
//     title: 'Charts',
//     icon: <BarChartIcon className='sideBarTitleIcon' fontSize='small' />,
//     subItems: [
//       { name: 'Account', route: '/charts/account' },
//       { name: 'Logout', route: '/charts/logout' },
//     ]
//   },
// ];


const menuItems = [
  {
    id: 'products',
    title: 'مدیریت محصولات',
    icon: <FormatListBulletedIcon className='sideBarTitleIcon' fontSize='small' />,
    subItems: [
      { name: 'لیست محصولات', route: '/products' },
      { name: 'افزودن محصول جدید', route: '/products/new' },
      { name: 'دسته‌بندی‌ها', route: '/products/categories' },
    ]
  },
  {
    id: 'orders',
    title: 'سفارش‌ها',
    icon: <CalendarMonthIcon className='sideBarTitleIcon' fontSize='small' />,
    subItems: [
      { name: 'همه سفارش‌ها', route: '/orders' },
      { name: 'در حال پردازش', route: '/orders/pending' },
      { name: 'ارسال شده', route: '/orders/shipped' },
    ]
  },
  {
    id: 'customers',
    title: 'مشتریان',
    icon: <ContactsIcon className='sideBarTitleIcon' fontSize='small' />,
    subItems: [
      { name: 'لیست مشتریان', route: '/customers' },
      { name: 'پیام‌ها', route: '/customers/messages' },
    ]
  },
  {
    id: 'reports',
    title: 'گزارشات',
    icon: <BarChartIcon className='sideBarTitleIcon' fontSize='small' />,
    subItems: [
      { name: 'فروش ماهانه', route: '/reports/monthly-sales' },
      { name: 'محصولات پرفروش', route: '/reports/top-products' },
    ]
  },
  {
    id: 'settings',
    title: 'تنظیمات',
    icon: <GpsFixedIcon className='sideBarTitleIcon' fontSize='small' />,
    subItems: [
      { name: 'تنظیمات حساب', route: '/settings/account' },
      { name: 'تغییر رمز عبور', route: '/settings/password' },
      { name: 'خروج', route: '/logout' },
    ]
  },
];


export default function SideBar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState('dashboard');

  const handleDashboardClick = () => {
    setSelectedItem('dashboard');
    setOpenMenu(null);
  };

  const handleSubItemClick = (menuId, subItemName) => {
    setSelectedItem(`${menuId}-${subItemName}`);
  };

  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">

          {/* آیتم ثابت داشبورد */}
          <li className={`sideBarListItem ${selectedItem === 'dashboard' ? 'active' : ''}`}>
            <Link to="/" className="sideBarLink link" onClick={handleDashboardClick}>
              <h5 className="sideBarTitle">Dashboard</h5>
              <HomeIcon className="sideBarIcon" fontSize="small" />
            </Link>
          </li>

          {/* سایر منوها */}
          {menuItems.map((item) => {
            const isParentActive = selectedItem.startsWith(item.id);

            return (
              <li key={item.id} className={`sideBarListItem ${isParentActive ? 'active' : ''}`}>
                <a className="sideBarLink" onClick={() => setOpenMenu(item.id)}>
                  <h5 className="sideBarTitle">{item.title}</h5>
                  <div className="sideBarIconWrapper">
                    <KeyboardArrowLeftIcon
                      sx={{
                        fontSize: "18px",
                        transform: openMenu === item.id ? 'rotate(-90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                      className="sideBarArrowIcon"
                    />
                    {item.icon}
                  </div>
                </a>

                {openMenu === item.id && (
                  <ul className="menuDropDown">
                    {item.subItems.map((sub, index) => {
                      const isActive = selectedItem === `${item.id}-${sub.name}`;

                      return (
                        <li
                          key={index}
                          className={`menuDropDownItem ${isActive ? 'active' : ''}`}
                          onClick={() => handleSubItemClick(item.id, sub.name)}
                        >
                          <Link className="link" to={sub.route}>
                            <ArrowForwardIcon sx={{ fontSize: "12px" }} />
                            <p>{sub.name}</p>
                          </Link>
                        </li>
                      );
                      
                    })}
                  </ul>
                )}

              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

