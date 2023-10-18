import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/headerProject";
import styles from "../styles/project.module.css";

const teamMembers = [
  {
    name: "Image illustrating the pouring of special concrete with a pump for the first layer of the upper tank walls, 500m3",
    major: "Location: Wadi Dawasir.",
    image: "/خز.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the overall shape of the upper Shurafa tank after removing the wooden cover",
    major: "Location: Wadi Dawasir",
    image: "/فك الشدة الخشبية.jpg",
  },
  
  {
    name: "Image illustrating the insulation work for the foundations of the upper 1500m3 tank in Sharefa",
    major: "Location: Wadi Dawasir.",
    image: "/قواعد.jpeg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the overall shape of the upper Umm Sumra tank",
    major: "Location: Wadi Dawasir .",
    image: "/خزان علوي ام سمرة.jpg",
  },
  {
    name: "Execution of water tanks and networks for Group 9/7 - Contract Number [1]",
    major: "Location: Najran Region.",
    image: "/فيضان.jpg",
  },
  {
    name: "Carpentry work for tightening the upper tank",
    major: "Location: Najran Region",
    image: "/نجاره.jpeg",
  },
  {
    name: "Asphalt work for the Dawadmi project",
    major: "Location: Al-Dawadmi Region.",
    image: "/زفته.jpeg",
  },
 
  {
    name: "Ordinary concrete pouring work for the underground tank",
    major: "Location: Jazan Region",
    image: "/خرسانه.jpeg",
  },
  {
    name: "Soil testing work",
    major: "Location: Al-Dawadmi Region .",
    image: "/تربه.jpeg",
  },
  {
    name: "Renewal of the fifth primary school and the second high school in Al-Majmaah",
    major: "Location: Al-Majmaah Province.",
    image: "https://static.srpcdigital.com/styles/1200x600/public/2022/09/15/1663251404074764900.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing construction work in the upper Shurafa tank, 1500m3",
    major: "Location: Wadi Dawasir",
    image: "/networkwater.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing external painting work and logo writing on the Shurafa tank",
    major: "Location: Wadi Dawasir",
    image: "/دهان.jpeg",
  },
  {
    name: "Grouting work for an underground tank",
    major: "Location: Jazan Region",
    image: "/جيزان.jpeg",
  },
  {
    name: "Flood discharge and risk prevention in Al-Oyaynah and Al-Jubailiyah",
    major: "Location: Northern Borders Region.",
    image: "1مشروع.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing leakage testing in the upper tank of Umm Sumra",
    major: "Location: Wadi Dawasir.",
    image: "/دوادمي2.jpg",
  },
  {
    name: "Grouting work for an underground tank",
    major: "Location: Al-Dawadmi Region.",
    image: "/جيزان2.jpeg",
  },


  {
    name: "Excavation of the foundations for an underground tank",
    major: "Location: Al-Dawadmi Region .",
    image: "/قواعدخزان.jpeg",
  },
  {
    name: "Insulation work for the walls of the underground tank",
    major: "Location: Jazan Region",
    image: "/عزل.jpeg",
  },

 
  {
    name: "Image illustrating the reinforcement work for the upper 1500m3 tank",
    major: "Location: Wadi Dawasir .",
    image: "/تسليح.jpeg",
  },

 
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the extension of the external pipeline from the underground tank to the pumping station in Umm Sumra",
    major: "Location: Wadi Dawasir.",
    image: "/water.jpg",
  },

  {
    name: "Construction of the first primary school in Shubea",
    major: "Location: Al-Majmaah Province.",
    image: "/school2.jpg",
  },
  {
    name: "Start of the project for building an underground tank.",
    major: "Location: Al-Dawadmi Region.",
    image: "ارضي.jpg",
  },
  {
    name: "Image illustrating the placement of a ladder inside the tank",
    major: "Location: Al-Dawadmi Region.",
    image: "سلم.jpg",
  },

  {
    name: "Image illustrating the installation of discharge lines from the pumps",
    major: "Location: Wadi Dawasir .",
    image: "/الطرد.jpeg",
  },
 {
    name: "Upper tank work in Dawadmi",
    major: "Location: Wadi Dawasir .",
    image: "/علوي.jpeg",
  },{
    name: "Installation of stairs in the underground tank",
    major: "Location: Wadi Dawasir .",
    image: "/سلم2.jpeg",
  },{
    name: "Installation of stairs in the underground tank",
    major: "Location: Wadi Dawasir .",
    image: "/سلم3.jpeg",
  },
  {
    name: "Image illustrating the epoxy insulation work for the Umm Sumra tank",
    major: "Location: Wadi Dawasir .",
    image: "/دوامي3.jpg",
  },
  {
    name: "Construction of water tanks and their networks for Group 9/6 - Contract Number [2]",
    major: "Location: Najran Region.",
    image: "/خزان2.jpg",
  },
  {
    name: "Image illustrating the completion of installing barbed wire at the Shurafa site",
    major: "Location: Wadi Dawasir .",
    image: "/شيك.jpg",
  },
 
  {
    name: "Image illustrating the installation of electrical panels in the pumping station building in Shurafa",
    major: "Location: Wadi Dawasir .",
    image: "/لوحه.jpg",
  },
  {
    name: "Image illustrating the installation of pumps in the pumping station building",
    major: "Location: Wadi Dawasir .",
    image: "/networkwater2.jpg",
  },
 
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the installation of the irrigation pump and its connections above the underground tank in Shurafa",
    major: "Location: Wadi Dawasir.",
    image: "/دوادمي1.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the thermal insulation work on the upper ground tank in Umm Sumra",
    major: "Location: Wadi Dawasir",
    image: "/مضلات.jpg",
  },

 
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the landscaping of trees around the upper tank area, 1500m3",
    major: "Location: Wadi Dawasir",
    image: "/دواسي.jpg",
  },
 
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the finishing of the Umm Sumra upper tank facades with marble breaks",
    major: "Location: Wadi Dawasir",
    image: "/jazan.jpg",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the pouring work of the concrete roof of the upper tank in Shurafa",
    major: "Location: Wadi Dawasir",
    image: "/دروة سطح الخزاى العلىي.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the pouring work of concrete for the walls of the upper 500m",
    major: "Location: Wadi Dawasir",
    image: "/صب خزساًت فٍ جذراى حلت.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the installation of the fuel pump and its protective cage",
    major: "Location: Wadi Dawasir",
    image: "/مضخة الوقود وقفص حماية له.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the construction work in the pumping station building in Umm Sumra",
    major: "Location: Wadi Dawasir",
    image: "/أعوال اإلًشاءاث فٍ هبًٌ هحطت الضخ فٍ أم سوشة.png",
  },
  {
    name: "Image in Wadi Dawasir/City of Shurafa showing the interior painting work of the pumping station building",
    major: "Location: Wadi Dawasir",
    image: "/أعوال الذهاًاث الذاخلُت لوبًٌ هحطت الضخ..png",
  },
  {
    name: "Image in Wadi Dawasir/City of Umm Sumra showing the epoxy insulation work in the underground tank of Umm Sumra",
    major: "Location: Wadi Dawasir",
    image: "/أعمال العزل بااليبوكسى في الخزان األرضي.png",
  },
  {
    name:"Image in Wadi Dawasir/City of Umm Sumra showing the finishing and marble facade of the upper tank in Umm Sumra",
    major: "Location: Wadi Dawasir",
    image: "/تشطيب واجهات الخزان العلوى بكسر الرخام في أم.png",
  },
  {
    name:"Image in Wadi Dawasir/City of Shurafa showing the installation of electrical panels in the pumping station building",
    major: "Location: Wadi Dawasir",
    image: "/تركيب لوحات الكهرباء في مبنى الضخ..png",
  },
  {
    name:"Image in Wadi Dawasir/City of Umm Sumra showing the construction of the sub-base and compaction of the ground layer for the underground tank in Umm Sumra",
    major: "Location: Wadi Dawasir",
    image: "/رصيف خزان أرضى أم سمرة ودمك طبقة.png",
  },
  {
    name:"Image in Wadi Dawasir/City of Umm Sumra showing the construction work on the walkway on top of the upper Umm Sumra tank.",
    major: "Location: Wadi Dawasir",
    image: "/اإلًشاءاث فٍ الوشاَت فٍ أعلً خزاى أم سوزة.png",
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