import Home from "./pages/home/Home"
import Users from "./pages/user/Users"
import Products from "./pages/products/Products"
import Orders from "./pages/orders/Orders"
import Settings from "./pages/settings/Settings"
import MonthlySales from "./pages/reports/MonthlySales"

let routers = [
    {path: '/' , element: <Home />},
    {path: '/customers' , element: <Users />},
    {path: '/products' , element: <Products />},
    {path: '/products/new' , element: <newProducts />},
    {path: '/products/categories' , element: <categoriesProducts />},
    {path: '/orders' , element: <Orders />},
    {path: '/orders/pending' , element: <pendingOrders />},
    {path: '/orders/shipped' , element: <shippedOrders />},
    {path: '/settings/account' , element: <Settings />},
    {path: '/reports/monthly-sales' , element: <MonthlySales />},
]


export default routers