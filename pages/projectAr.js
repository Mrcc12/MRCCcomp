import React from "react";
import Footer from "@/components/footerar";
import Navbar from "@/components/headerProjectAr";
import styles from "../styles/project.module.css";

const teamMembers = [
 
  {
    name: "صورة توضح اعمال عزل قواعد خزان علوي 1500 م3 في الشرافا",
    major: "الموقع: وادي الدواسر .",
    image: "/mm1.jpeg",
  },
  {
    name: "صورة توضح اعمال تسليح الحديد  لخزان العلوي 1500م3",
    major: "الموقع: وادي الدواسر .",
    image: "/mm2.jpeg",
  },
  {
    name:'اعمال نجاره لشد الخزان العلوي',
    major: "الموقع: وادي الدواسر .",
    image: "/mm3.jpeg",
  },
 
  {
    name: "صورة بمدينة وادي الدواسر/ حي الشرافا توضح أعمال صب خرسانة دروة سطح الخزان العلوي بالشرافا",
    major: "الموقع: وادي الدواسر",
    image: "/mm4.png",
  },
 
   {
    name: "صورة بمدينة وادي الدواسر/حي الشرافا توضح اعمال الانشاءات في خزان الشرافا العلوي 1500م3",
    major: "الموقع:وادي الدواسر",
    image: "/networkwater.jpg",
  }, {
    name: "صورة بمدينة وادي الدواسر/حي الشرافا توضح اعمال الدهانات الخارجية وكتابة الشعار على خزان الشرافا",
    major: "الموقع:وادي الدواسر",
    image: "/mm5.jpeg",

  },
  {
    name: "صورة بمدينة وادي الدواسر/حي الشرافا توضح الشكل العام لخزان الشرافا العلوي بعد فك الشدة الخشبية",
    major: "الموقع: وادي الدواسر",
    image: "/mm6.jpg",
  },
  {
    name: "صورة بمدينة وادي الدواسر/حي الشرافا توضح الشكل زراعة الاشجار حول منطقة الخزان العلوي 1500م3 ",
    major: "الموقع: وادي الدواسر",
    image: "/mm7.jpg",
  },
  {
    name:"صورة بمدينة وادي الدواسر/ حي الشرافا توضح الخزان العلوي 1500م 3 بالشرافا",
    major: "الموقع: وادي الدواسر",
    image: "/mm8.png",
  },
  {
    name: "صورة توضح انهاء تركيب السلك الشائك في موقع الشرافا ",
    major: "الموقع: وادي الدواسر .",
    image: "/mm9.jpg",
  },
  {
    name: "اعمال خزان علوي في الدواسر",
    major: "الموقع: وادي الدواسر .",

    image: "/mm10.jpeg",
  },
  
  {
    name: " صورة بمدينة وادي الدواسر/ حي أم سمرة توضح أعمال صب خرسانة في جدران حلة الخزان العلوي " ,
    major: "الموقع: وادي الدواسر",
    image: "/mm11.png",
  },
  
  {
    name:"صورة بمدينة وادي الدواسر/ حي أم سمرة توضح أعمال الانشاءات في المشاية في أعلى خزان أم سمرة العلوي.",
    major: "الموقع: وادي الدواسر",
    image: "/mm12.png",
  },
  
  {
    name: "صورة توضح الصب بمضخه خرسانة خاصة في الحطة الاولى لجدران حلة الخزان العلوي 500م3",
    major: "الموقع: وادي الدواسر .",
    image: "/mm13.jpg",
  },
  {
    name:"صورة بمدينة وادي الدواسر/ حي ام سمرة توضح تشطيب واجهات الخزان العلوى بكسر الرخام في أم سمرة",
    major: "الموقع: وادي الدواسر",
    image: "/mm14.png",
  },


  {
    name: "صورة توضح اعمال لعزل الايبوكسي لحله خزان ام سمره ",
    major: "الموقع: وادي الدواسر .",
    image: "/mm15.jpg",
  },

  {
    name: "صورة بمدينة وادى الدواسر / حي ام سمرة توضح اختبار التسرب في حلة خزان علوى أم سمرة",
    major: "الموقع: وادى الدواسر.",
    image: "/mm16.jpg",
  },
  
  {
    name: "صورة بمدينة وادي الدواسر/حي ام سمرة توضح الشكل العام لخزان علوي ام سمرة",
    major: "الموقع: وادي الدواسر .",

    image: "/mm17.jpg",
  },
  {
    name: "صورة بمدينة وادي الدواسر/ حي ام سمرة توضح أعمال العزل الحرارى لسطح خزان علوى أم سمرة",
    major: "الموقع: وادي الدواسر",
    image: "/mm18.jpg",
  },
  


  {
    name:"حفر قواعد خزان ارضي",
    major: "الموقع: منطقة الدوادمي .",
    image: "/mm19.jpeg",
  },
  {
    name:"اعمال تسليح خزان ارضي ",
    major: "الموقع: منطقة الدوادمي .",
    image: "/mm20.jpeg",
  },
 
  {
    name: "بدايه المشروع لبنايه خزان ارضي .",
    major: "الموقع: منطقة الدوادمي .",
    image: "mm21.jpg",
  },
  {
    name: "صورة توضح وضع سلم داخل خزان ",
    major: "الموقع: منطقة الدوادمي .",
    image: "mm22.jpg",
  },

  {
    name:"اعمال تسليح خزان ارضي ",
    major: "الموقع: منطقة جيزان",
    image: "/mm23.jpeg",
  },
 
  {
    name: "اعمال صب الخرسانه العاديه للخزان الارضي ",
    major: "الموقع: منطقة جيزان",
    image: "/mm24.jpeg",
  },

  {
    name:"اعمال عزل لجدران الخزان الارضي",
    major: "الموقع: منطقة جيزان",
    image: "/mm25.jpeg",
  },
  {
    name:"صورة بمدینة وادي الدواسر/ حي أم سمرة توضح أعمال صب الخرسانة في أساسات محطة الضخ",
    major: "الموقع: وادي الدواسر",
    image: "/mm26.png",
  },
  {
    name: "صورة بمدينة وادي الدواسر/ حي أم سمرة توضح أعمال الانشاءات في مبنى محطة الضخ في أم سمرة",
    major: "الموقع: وادي الدواسر",
    image: "/mm27.png",
  },

  

  {
    name: "صورة بمدينة وادي الدواسر/حي ام سمرة توضح تشطيب مبنى ضخ ام سمرة",
    major: "الموقع: وادي الدواسر",
    image: "/jazan.jpg",
  },
  {
    name:"صورة بمدينة وادي الدواسر / حي ام سمرة توضح مبنى محطة الضخ بأم سمرة",
    major: "الموقع: وادي الدواسر",
    image: "/mm28.png",
  },
  {
    name:"sub base صورة بمدينة وادي الدواسر/ حي ام سمرة توضح أعمال رصيف خزان أرضى أم سمرة ودمك طبقة ",
    major: "الموقع: وادي الدواسر",
    image: "/mm29.png",
  },
  {
    name: "صورة توضح تركيب المضخات في مبنى الضخ",
    major: "الموقع: وادي الدواسر .",

    image: "/networkwater2.jpg",
  },
  {
    name: "صورة توضح تركيب خطوط الطرد من المضخات",
    major: "الموقع: وادي الدواسر .",

    image: "/mm30.jpeg",
  },
  
  {
    name: "اعمال فحص التربه",
    major: "الموقع: منطقة الدوادمي .",
    image: "/mm31.jpeg",
  },
  {
    name: "اعمال زفلته لمشروع الدوادمي",
    major: "الموقع: منطقة الدوادمي .",
    image: "/mm32.jpeg",
  },

  {
    name: "عملية تجديد المدرسة الابتدائية الخامسة والمدرسة الثانوية الثانية في المجمعة",
    major: "الموقع: محافظة المجمعة.",
    image:
      "https://static.srpcdigital.com/styles/1200x600/public/2022/09/15/1663251404074764900.jpg",
  },
  {
    name: "عملية بناء المدرسة الابتدائية الأولى في الشعبة",
    major: "الموقع: محافظة المجمعة.",
    image: "/school2.jpg",
  },
  
  {
    name: " تصريف الفيضانات ومنع مخاطرها في العيينة والجبيلية.",
    major: "الموقع: منطقة الحدود الشمالية.",
    image: "mm33.jpg",
  },


{
    name: "اعمال تركيب السلالم في الخزان الارضي",
    major: "الموقع: وادي الدواسر .",

    image: "/mm34.jpeg",
  },{
    name: "اعمال تركيب السلالم في الخزان الارضي",
    major: "الموقع: وادي الدواسر .",

    image: "/mm35.jpeg",
  },

  {
    name: "صورة بمدينة وادي الدواسر/ حي الشرافا توضح تركيب مضخة الري وتوصيلاتها فوق الخزان ألارضي بالشرافا",
    major: "الموقع: وادي الدواسر.",
    image: "/mm36.jpg",
  },
 
  {
    name:"صورة بمدینة وادي الدواسر/ حي الشرافا توضح أعمال لیاسة مبنى محطة الضخ",
    major: "الموقع: وادي الدواسر",
    image: "/mm37.png",
  },
 
 
  {
    name: "صورة بمدينة وادي الدواسر/ حي الشرافا توضح أعمال الدهانات الداخلية لمبنى محطة الضخ",
    major: "الموقع: وادي الدواسر",
    image: "/mm38.png",
  },
 

  {
    name: "صورة بمدينة وادي الدواسر/ حي الشرافا توضح أعمال مضخة الوقود وقفص حماية لها",
    major: "الموقع: وادي الدواسر",
    image: "/mm39.png",
  },


  {
    name: "صورة بمدينة وادي الدواسر/ حي ام سمرة توضح أعمال العزل بالايبوكسى في الخزان الارضي ام سمرة",
    major: "الموقع: وادي الدواسر",
    image: "/mm40.png",
  },
 
  {
    name:"صورة بمدینة وادي الدواسر/ حي الشرافا توضح أعمال بلاط سطح الخزان الأرضى بالشرافا",
    major: "الموقع: وادي الدواسر",
    image: "/mm41.png",
  },
 

  {
    name:"صورة بمدينة وادي الدواسر/ حي ام سمرة توضح لوحة البيان لخط الدكتايل قطر 400 مم",
    major: "الموقع: وادي الدواسر",
    image: "/mm42.png",
  },
  {
    name:"صورة بمدينة وادي الدواسر/ حي الشرافا توضح عمود ولوحة البيان لخط الدكتايل قطر 250مم",
    major: "الموقع: وادي الدواسر",
    image: "/mm43.png",
  },

  {
    name:"صورة بمدينة وادي الدواسر/ حي الشرافا توضح الموقع العام بالشرافا بعد انتهاء اعمال الاسفلت",
    major: "الموقع: وادي الدواسر",
    image: "/mm44.png",
  },
  {
    name: "تنفيذ خزانات المياه وشبكاتها للمجموعة 9/7 - رقم العقد [1]",
    major: "الموقع: منطقة نجران.",
    image: "/mm45.jpg",
  },
  {
    name: "تنفيذ خزانات المياه وشبكاتها للمجموعة 9/6 - رقم العقد [2]",
    major: "الموقع: منطقة نجران.",
    image: "/mm46.jpg",
  },
  {
    name:"صورة بمدينة وادى الدواسر / حي الشرافا توضح تركيب لوحات الكهرباء في مبنى الضخ",
    major: "الموقع: وادي الدواسر",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // ضبط الشفافية حسب الحاجة
  };

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.aboutbackground}>
          <div style={overlayStyle}></div>
          <div className={styles.textABOUT}>
            {/* <h3 className='texth1'>WHO WE ARE</h3> */}
            <h1 className={styles.textpABOUT}>المشاريع</h1>
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
          <p className={styles.title}>مشاريعنا</p>
        </div>

        <div style={{ padding: "50px" }}>
          <div id="about" className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative items-center justify-center overflow-hidden transition-shadow rounded-lg shadow-lg cursor-pointer group hover:shadow-xl hover:shadow-black/30"
                >
                  <div>
                    <img
                      className={styles.imgproject}
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div
                    className="inset-x-0 p-2 bg-white bottom-20"
                    style={{ direction: "rtl" }}
                  >
                    <h1 className="text-xl text-black font-dmserif">
                      {member.name}
                    </h1>
                    <p className="text-black text-l">{member.major}</p>
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
