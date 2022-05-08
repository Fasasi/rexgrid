
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { BsCameraReels } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import computer from "./images/computer-web.jpg";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.gif";
import img6 from "./images/img6.png";


const Home = () => {
    return (
        
        <div className="content-wrapper">
        <header className="h-[60vh] bg-sky-lolo bg-cover">
          <div className="text-white text-left pl-6 pr-20 absolute top-52">
            <p className="text-3xl uppercase">
              learning is an experience. everything else is just information.
            </p>
            <p className="text-xs mt-8">Albert Einstein</p>
          </div>
          
        </header>
        <section className="bg-black text-white px-6 bg-[url('../src/images/2217435.webp')] bg-no-repeat md:flex">
          <div className="pt-14 text-left">
            <h2 className="text-cyan-500 text-2xl pb-7">Why Choose Us?</h2>
            <p className="text-sm pb-10 md:text-base md:pr-6">
              We are a small, agile agency that listens first and then tailors our
              learning design to meet your specific need.We’re with you every step
              of the development process, providing advice and expertise.We enjoy
              the challenge of finding ways to create learning that moves beyond
              the ordinary and promotes memorable learning experiences.
            </p>
            <button className="border-solid border-2 border-blue-700 py-2 px-4 mb-32 mt-6 text-xl text-blue-500">
              Learn More
            </button>
          </div>
          <img src={computer} alt="computer" className="pb-16 sm:w-[100%] md:h-[17em] md:mt-24" />
        </section>
        <section className="bg-black text-white px-6 bg-[url('../src/images/blackboard-background-fade-half-1500.jpg')] bg-no-repeat">
          <div className="pt-14 text-left">
            <p className="text-cyan-500 text-2xl pb-7">What We Do</p>
            <p className="text-sm pb-10 md:text-lg">
              The crowded media landscape means that there’s more competition than
              ever for our attention. We integrate learning theory with modern
              visual design to deliver a product that’s both engaging and meets
              the learning objectives. Our focus on the learner means that we may
              sometimes challenge project sponsors to push beyond the
              organizational perspective to arrive at content that is meaningful
              to the learner.
            </p>
            <p className="text-sm pb-10 md:text-lg">
              Even the best-executed course has little impact if it doesn’t move
              the learner toward positive change. We strive to provide more than
              simple information dumps. Meaningful instruction requires careful
              listening, identifying obstacles to behavior change, and crafting
              objectives that reflect learners’ needs.
            </p>
          </div>
          <div className="text-center md:flex md:justify-between md:font-bold md:text-lg">
            <div className="md:pl-24">
              <GiCheckMark className="text-4xl text-cyan-500 ml-[5em] mb-6 sm:ml-[8em] md:ml-[3em]" />
              <p className="uppercase mb-10">instructional design</p>
              <BsCameraReels className="text-4xl text-cyan-500 ml-[5em] mb-6 sm:ml-[8em] md:ml-[3em]" />
              <p className="uppercase mb-10">video production</p>
            </div>
            <div className="md:pr-8">
              <RiComputerLine className="text-4xl text-cyan-500 ml-[5em] mb-6 sm:ml-[8em] md:ml-[3em]" />
              <p className="uppercase mb-10">elearning development</p>
              <HiOutlineDocumentDuplicate className="text-4xl text-cyan-500 ml-[5em] mb-6 sm:ml-[8em] md:ml-[3em]" />
              <p className="uppercase mb-10">needs analysis</p>
            </div>
            
          </div>
          <div className="text-center">
            <p className="text-cyan-500 text-2xl uppercase mt-36 mb-24 md:mb-10">
              Take a look at our work
            </p>
            <div className="md:flex md:justify-center">
            <button className="border-solid border-2 border-blue-700 py-2 px-4 mt-6 text-xl text-blue-500 uppercase mb-32 md:mr-10">
                {" "}
                Ecourses
              </button>
              {/* <button className="border-solid border-2 border-blue-700 py-2 px-4 mt-6 text-xl text-blue-500 uppercase">
                Ecourses
              </button> */}
              <br />
              <button className="border-solid border-2 border-blue-700 py-2 px-4 mt-6 text-xl text-blue-500 uppercase mb-32 md:ml-10">
                {" "}
                video
              </button>
            </div>
          </div>
        </section>
        <section className="px-6">
          <p className="text-gray-500 text-3xl pb-7 text-center mt-6 uppercase">Our clients</p>
          <p className="text-sm pb-10 sm:text-lg">
            Our clients include organizations in Higher Education, Life Science,
            Transportation, the Public Sector, Agriculture, and Government. Though
            our business has grown, we have never lost sight of our specialization
            in supporting Academic/Public partnerships to educate a diverse group
            of employees and public audiences.
          </p>
          <div className="mt-16 flex flex-col w-[10em] ml-[7em] sm:ml-[13em] md:flex-row md:justify-evenly md:ml-28 md:w-[30em]">
            <div>
              <img src={img1} alt="img 1" className="mb-6" />
              <img src={img2} alt="img 2" className="mb-6" />
            </div>
            <div>
              <img src={img3} alt="img 3" className="mb-6" />
              <img src={img4} alt="img 4" className="mb-6" />
            </div>
            <div>
              <img src={img5} alt="img 5" className="mb-6" />
              <img src={img6} alt="img 6" className="mb-6" />
            </div>
          </div>
        </section>
        <section className="bg-sky-900 text-white px-6">
          <p className="text-cyan-500 text-4xl pb-7 pt-6">Location</p>
          <div className="md:flex">
            <FaMapMarkerAlt className="text-9xl text-gray-300 ml-[1em] mb-6 sm:ml-[0.8em] sm:text-[15rem] md:m-10 md:text-[20rem] md:pb-52" />
            <p className="text-sm pb-10 md:ml-15 md:pt-10 md:text-lg">We are located in the San Francisco Bay Area. Verse Learning values our client relationships, and sometimes the best way to get to know someone is to meet them in person. Most of our business is from repeat clients located in Northern California, however we also work with clients from across the country and around the globe.</p>
          </div>
        </section>
        
  
      </div>
    );
}
 
export default Home;