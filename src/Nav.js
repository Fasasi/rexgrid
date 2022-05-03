import { BiMenuAltRight } from "react-icons/bi";


const Nav = () => {
    return ( 
        <nav className="flex justify-between bg-zinc-700 text-white relative">
            <p className="text-red-700 text-4xl py-6 pl-6">REXGRID</p>
            <div className="flex justify-evenly mr-8 py-7">
              <ul className="pr-8 text-lg uppercase hidden lg:block">
                <li>Home</li>
                <li>Ecourses</li>
                <li>video</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </div>
            <BiMenuAltRight className="text-4xl my-5 mr-5 " />
          </nav>
     );
}
 
export default Nav;