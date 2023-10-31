import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/headerProject";
import styles from "../styles/project.module.css";


const teamMembers = [
  {
    name: "Image showing insulation work of the upper 1500 m3 tank base in Shurafa",
    major: "Location: Wadi Dawasir.",
    image: "/mm1.jpeg",
  },
  {
    name: "Image showing iron reinforcement work for the upper 1500m3 tank",
    major: "Location: Wadi Dawasir.",
    image: "/mm2.jpeg",
  },
  {
    name: 'Carpentry work to tighten the upper tank',
    major: "Location: Wadi Dawasir.",
    image: "/mm3.jpeg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing concrete pouring work for the upper tank roof in Shurafa",
    major: "Location: Wadi Dawasir",
    image: "/mm4.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing construction work on the Shurafa upper tank of 1500m3",
    major: "Location: Wadi Dawasir",
    image: "/networkwater.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing exterior painting work and logo writing on the Shurafa tank",
    major: "Location: Wadi Dawasir",
    image: "/mm5.jpeg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the overall shape of the Shurafa upper tank after removing wooden tension",
    major: "Location: Wadi Dawasir",
    image: "/mm6.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing tree planting around the 1500m3 upper tank area",
    major: "Location: Wadi Dawasir",
    image: "/mm7.jpg",
  },
  {
    name: "Image showing the upper 1500m3 tank in Shurafa",
    major: "Location: Wadi Dawasir",
    image: "/mm8.png",
  },
  {
    name: "Image showing barbed wire installation at the Shurafa site",
    major: "Location: Wadi Dawasir.",
    image: "/mm9.jpg",
  },
  {
    name: "Upper tank work in Dawasir",
    major: "Location: Wadi Dawasir.",
    image: "/mm10.jpeg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing concrete pouring work for the walls of the upper 500m3 tank",
    major: "Location: Wadi Dawasir",
    image: "/mm11.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing construction work on the walkway on top of the upper Umm Sumra tank.",
    major: "Location: Wadi Dawasir",
    image: "/mm12.png",
  },
  {
    name: "Image showing concrete pouring with a special concrete pump for the first batch of the 500m3 upper tank walls",
    major: "Location: Wadi Dawasir.",
    image: "/mm13.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing finishing and marble cladding of the upper tank in Umm Sumra",
    major: "Location: Wadi Dawasir",
    image: "/mm14.png",
  },
  {
    name: "Image showing epoxy insulation work for the Umm Sumra underground tank",
    major: "Location: Wadi Dawasir.",
    image: "/mm15.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing leakage testing in the Umm Sumra upper tank",
    major: "Location: Wadi Dawasir.",
    image: "/mm16.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the general shape of the Umm Sumra upper tank",
    major: "Location: Wadi Dawasir.",
    image: "/mm17.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing thermal insulation work on the upper ground tank in Umm Sumra",
    major: "Location: Wadi Dawasir",
    image: "/mm18.jpg",
  },
  {
    name: "Excavation of the foundations of an underground tank",
    major: "Location: Al-Dawadmi area.",
    image: "/mm19.jpeg",
  },
  {
    name: "Reinforcement work for an underground tank",
    major: "Location: Al-Dawadmi area.",
    image: "/mm20.jpeg",
  },
  {
    name: "Project initiation for the construction of an underground tank.",
    major: "Location: Al-Dawadmi area.",
    image: "mm21.jpg",
  },
  {
    name: "Image showing the installation of a ladder inside the tank",
    major: "Location: Al-Dawadmi area.",
    image: "mm22.jpg",
  },
  {
    name: "Reinforcement work for an underground tank",
    major: "Location: Jazan area",
    image: "/mm23.jpeg",
  },
  {
    name: "Ordinary concrete casting work for the underground tank",
    major: "Location: Jazan area",
    image: "/mm24.jpeg",
  },
  {
    name: "Isolation work for the walls of the underground tank",
    major: "Location: Jazan area",
    image: "/mm25.jpeg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing concrete pouring work for the foundations of the pumping station",
    major: "Location: Wadi Dawasir",
    image: "/mm26.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing construction work in the pumping station building in Umm Sumra",
    major: "Location: Wadi Dawasir",
    image: "/mm27.png",
  },
  
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing finishing of the Umm Sumra pumping station building",
    major: "Location: Wadi Dawasir",
    image: "/jazan.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the pumping station building in Umm Sumra",
    major: "Location: Wadi Dawasir",
    image: "/mm28.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the sub-base works for the Umm Sumra ground tank and the thickness compaction layer",
    major: "Location: Wadi Dawasir",
    image: "/mm29.png",
  },
  {
    name: "Image showing the installation of pumps in the pumping station building",
    major: "Location: Wadi Dawasir.",
    image: "/networkwater2.jpg",
  },
  {
    name: "Image showing the installation of discharge lines from the pumps",
    major: "Location: Wadi Dawasir.",
    image: "/mm30.jpeg",
  },
  {
    name: "Soil testing work",
    major: "Location: Al-Dawadmi area.",
    image: "/mm31.jpeg",
  },
  {
    name: "Asphalting work for the Dawadmi project",
    major: "Location: Al-Dawadmi area.",
    image: "/mm32.jpeg",
  },
  {
    name: "Renovation of the fifth primary school and the second secondary school in Majmaah",
    major: "Location: Majmaah Governorate.",
    image:
      "https://static.srpcdigital.com/styles/1200x600/public/2022/09/15/1663251404074764900.jpg",
  },
  {
    name: "Construction of the first primary school in Al-Shaibah",
    major: "Location: Majmaah Governorate.",
    image: "/school2.jpg",
  },
  {
    name: "Flood control and risk prevention in Al-Oyayna and Al-Jubailiya",
    major: "Location: Northern Borders region.",
    image: "mm33.jpg",
  },
  {
    name: "Installation of stairs in the underground tank",
    major: "Location: Wadi Dawasir.",
    image: "/mm34.jpeg",
  },
  {
    name: "Installation of stairs in the underground tank",
    major: "Location: Wadi Dawasir.",
    image: "/mm35.jpeg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the installation of the irrigation pump and its connections above the underground tank in Shurafa",
    major: "Location: Wadi Dawasir.",
    image: "/mm36.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing masonry work for the pumping station building",
    major: "Location: Wadi Dawasir",
    image: "/mm37.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing interior painting work for the pumping station building",
    major: "Location: Wadi Dawasir",
    image: "/mm38.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing fuel pump and its protective cage",
    major: "Location: Wadi Dawasir",
    image: "/mm39.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing epoxy insulation work in the Umm Sumra underground tank",
    major: "Location: Wadi Dawasir",
    image: "/mm40.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the tile of the ground tank in Shurafa",
    major: "Location: Wadi Dawasir",
    image: "/mm41.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the statement panel for the 400mm duct line",
    major: "Location: Wadi Dawasir",
    image: "/mm42.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the column and statement panel for the 250mm duct line",
    major: "Location: Wadi Dawasir",
    image: "/mm43.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the general site in Shurafa after completing asphalt work",
    major: "Location: Wadi Dawasir",
    image: "/mm44.png",
  },
  {
    name: "Execution of water tanks and networks for Group 9/7 - Contract No. [1]",
    major: "Location: Najran region.",
    image: "/mm45.jpg",
  },
  {
    name: "Execution of water tanks and networks for Group 9/6 - Contract No. [2]",
    major: "Location: Najran region.",
    image: "/mm46.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the installation of electrical panels in the pumping station",
    major: "Location: Wadi Dawasir",
    image: "/mm47.png",
  },
];
const Projectpage = () => {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "500px",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
  };

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.aboutbackground}>
          <div style={overlayStyle}></div>
          <div className={styles.textABOUT}>
            {/* <h3 className='texth1'>WHO WE ARE</h3> */}
            <h1 className={styles.textpABOUT}>OUR PROJECTS</h1>
          </div>
        </section>

        <div className={styles.containerorganization}>
          <div className={styles.iconContainer}>
            <div class="elementor-widget-container">
              <div class="elementor-icon-wrapper">
                <div class="elementor-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="20"
                    viewBox="0 0 21 8"
                    fill="none"
                  >
                    <path d="M7 0H13L6 8H0L7 0Z" fill="#FCC236"></path>
                    <path d="M13 0H7L15 8H21L13 0Z" fill="#FCC236"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.title}>PROJECTS</p>
        </div>
        
        <div style={{ padding: "50px" }}>
          <div id="about" className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative items-center justify-center overflow-hidden transition-shadow rounded-lg shadow-lg cursor-pointer group hover:shadow-xl hover:shadow-black/30"
                >
                  <div >
                    <img
                     className={styles.imgproject}
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="inset-x-0 p-2 bg-white bottom-20">
                    <h1 className="text-black text-m font-dmserif">
                      {member.name}
                    </h1>
                    <p className="text-black text-s">{member.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};

export default Projectpage;