import { BiMenuAltRight } from "react-icons/bi";


const Nav = () => {
    return ( 
        <div className="relative">
        <nav className="flex justify-between bg-zinc-700 text-white relative h-[10vh]">
        <p className="text-red-700 text-4xl py-4 pl-6">REXGRID</p>
        <BiMenuAltRight className="text-4xl my-5 mr-5 " />
      </nav>
      <section className="text-center bg-zinc-800 h-[100vh] opacity-95 text-white z-50 fixed top-0 w-[100%] hidden">
          <p className="text-3xl text-right pt-2 pr-4 mb-10">X</p>
          <p className="mb-10 uppercase">Home</p>
          <p className="mb-10 uppercase">Ecourse</p>
          <p className="mb-10 uppercase">About</p>
          <p className="mb-10 uppercase">Contact</p>
        </section>
        </div>
     );
}
 
export default Nav;