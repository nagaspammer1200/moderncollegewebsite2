import React,{useContext,useEffect,useState} from 'react'
import { darkModeContext } from '../App';
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const CCF = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Central Computing Facility</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="nsscontainer p-2">
                <div className="mb-5 mt-3 ms-3 asmeimage"><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/ccf.jpg?alt=media&token=4dce06b8-2043-42c5-b7af-2b01ba01bafb" width="500px" height="450px" alt="Central Computing Facility" /></div>
                <div className={darkMode?"mb-2 text-info textcontainer4":"mb-2 textcontainer4"}><p>There are 7 server machines (2 IBM rack servers, 5 HP blade servers) in the server room, running on Windows Server and Centos Linux platforms. The lab facility contains 68 dual-bootable (Windows/Ubuntu) desktops. UPS support of 40 KVA (5*6 KVA + 10 KVA) is provided. The CCF manages the campus network, WiFi access and college website. It also provides support for DDFS (Digital Document Filing System) application in college office, QEEE activities, Centralized Allotment Process (CAP) of Commissioner of Entrance Examinations and collection of online feedback from students. Various online tests as part of campus recruitments and examinations organized by external agencies (Govt./Non Govt) such as Online PSC examinations , LLB entrance examinations etc are conducted at CCF. <br /><br />The college is a member of the National Knowledge Network (NKN) which is a high-speed network backbone interconnecting major educational and research institutions. NKN is maintained by National Informatics Network (NIC), Government of India. NKN provides a bandwidth of 1000 Mbps (1 Gbps) to the college. In addition, a 16 Mbps internet connection has been taken from BSNL. This connection is being maintained as a backup to be used in the rare event of an NKN connection failure. <br /><br />The network traffic between the college intranet and the internet is monitored and controlled through a firewall. Cisco routers and switches are used at the backbone level of the intranet. A fiber-optic backbone has been laid to provide connectivity to various parts of the campus. <br /><br />The campus is completely connected by WiFi. A Ruckus ZoneDirector 3000 WiFi controller kept in the server room manages the WiFi access. Access points have been deployed throughout the campus so that online facilities like e-journals (which are provided on IP-based access) can be accessed from anywhere within the college premises. <br /><b>AN internet Lab has been set up to supplement internet access facilities in the campus. This lab is also being used as the Language Lab for training first-year students. This lab has a server machine (Intel Xeon Octacore), 30 desktops, required software and accessories. <br /><br />A core team of faculty and staff from IT department is managing and maintaining the day to day functionalities of CCF</b></p></div>
                <div className={darkMode?"text-success mb-5":"text-primary mb-5"}><h3>Equipments and Softwares</h3></div>
                <div className="table-responsive tablecontainer mb-5">
                    <table className={darkMode?"table table-striped table-dark":"table table-striped"}>
                        <thead>
                            <tr>
                            <th scope="col" colspan="2" className="text-center">Sl. No</th>
                            <th scope="col" colspan="2" className="text-center">ITEM</th>
                            <th scope="col" colspan="2" className="text-center">SPECIFICATION</th>
                            <th scope="col" colspan="2" className="text-center">QTY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2" rowspan="5"
                                >1</th>
                                <td className="p-3" colspan="2" rowspan="5">Desktop</td>
                                <td className="p-3" colspan="2">HCL Desktop pro 8300 Intel core i5, 4GB, DDR3, 500 GB SATA, HDD DVD ROM, TFT Monitor 18.5”</td>
                                <td className="p-3" colspan="2">38</td>
                            </tr>
                            <tr>
                                <td className="p-3" colspan="2">DELL OPTIPLEX i7 ,4GB, 500 GB, Monitor 19.5” E20154 Desk Top Monitor</td>
                                <td className="p-3" colspan="2">21</td>
                            </tr>
                            <tr>
                                <td className="p-3" colspan="2">HP 280 GI MI Business Desk Top Intel core i5, 459 OS, 4GB, DDR3 / 500GB /Windows 8, 18.5” TFT</td>
                                <td className="p-3" colspan="2">6</td>
                            </tr>
                            <tr>
                                <td className="p-3" colspan="2">HP 8100 Desk Top Intel core i5, 2GB, 320 GB SATA HDD, DVD RW, Keyboard ,optical mouse, Windows 7 Professional with LCD Monitor 18.5”</td>
                                <td className="p-3" colspan="2">2</td>
                            </tr>
                            <tr>
                                <td className="p-3" colspan="2">Desktop HP COMPAQ 8200 ELITE MT PC, intel core i5, 2 GB DDR3 RAM, 320 GB SATA HDD, DVD RW, Keyboard, optical mouse, Windows 7 Professional , 3 Yr warranty with LCD monitor (Monitor 18.5", TFT, Black)</td>
                                <td className="p-3" colspan="2">1</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" 
                                >2</th>
                                <td className="p-3" colspan="2">Laptop</td>
                                <td className="p-3" colspan="2">HP Probook 4431S</td>
                                <td className="p-3" colspan="2">2</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" 
                                >3</th>
                                <td className="p-3" colspan="2">OS</td>
                                <td className="p-3" colspan="2">Windows 7 & Windows 10 Pro, Ubuntu 14.04& 16.04	</td>
                                <td className="p-3" colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" 
                                >1</th>
                                <td className="p-3" colspan="2">Desktop</td>
                                <td className="p-3" colspan="2">HCL Desktop pro 8300 Intel core i5, 4GB, DDR3, 500 GB SATA, HDD DVD ROM, TFT Monitor 18.5”</td>
                                <td className="p-3" colspan="2">38</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" 
                                >4</th>
                                <td className="p-3" colspan="2">Projector</td>
                                <td className="p-3" colspan="2">SANYO PLC XG 106</td>
                                <td className="p-3" colspan="2">1</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" rowspan="2"
                                >5</th>
                                <td className="p-3" colspan="2" rowspan="2">Network Switch</td>
                                <td className="p-3" colspan="2">D-Link :- DES- 1024D (24 port)</td>
                                <td className="p-3" colspan="2">2</td>
                            </tr>
                            <tr>
                                <td className="p-3" colspan="2">D-Link :- DES- 3026 (24 port)</td>
                                <td className="p-3" colspan="2">2</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" rowspan="3"
                                >6</th>
                                <td className="p-3" colspan="2" rowspan="3">PA System</td>
                                <td className="p-3" colspan="2">Ahuja Model No. TZA 2000</td>
                                <td className="p-3" colspan="2">1</td>
                            </tr>
                            <tr>
                                <td className="p-3" colspan="2">Fall ceiling speakers</td>
                                <td className="p-3" colspan="2">6</td>
                            </tr>
                            <tr>
                                <td className="p-3" colspan="2">Amplifier includes Goose microphone</td>
                                <td className="p-3" colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2" 
                                >7</th>
                                <td className="p-3" colspan="2">UPS</td>
                                <td className="p-3" colspan="2">Emerson 5 KVA Single phase</td>
                                <td className="p-3" colspan="2">2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default CCF

