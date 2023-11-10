import { Outlet,Link} from "react-router-dom"
import { useEffect, useState } from "react"


function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
  <div className="flex items-center justify-between bg-white py-6 border-b border-gray-950">
      <span className="text-xl font-bold text-black ml-3">
       StoryVerseBooks
      </span>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-3"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 hover:animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 hover:animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 hover:animate-pulse bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="text-black uppercase">
                <Link to="/" onClick={toggleMobileMenu}>Home</Link>
              </li>
              <li className="text-black uppercase">
                <Link to="/about" onClick={toggleMobileMenu}>About</Link>
              </li>
              <li className="text-black uppercase">
                <Link to="/shop" onClick={toggleMobileMenu}>Shop</Link>
              </li>
              <li className="text-black uppercase">
                <Link to="/blog" onClick={toggleMobileMenu}>Blog</Link>
              </li>
              <li className="text-black uppercase">
                <Link to="/sell" onClick={toggleMobileMenu}>Become a Seller</Link>
              </li>
             
            
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-5 ">
          <li>
            <Link to="/" className="text-black hover:text-blue-500 uppercase">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-blue-500 uppercase">About</Link>
          </li>
          <li>
            <Link to="/shop" className="text-black hover:text-blue-500 uppercase">Shop</Link>
          </li>
          <li>
            <Link to="/blog" className="text-black hover:text-blue-500 uppercase">Blog</Link>
          </li>
          <li>
            <Link to="/sell" className="text-black hover:text-blue-500 uppercase">Become a Seller</Link>
          </li>
         
          
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>

    <Outlet/>
    </>

  )
}

export default Layout