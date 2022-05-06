import img1 from "./images/image1.png";
import img2 from "./images/image2.png";
import img3 from "./images/image3.png";
import img4 from "./images/image4.png";
import img5 from "./images/image5.png";
import img6 from "./images/image6.png";

const Ecourse = () => {
  return (
    <div className="ecourse-wrapper">
      <p className="text-black text-center uppercase py-16 text-2xl">
        Ecourse Sample
      </p>
      <section className="px-6">
        <div className="md:flex">
          <img src={img1} alt="" className=" mb-4 md:w-[50%]" />
          <div className="img1-text md:ml-6">
              <p className="font-bold">Foundations of Diversity, Equity and Inclusion</p>
              <p className="text-gray-400">
                This eCourse educates the entire UCSF community of students, faculty
                and staff about actions they can take to promote a welcoming and
                supportive culture.
              </p>
              <button className="border-solid border-2 border-blue-400 py-2 px-4 mb-10 mt-12 text-lg text-blue-400 uppercase">View sample</button>
          </div>
          
        </div>
        <div className="bg-zinc-400 h-[0.2vh] mb-10"></div>
        <div className="md:flex">
          <img src={img2} alt="image2" className=" mb-4 md:w-[50%]" />
          <div className="img2-text md:ml-6">
              <p className="font-bold">Building Volunteer Engagement</p>
              <p className="text-gray-400">
              This online course is intended to educate volunteer managers at their moment of need while challenging them to prepare for a more in-depth instructor-led training, held annually.
              </p>
              <button className="border-solid border-2 border-blue-400 py-2 px-4 mb-10 mt-12 text-lg text-blue-400 uppercase">View sample</button>
          </div>
          
        </div>
        <div className="bg-zinc-400 h-[0.2vh] mb-10"></div>
        <div className="md:flex">
          <img src={img3} alt="image3" className=" mb-4 md:w-[50%]" />
          <div className="img3-text md:ml-6">
              <p className="font-bold">How Pest Management Professionals can
Protect Water Quality</p>
              <p className="text-gray-400">
              This course demonstrates how pest management professionals can ensure pesticide movement is reduced through the use of engaging, informational driven storytelling, interactions, graphics and sound.
              </p>
              <button className="border-solid border-2 border-blue-400 py-2 px-4 mb-10 mt-12 text-lg text-blue-400 uppercase">View sample</button>
          </div>
        
        </div>
        <div className="bg-zinc-400 h-[0.2vh] mb-10"></div>
        <div className="md:flex">
          <img src={img4} alt="image4" className=" mb-4 md:w-[50%]" />
          <div className="img4-text md:ml-6">
              <p className="font-bold">Tackling Taxes Challenge</p>
              <p className="text-gray-400">
              This fun game was developed in collaboration with University of California to help teach financial literacy to youth. It incorporates elements of gamification as learners collect points for each correct answer.  
              </p>
              <button className="border-solid border-2 border-blue-400 py-2 px-4 mb-10 mt-12 text-lg text-blue-400 uppercase">View sample</button>
          </div>
    
        </div>
        <div className="bg-zinc-400 h-[0.2vh] mb-10"></div>
        <div className="md:flex">
          <img src={img5} alt="image5" className=" mb-4 md:w-[50%]" />
          <div className="img5-text md:ml-6">
              <p className="font-bold">Facilities Maintenance Management</p>
              <p className="text-gray-400">
                TThis clients needed to train employees on how to use an updated computerized maintenance management system.   Using a simulated environment, users could practice using the software to process work orders and perform other tasks.
              </p>
              <button className="border-solid border-2 border-blue-400 py-2 px-4 mb-10 mt-12 text-lg text-blue-400 uppercase">View sample</button>
          </div>
          
        </div>
        <div className="bg-zinc-400 h-[0.2vh] mb-10"></div>
        <div className="md:flex">
          <img src={img6} alt="image6" className=" mb-4 md:w-[50%]" />
          <div className="img6-text md:ml-6">
              <p className="font-bold">How to Become a Foster Parent</p>
              <p className="text-gray-400">
              SaintA's missions is to facilitate equity, learning, healing and wellness by restoring the connections that help children and families thrive. During the COVID-19 Pandemic, they needed a way to develop a foster parent orientation. We used Articulate Rise to quickly and affordably deliver an online new foster parent training course. 
              </p>
              <button className="border-solid border-2 border-blue-400 py-2 px-4 mb-10 mt-12 text-lg text-blue-400 uppercase">View sample</button>
          </div>
        </div>
        
      </section>


      <section className="my-16 text-center">
          <p className="mb-4">Verse Learning</p>
          <p className="text-gray-400">Copyright 2022</p>
      </section>
    </div>
  );
};

export default Ecourse;
