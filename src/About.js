import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.gif";
import img6 from "./images/img6.png";
const About = () => {
  return (
    <div className="px-6">
      <p className="uppercase text-center my-16 text-2xl">who is verse learning</p>
      <section className="mb-16 md:flex">
        <div className="mb-10 about-image bg-slate-500 h-48 w-48 mx-24 rounded-[50%] sm:mx-[12em] sm:w-56 sm:h-56 md:m-0 md:w-[65em]"></div>
        <section className="md:ml-[2em]">
          <p className="text-gray-400 mb-5">
            Verse Learning was founded in 2016 by Steve Heindl. After graduating
            from San Francisco State University with his M.Ed. in Instructional
            Technology, Steve’s developed educational material across a broad
            spectrum of subjects for staff, students, and public audiences.
          </p>
          <p className="text-gray-400">
            Steve has interviewed landowners under the canopy of redwood forests,
            videotaped rodents for veterinarians, and built a health information
            website for a federal technology program. Along the way, he has even
            made several mandatory compliance courses easier to bear. ​
          </p>
        </section>
      </section>
      <section>
        <p className="uppercase text-center my-16 text-2xl">Our partners</p>
        <p className="text-gray-400">
          The majority of our development work is done in-house. When needed, we
          also leverage our network of trusted partners to help provide a
          dynamic suite of digital media such as documentary-style videos, 3-D
          graphic animation, voiceover artists, infographics, and translation
          services. This structure allows Verse Learning to keep our prices
          lower than many of our competitors, while also maintaining a high
          level of expertise and quality.
        </p>
        <div className="mt-16 flex flex-col w-[10em] ml-[7em] sm:ml-[15em] md:ml-[18em]">
            <img src={img1} alt="img 1" className="mb-6" />
            <img src={img2} alt="img 2" className="mb-6" />
            <img src={img3} alt="img 3" className="mb-6" />
            <img src={img4} alt="img 4" className="mb-6" />
            <img src={img5} alt="img 5" className="mb-6" />
            <img src={img6} alt="img 6" className="mb-6" />
          </div>
      </section>
    </div>
  );
};

export default About;
