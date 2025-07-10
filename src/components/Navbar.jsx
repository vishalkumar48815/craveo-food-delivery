import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className=' w-100 flex justify-between items-center' style={{ padding: '1rem' }}>
           <div>
            <img src="src/assets/logo.png" style={{height: 50, width:100, borderRadius: 4}} alt="logo" />
           </div>
            <div className="me-5">
                <NavLink to="/" className={({isActive}) => `px-4 py-2 rounded-2xl hover:bg-orange-500 hover:text-white ${isActive ? 'bg-orange-500 text-white' : ''}`} style={{ marginRight: '1rem' }}>Home</NavLink>
                <NavLink to="/menu" className={({isActive}) => `px-4 py-2 rounded-2xl hover:bg-orange-500 hover:text-white ${isActive ? 'bg-orange-500 text-white' : ''}`} style={{ marginRight: '1rem' }}>Browse Menu</NavLink>
                <NavLink to="/offers" className={({isActive}) => `px-4 py-2 rounded-2xl hover:bg-orange-500 hover:text-white ${isActive ? 'bg-orange-500 text-white' : ''}`} style={{ marginRight: '1rem' }}>Special Offers</NavLink>
                <NavLink to="/restaurants" className={({isActive}) => `px-4 py-2 rounded-2xl hover:bg-orange-500 hover:text-white ${isActive ? 'bg-orange-500 text-white' : ''}`} style={{ marginRight: '1rem' }}>Restaurants</NavLink>
                <NavLink to="/orders" className={({isActive}) => `px-4 py-2 rounded-2xl hover:bg-orange-500 hover:text-white ${isActive ? 'bg-orange-500 text-white' : ''}`} style={{ marginRight: '1rem' }}>Track Orders</NavLink>
                <NavLink to="/log-in" className={({isActive}) => `px-4 text-white py-2 rounded-2xl hover:bg-orange-500 ${isActive ? 'bg-orange-500' : 'bg-black'}`} style={{ marginRight: '1rem' }}>Login/Signup</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;