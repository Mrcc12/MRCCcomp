import Footer from "@/components/footerar";
import Navbar from "@/components/headerEquipmentsAr";
import styles from "../styles/equipments.module.css";
import React, { useEffect, useState } from "react";

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
            <h1 className={styles.textpABOUT}>المعدات</h1>
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
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m20.png"
            alt="Image 1"
          />
             <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m21.png"
            alt="Image 1"
          />
             <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m22.png"
            alt="Image 1"
          />
             <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m23.png"
            alt="Image 1"
          />
             <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m24.png"
            alt="Image 1"
          />
             <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m25.png"
            alt="Image 1"
          />   <img
          className={styles.gallaryImg}
          style={{
            transform: `perspective(600px) rotateY(${
              isHovered ? "10deg" : "0deg"
            })`,
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src="/m26.png"
          alt="Image 1"
        />   <img
        className={styles.gallaryImg}
        style={{
          transform: `perspective(600px) rotateY(${
            isHovered ? "10deg" : "0deg"
          })`,
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src="/m27.png"
        alt="Image 1"
      />   <img
      className={styles.gallaryImg}
      style={{
        transform: `perspective(600px) rotateY(${
          isHovered ? "10deg" : "0deg"
        })`,
        transition: "transform 0.3s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      src="/m28.png"
      alt="Image 1"
    />   <img
    className={styles.gallaryImg}
    style={{
      transform: `perspective(600px) rotateY(${
        isHovered ? "10deg" : "0deg"
      })`,
      transition: "transform 0.3s ease-in-out",
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    src="/m29.png"
    alt="Image 1"
  />  
   <img
  className={styles.gallaryImg}
  style={{
    transform: `perspective(600px) rotateY(${
      isHovered ? "10deg" : "0deg"
    })`,
    transition: "transform 0.3s ease-in-out",
  }}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  src="/m30.png"
  alt="Image 1"
/>  
 <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m31.png"
            alt="Image 1"
          />
             <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m32.png"
            alt="Image 1"
          />   <img
          className={styles.gallaryImg}
          style={{
            transform: `perspective(600px) rotateY(${
              isHovered ? "10deg" : "0deg"
            })`,
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src="/m33.png"
          alt="Image 1"
        />

          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m1.png"
            alt="Image 1"
          />

          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m2.png"
            alt="Image 1"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m3.png"
            alt="Image 1"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m4.png"
            alt="Image 1"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m5.png"
            alt="Image 1"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m6.png"
            alt="Image 1"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m7.png"
            alt="Image 1"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m8.png"
            alt="Image 1"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m9.png"
            alt="Image 1"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m10.png"
            alt="Image 1"
          />
          {/* <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m11.png"
            alt="Image 1"
          /> */}
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/m12.png"
            alt="Image 1"
          />

          {/* <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img1.jpg"
            alt="Image 1"
          /> */}
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img2.jpg"
            alt="Image 2"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img3.jpg"
            alt="Image 3"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img6.jpg"
            alt="Image 3"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="https://i.pinimg.com/564x/fc/1d/fc/fc1dfc3bea02e364712df4490bbaa484.jpg"
            alt="Image 3"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="https://i.pinimg.com/564x/d2/2e/cf/d22ecfef0746678ff6fbe39007420839.jpg"
            alt="Image 2"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img4.jpg"
            alt="Image 1"
          />

          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/images/img5.jpg"
            alt="Image 2"
          />

          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="https://i.pinimg.com/564x/1e/ca/bf/1ecabf935233683f3803c0042bcf1837.jpg"
            alt="Image 3"
          />
          <img
            className={styles.gallaryImg}
            style={{
              transform: `perspective(600px) rotateY(${
                isHovered ? "10deg" : "0deg"
              })`,
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="https://i.pinimg.com/564x/88/dc/5d/88dc5d678b1ae37855e43b893d9bc177.jpg"
            alt="Image 3"
          />
          {/* Add more images as needed */}
        </section>
      </main>
      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};
export default Equipmentspage;
