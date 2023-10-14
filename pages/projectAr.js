import React from "react";
import Footer from "@/components/footerar";
import Navbar from "@/components/headerProjectAr";
import styles from "../styles/project.module.css";

const teamMembers = [
  {
    name: "صورة توضح الصب بمضخه خرسانة خاصة في الحطة الاولى لجدران حلة الخزان العلوي 500م3",
    major: "الموقع: وادي الدواسر .",
    image: "/خز.jpg",
  },
  {
    name: "صورة توضح اعمال عزل قواعد خزان علوي 1500 م3 في الشارفه",
    major: "الموقع: وادي الدواسر .",
    image: "/قواعد.jpeg",
  },
  {
    name: "صورة توضح اعمال تسليح الحديد  لخزان العلوي 1500م3",
    major: "الموقع: وادي الدواسر .",
    image: "/تسليح.jpeg",
  },

  {
    name: " تصريف الفيضانات ومنع مخاطرها في العيينة والجبيلية.",
    major: "الموقع: منطقة الحدود الشمالية.",
    image: "1مشروع.jpg",
  },
  {
    name: "صورة بمدينة وادي الدواسر/ حي ام سمرة توضح أعمال تمديد الخط الخارج من الخزان ألارضي إلى محطة الضخ في أم سمرة",
    major: "الموقع: وادي الدواسر.",
    image: "/water.jpg",
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
    name: "بدايه المشروع لبنايه خزان ارضي .",
    major: "الموقع: منطقة الدوادمي .",
    image: "ارضي.jpg",
  },
  {
    name: "صورة توضح وضع سلم داخل خزان ",
    major: "الموقع: منطقة الدوادمي .",
    image: "سلم.jpg",
  },
  {
    name: "تنفيذ خزانات المياه وشبكاتها للمجموعة 9/7 - رقم العقد [1]",
    major: "الموقع: منطقة نجران.",
    image: "/فيضان.jpg",
  },
  {
    name: "صورة توضح تركيب خطوط الطرد من المضخات",
    major: "الموقع: وادي الدواسر .",

    image: "/الطرد.jpeg",
  },
  {
    name: "صورة توضح اعمال لعزل الايبوكسي لحله خزان ام سمره ",
    major: "الموقع: وادي الدواسر .",
    image: "/دوامي3.jpg",
  },
  {
    name: "تنفيذ خزانات المياه وشبكاتها للمجموعة 9/6 - رقم العقد [2]",
    major: "الموقع: منطقة نجران.",
    image: "/خزان2.jpg",
  },
  {
    name: "صورة توضح انهاء تركيب السلك الشائك في موقع الشرفا ",
    major: "الموقع: وادي الدواسر .",
    image: "/شيك.jpg",
  },
  {
    name: "صورة بمدينة وادى الدواسر / حي ام سمرة توضح اختبار التسرب في حلة خزان علوى أم سمرة",
    major: "الموقع: وادى الدواسر.",
    image: "/دوادمي2.jpg",
  },
  {
    name: "صورة توضح تركيب لوحات الكهرباء في مبنى الضخ في حي الشرافا",
    major: "الموقع: وادي الدواسر .",
    image: "/لوحه.jpg",
  },
  {
    name: "صورة توضح تركيب المضخات في مبنى الضخ",
    major: "الموقع: وادي الدواسر .",

    image: "/networkwater2.jpg",
  },
  {
    name: "صورة بمدينة وادي الدواسر/حي ام سمرة توضح الشكل العام لخزان علوي ام سمرة",
    major: "الموقع: وادي الدواسر .",

    image: "/خزان علوي ام سمرة.jpg",
  },
  {
    name: "صورة بمدينة وادي الدواسر/ حي الشرافا توضح تركيب مضخة الري وتوصيالتها فوق الخزان ألارضي بالشرافا",
    major: "الموقع: وادي الدواسر.",
    image: "/دوادمي1.jpg",
  },
  {
    name: "عملية اضافة مظلات المجموعة  30",
    major: "الموقع: مدينة الرياض.",
    image: "/مضلات.jpg",
  },

  {
    name: "صورة بمدينة وادي الدواسر/حي الشرافا توضح اعمال الدهانات الخارجية وكتابة الشعار على خزان الشرافا",
    major: "الموقع:وادي الدواسر",
    image: "/networkwater.jpg",
  },
  {
    name: "صورة بمدينة وادي الدواسر/حي الشرافا توضح الشكل زراعة الاشجار حول منطقة الخزان العلوي 1500م3 ",
    major: "الموقع: وادي الدواسر",
    image: "/دواسي.jpg",
  },
  {
    name: "صورة بمدينة وادي الدواسر/حي الشرافا توضح الشكل العام لخزان الشرافا العلوي بعد فك الشدة الخشبية",
    major: "الموقع: وادي الدواسر",
    image: "/فك الشدة الخشبية.jpg",
  },
  {
    name: "صورة بمدينة وادي الدواسر/حي ام سمرة توضح تشطيب مبنى ضخ ام سمرة",
    major: "الموقع: وادي الدواسر",
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
