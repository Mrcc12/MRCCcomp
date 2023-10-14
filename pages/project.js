import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/headerProject";
import styles from "../styles/project.module.css";

const teamMembers = [
  {
    name: "Image showing the pouring of a special concrete pump in the first layer of the upper 500m3 tank walls",
    major: "Location: Wadi Al Dawasir .",
    image: "/خز.jpg",
  },
  {
    name: "Image showing insulation work on the foundations of the upper 1500 m3 tank in Ash Sharafah",
    major: "Location: Wadi Al Dawasir .",
    image: "/قواعد.jpeg",
  },
  {
    name: "Image showing the reinforcement of the steel for the upper 1500m3 tank",
    major: "Location: Wadi Al Dawasir .",
    image: "/تسليح.jpeg",
  },
  {
    name: "Flood drainage and risk prevention in Al Uyaynah and Al Jubayliyah.",
    major: "Location: Northern Borders Region.",
    image: "1مشروع.jpg",
  },
  {
    name: "Image in Wadi Al Dawasir/City of Umm Samrah showing the extension of the above-ground tank pipeline to the pumping station in Umm Samrah",
    major: "Location: Wadi Al Dawasir.",
    image: "/water.jpg",
  },
  {
    name: "Renovation of the Fifth Elementary School and the Second High School in Al-Majma'ah",
    major: "Location: Al-Majma'ah Province.",
    image: "https://static.srpcdigital.com/styles/1200x600/public/2022/09/15/1663251404074764900.jpg",
  },
  {
    name: "Construction of the First Elementary School in Ash Shibah",
    major: "Location: Al-Majma'ah Province.",
    image: "/school2.jpg",
  },
  {
    name: "Start of the project to build an underground tank .",
    major: "Location: Al-Dawadmi Region .",
    image: "ارضي.jpg",
  },
  {
    name: "Image showing the placement of a ladder inside a tank",
    major: "Location: Al-Dawadmi Region .",
    image: "سلم.jpg",
  },
  {
    name: "Implementation of water tanks and their networks for Group 9/7 - Contract Number [1]",
    major: "Location: Najran Region.",
    image: "/فيضان.jpg",
  },
  {
    name: "Image showing the installation of discharge lines from the pumps",
    major: "Location: Wadi Al Dawasir .",
    image: "/الطرد.jpeg",
  },
  {
    name: "Image showing epoxy insulation work for the solution tank in Umm Samrah",
    major: "Location: Wadi Al Dawasir .",
    image: "/دوامي3.jpg",
  },
  {
    name: "Implementation of water tanks and their networks for Group 9/6 - Contract Number [2]",
    major: "Location: Najran Region .",
    image: "/خزان2.jpg",
  },
  {
    name: "Image showing the completion of barbed wire installation at the Sharafa site",
    major: "Location: Wadi Al Dawasir .",
    image: "/شيك.jpg",
  },
  {
    name: "Image in Wadi Al Dawasir/City of Umm Samrah showing leakage testing in the upper tank of Umm Samrah",
    major: "Location: Wadi Al Dawasir.",
    image: "/دوادمي2.jpg",
  },
  {
    name: "Image showing the installation of electrical panels in the pumping building in Al-Sharafa",
    major: "Location: Wadi Al Dawasir .",
    image: "/لوحه.jpg",
  },
  {
    name: "Image showing the installation of pumps in the pumping building",
    major: "Location: Wadi Al Dawasir .",
    image: "/networkwater2.jpg",
  },
  {
    name: "Image in Wadi Al Dawasir/City of Umm Samrah showing the general appearance of the upper tank of Umm Samrah",
    major: "Location: Wadi Al Dawasir .",
    image: "/خزان علوي ام سمرة.jpg",
  },
  {
    name: "Image in Wadi Al Dawasir/City of Al-Sharafa showing the installation of irrigation pumps and connections above the above-ground tank in Al-Sharafa",
    major: "Location: Wadi Al Dawasir .",
    image: "/دوادمي1.jpg",
  },
  {
    name: "Installation of canopies for Group 30",
    major: "Location: Riyadh City .",
    image: "/مضلات.jpg",
  },
  {
    name: "Image in Wadi Al Dawasir/City of Al-Sharafa showing external paintwork and writing the logo on the Sharafa tank",
    major: "Location: Wadi Al Dawasir",
    image: "/networkwater.jpg",
  },
  {
    name: "Image in Wadi Al Dawasir/City of Al-Sharafa showing the general shape of the upper Al Sharafa tank after removing the wooden formwork",
    major: "Location: Wadi Al Dawasir",
    image: "/فك الشدة الخشبية.jpg",
  },
  {
    name: "Image in Wadi Al Dawasir/City of Umm Samrah showing the finishing of the Umm Samrah pumping building",
    major: "Location: Wadi Al Dawasir",
    image: "/jazan.jpg",
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