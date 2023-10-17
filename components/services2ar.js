import { useRouter } from 'next/router'; // استيراد الخطاف useRouter

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/client.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const teamMembers = [
    {
        name: 'شركة الفنار',
        image: 'https://www.logolynx.com/images/logolynx/27/27b0f016d6b2c7a260864d28e93bc68c.jpeg',
    },
    {
        name: 'الإدارة العامة للمياه - منطقة الرياض',
        image: 'https://th.bing.com/th/id/OIP.sXcUPmrkujAyla6_pgKr0gHaFj?pid=ImgDet&rs=1',
    },
    {
        name: 'الإدارة العامة للتعليم - منطقة الرياض',
        image: 'https://th.bing.com/th/id/OIP.kbrmUGfM63GLBJeF4a24ugHaEK?pid=ImgDet&rs=1',
    },
    {
        name: 'الشركة الوطنية للمياه',
        image: 'https://th.bing.com/th/id/R.8efed251b66a0f717ff4fca73fb112f0?rik=6rnxRDNYKvB9GQ&riu=http%3a%2f%2falkhorayef.com%2fUploads%2fPartners%2f2015013021290961220140626112433811_________________.jpg&ehk=BVsZXS2DdpH3eObQMbNzWvBgEe98xgM9Y%2bF2Byk3Iqc%3d&risl=&pid=ImgRaw&r=0',
    },
    {
        name: 'أمانة العيينة والجبيلية',
        image: 'https://th.bing.com/th/id/OIP.gFVDvNdfnW3gX2lZQ2YSmgAAAA?pid=ImgDet&rs=1',
    },
];

const ClientPage2 = () => {
    const router = useRouter();

    return (
        <div style={{ paddingTop: '20px', paddingBottom: '30px', backgroundColor: 'whitesmoke', paddingLeft: '50px', paddingRight: '50px' }}>
            <div className={styles.text}>
                <h2 className={styles.title__line}>عملاؤنا <span className={styles.text__theme}>المميزون</span></h2>
                <p className={styles.titlep}>عملاءنا: شركاءنا في النجاح ورؤيتنا للمستقبل</p>
            </div>
            <div style={{ padding: '10px', marginTop: '10px', }} className={styles.contain}>
                <div id='about' className="flex items-center justify-center ">
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-5" >
                        {teamMembers.map((member, index) => (
                            <div key={index} className="relative items-center justify-center" >
                                <div className={styles.clientDiv}>
                                    <img className={styles.clientImage} src={member.image} alt={member.name} />
                                </div>
                                <div className="absolute m-5 text-center">
                                    {/* <h1 className={styles.clientText}>{member.name}</h1> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClientPage2;
