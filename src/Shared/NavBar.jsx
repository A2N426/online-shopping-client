import { Navbar } from "flowbite-react";
import { useContext, } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../providers/AuthProviders";

const NavBar = () => {
    const { user, logOut, } = useContext(UserContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => console.log(err.message))
    }

    console.log(user);

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <img
                        src="https://img.freepik.com/free-vector/gradient-t-logo-template_23-2149372726.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais"
                        className="mr-3 lg:w-14 lg:h-14 h-9 rounded-full"
                        alt="Toy logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Toy House
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">

                    {
                        user ?
                            <div className='relative group lg:flex'>
                                <img className="rounded-full w-14" src={user?.photoURL} alt="Not Found" />
                                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md top-0 right-1 absolute
                        -translate-x-14 lg:translate-y-2 opacity-0 m-4 mx-auto">{user?.displayName}</span>
                            </div>
                            :
                            <NavLink to="/login">Login</NavLink>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink >
                        Home
                    </NavLink>
                    <NavLink to="/AllToys">
                        All Toys
                    </NavLink>
                    <NavLink to="/login">
                        My Toys
                    </NavLink>
                    <NavLink to="/login">
                        Add A Toy
                    </NavLink>
                    <NavLink to="/login">
                        Blogs
                    </NavLink>
                    {
                        user &&
                        <NavLink onClick={handleLogOut}>
                            Logout
                        </NavLink>}
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default NavBar;