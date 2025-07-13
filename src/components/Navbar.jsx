import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const closeDrawer = () => setIsDrawerOpen(false);

    const navLinkClass = (isActive) =>
        `block px-4 py-2 rounded-2xl hover:bg-orange-500 hover:text-white ${isActive ? "bg-orange-500 text-white" : ""
        }`;

    const navLinks = (
        <>
            <NavLink to="/" onClick={closeDrawer} className={({ isActive }) => navLinkClass(isActive)} >Home</NavLink>
            <NavLink to="/menu" onClick={closeDrawer} className={({ isActive }) => navLinkClass(isActive)} >Browse Menu</NavLink>
            <NavLink to="/offers" onClick={closeDrawer} className={({ isActive }) => navLinkClass(isActive)} >Special Offers</NavLink>
            <NavLink to="/restaurants" onClick={closeDrawer} className={({ isActive }) => navLinkClass(isActive)} >Restaurants</NavLink>
            <NavLink to="/orders" onClick={closeDrawer} className={({ isActive }) => navLinkClass(isActive)} >Track Orders</NavLink>
            <NavLink to="/log-in" onClick={closeDrawer} className={({ isActive }) => `px-4 text-white py-2 rounded-2xl hover:bg-orange-500 ${isActive ? 'bg-orange-500' : 'bg-black'}`} >Login/Signup</NavLink>
        </>
    )

    return (
        <nav className='sm:max-w-[95%] md:max-w-[90%] m-auto flex justify-between items-center' style={{ padding: '1rem' }}>
            <div>
                <img src="src/assets/logo.png" style={{ height: 50, width: 100, borderRadius: 4 }} alt="logo" />
            </div>
            <div className='lg:flex hidden gap-3'>
                {navLinks}
            </div>

            <div className='block lg:hidden'>
                <Button onClick={toggleDrawer}>
                    <i className={`fa ${isDrawerOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
                </Button>
                <Drawer
                    title="Basic Drawer"
                    closable={{ 'aria-label': 'Close Button' }}
                    onClose={closeDrawer}
                    open={isDrawerOpen}
                >
                    <div className='flex flex-col gap-3'>
                        {navLinks}
                    </div>
                </Drawer>
            </div>
        </nav >
    );
}

export default NavBar;