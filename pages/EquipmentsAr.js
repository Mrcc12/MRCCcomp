import Footer from "@/components/footerar";
import Navbar from "@/components/headerEquipmentsAr";
import styles from "../styles/equipments.module.css";
import React, { useEffect, useState } from 'react';

const Equipmentspage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
            <h1 className={styles.textpABOUT}>معداتنا</h1>
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
          <p className={styles.title}>المعدات</p>
        </div>
        <section className={styles.sectionTable}>
          <div className={styles.divTable}>
            <div className={styles.divTable2}>
              <div className={styles.container}>
                <div className={styles.alltabel}>
                  <table className={styles.tablel}>
                    <thead className={styles.thead}>
                      <tr className={styles.tr}>
                        <th className={`${styles.th} wpdt-fs-000018 wpdt-bc-0274BE wpdt-tc-FFFFFF`}>
                          رقم
                        </th>
                        <th className={`${styles.thd} wpdt-fs-000018 wpdt-bc-0274BE wpdt-tc-FFFFFF`}>
                          الوصف
                        </th>
                        <th className={`${styles.th} wpdt-fs-000018 wpdt-bc-0274BE wpdt-tc-FFFFFF`}>
                          الكمية
                        </th>
                      </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                      <tr className={`${styles.row3_even}`}>
                        <td className={styles.td}>01</td>
                        <td className={styles.td}>كرين 100 طن</td>
                        <td className={styles.td}>1</td>
                      </tr>
                      <tr className={`${styles.row3_odd}`}>
                        <td className={styles.td}>02</td>
                        <td className={styles.td}>كرين 70 طن</td>
                        <td className={styles.td}>1</td>
                      </tr>
                      <tr className={`${styles.row3_even}`}>
                        <td className={styles.td}>03</td>
                        <td className={styles.td}>كرين 50 طن</td>
                        <td className={styles.td}>4</td>
                      </tr>
                      <tr className={`${styles.row3_odd}`}>
                        <td className={styles.td}>04</td>
                        <td className={styles.td}>كرين 25 طن</td>
                        <td className={styles.td}>1</td>
                      </tr>
                      <tr className={`${styles.row3_even}`}>
                        <td className={styles.td}>06</td>
                        <td className={styles.td}>شيول حفار</td>
                        <td className={styles.td}>7</td>
                      </tr>
                      <tr className={`${styles.row3_odd}`}>
                        <td className={styles.td}>05</td>
                        <td className={styles.td}>بوكلين حفار و دقاق</td>
                        <td className={styles.td}>8</td>
                      </tr>
                      <tr className={`${styles.row3_even}`}>
                        <td className={styles.td}>07</td>
                        <td className={styles.td}>شيول لودر</td>
                        <td className={styles.td}>3</td>
                      </tr>
                      <tr className={`${styles.row3_odd}`}>
                        <td className={styles.td}>08</td>
                        <td className={styles.td}>قلاب</td>
                        <td className={styles.td}>3</td>
                      </tr>
                      <tr className={`${styles.row3_even}`}>
                        <td className={styles.td}>09</td>
                        <td className={styles.td}>قصاصه اسفلت</td>
                        <td className={styles.td}>5</td>
                      </tr>
                      <tr className={`${styles.row3_odd}`}>
                        <td className={styles.td}>10</td>
                        <td className={styles.td}>فراده اسفلت</td>
                        <td className={styles.td}>2</td>
                      </tr>
                      <tr className={`${styles.row3_even}`}>
                        <td className={styles.td}>11</td>
                        <td className={styles.td}>رصاصه مختلفه</td>
                        <td className={styles.td}>7</td>
                      </tr>
                      <tr className={`${styles.row3_odd}`}>
                        <td className={styles.td}>12</td>
                        <td className={styles.td}>رجاج تربة</td>
                        <td className={styles.td}>2</td>
                      </tr>
                      <tr className={`${styles.row3_even}`}>
                        <td className={styles.td}>13</td>
                        <td className={styles.td}>تانك مياه سعة 14 م3</td>
                        <td className={styles.td}>1</td>
                      </tr>
                    </tbody>
                  </table>
                  <style id="wpdt-custom-style-1">
                    {`
                    .wpdt-fs-000018 {
                      font-size: 30px !important;
                    }
                    .wpdt-bc-0274BE {
                      background-color: #fcc236 !important;
                    }
                    .wpdt-tc-FFFFFF {
                      color: #FFFFFF !important;
                    }
                  `}
                  </style>
                </div>
              </div>
            </div>
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
          <p className={styles.title}>المعرض</p>
        </div>
        <section className={styles.gallary}>

          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img1.jpg" alt="Image 1" />
          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img2.jpg" alt="Image 2" />
          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img3.jpg" alt="Image 3" />
          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img6.jpg" alt="Image 3" />
          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="https://i.pinimg.com/564x/fc/1d/fc/fc1dfc3bea02e364712df4490bbaa484.jpg" alt="Image 3" />
          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="https://i.pinimg.com/564x/d2/2e/cf/d22ecfef0746678ff6fbe39007420839.jpg" alt="Image 2" />
          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img4.jpg" alt="Image 1" />


          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img5.jpg" alt="Image 2" />


          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="https://i.pinimg.com/564x/1e/ca/bf/1ecabf935233683f3803c0042bcf1837.jpg" alt="Image 3" />
          <img className={styles.gallaryImg} style={{

            transform: `perspective(600px) rotateY(${isHovered ? '10deg' : '0deg'})`,
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="https://i.pinimg.com/564x/88/dc/5d/88dc5d678b1ae37855e43b893d9bc177.jpg" alt="Image 3" />
          {/* Add more images as needed */}
        </section>
      </main>
      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};
export default Equipmentspage;
