import { BiMenuAltRight } from "react-icons/bi";


const Nav = () => {
    return ( 
        <div>
        <nav className="flex justify-between bg-zinc-700 text-white h-[10vh]">
        <p className="text-red-700 text-4xl py-4 pl-6">REXGRID</p>
        <BiMenuAltRight className="text-4xl my-5 mr-5 lg:hidden " />
        <div className="hidden lg:flex justify-evenly pt-6">
            <p className="mb-10 uppercase mr-10">Home</p>
            <p className="mb-10 uppercase mr-10">Ecourse</p>
            <p className="mb-10 uppercase mr-10">About</p>
            <p className="mb-10 uppercase mr-10">Contact</p>
          </div>
      </nav>
      <section className="text-white fixed">
          
        </section>
        </div>
     );
}
 
export default Nav;