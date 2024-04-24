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

const CL = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);


  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Central Library</h2></div>
          <div className={darkMode?"d-flex personcontainer2 border-top border-1 border-primary bg-dark":"d-flex personcontainer2"}>
            <div className="nsscontainer p-2">
                <div className={darkMode?"mb-5 mt-3 gap-5 nsscontainer1 text-info":"mb-5 mt-3 gap-5 nsscontainer1"}>
                    <div><p>In any academic institution Library plays an important role in the dissemination of knowledge. In fact, the ambience of the library reflects the quality of the education imparted by the Government Engineering College ,Barton Hill (GECBH) Campus has recognized the importance of the academic vibrations required in the library and has been growing in this direction, right from its very inception. The current location of the Central Library is well planned. The well stacked racks are user friendly. A special zone has been carved out for the digital library. Our college was established and functioned in the academic year 1999-2000, with Central Technical library.</p></div>
                    <div><img src="library.jpg" width="250px" height="200px" alt="Student Looking for Books in the College Library" /></div>
                </div>
                <div className="table-responsive tablecontainer">
                    <table className={darkMode?"table table-striped table-dark":"table table-striped"}>
                        <thead>
                            <tr>
                            <th scope="col" colspan="2" className="text-center">Library</th>
                            <th scope="col" colspan="1" className="text-center">Collection</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">Books</th>
                                <td className="p-3">26454</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">E-Journals</th>
                                <td className="p-3">7</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">E-Books</th>
                                <td className="p-3">133+</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Periodicals</th>
                                <td className="p-3">14</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Bound Volumes of Journals</th>
                                <td className="p-3">110</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Compact discs</th>
                                <td className="p-3">500+</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Classification Scheme	</th>
                                <td className="p-3">DDC</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Cataloguing Scheme</th>
                                <td className="p-3">AACR II</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">News Papers</th>
                                <td className="p-3">7</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Library Software</th>
                                <td className="p-3">LIFSOFT</td>&nbsp;
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">E-mail ID</th>
                                <td className="p-3">gecblibrary@gmail.com/library@gecbh.ac.in</td>&nbsp;
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={darkMode?"text-success mb-3":"text-primary mb-3"}><h3>Members of Library Advisory Committee GECBH</h3></div>
                <div className="table-responsive tablecontainer mb-5">
                    <table className={darkMode?"table table-striped table-dark":"table table-striped"}>
                        <thead>
                            <tr>
                            <th scope="col" colspan="2" className="text-center">Sl. No</th>
                            <th scope="col" colspan="2" className="text-center">Name</th>
                            <th scope="col" colspan="2" className="text-center">Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">1</th>
                                <td className="p-3" colspan="2"></td>
                                <td className="p-3" colspan="2">Principal (Chair Person)</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">2</th>
                                <td className="p-3" colspan="2">Latha N.</td>
                                <td className="p-3" colspan="2">Scientific Information Officer (Convener)</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">3</th>
                                <td className="p-3" colspan="2">Dr. Rajesh N.R</td>
                                <td className="p-3" colspan="2">HOD- Mechanical Engineering</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">4</th>
                                <td className="p-3" colspan="2">Dr. Dinesh Pai</td>
                                <td className="p-3" colspan="2">HOD- Electrical Engineering</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">5</th>
                                <td className="p-3" colspan="2">Dr. V. Suresh Babu</td>
                                <td className="p-3" colspan="2">HOD-Electronics and Communication Engineering</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">6</th>
                                <td className="p-3" colspan="2">Dr. Jaya V.</td>
                                <td className="p-3" colspan="2">HOD- Civil Engineering</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">7	</th>
                                <td className="p-3" colspan="2">Dr. Balu John</td>
                                <td className="p-3" colspan="2">HOD- Information Technology</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">8</th>
                                <td className="p-3" colspan="2">Smt. Neena Sugathen</td>
                                <td className="p-3" colspan="2">Teacher in Charge/Physics</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">9</th>
                                <td className="p-3" colspan="2">S.S. Anithakumari</td>
                                <td className="p-3" colspan="2">Teacher in charge/Mathematics</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">10</th>
                                <td className="p-3" colspan="2">Dr. Ajith Dain Thomas</td>
                                <td className="p-3" colspan="2">Teacher in charge/Chemistry</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">11</th>
                                <td className="p-3" colspan="2">Mr. Jolly Joseph</td>
                                <td className="p-3" colspan="2">Administrative Officer (As Purchase Head)</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">12</th>
                                <td className="p-3" colspan="2">Student Member</td>
                                <td className="p-3" colspan="2">General Secretary, College Union</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={darkMode?"text-success mb-3":"text-primary mb-3"}><h3>Library Hours</h3></div>
                <div className={darkMode?"text-black bg-warning mb-3 p-5 text-center textcontainer4":"text-white bg-primary mb-3 p-5 text-center textcontainer4"}><p>Monday - Saturday 9.00 AM to 6.00 PM <br />For the duration of Vacations 9.00 AM to 4.00 PM</p></div>
                <div className={darkMode?"text-success mb-3":"text-primary mb-3"}><h3>Membership</h3></div>
                <div className={darkMode?"mb-5 text-info textcontainer4":"mb-5 textcontainer4"}><p>All students and Teaching, and Non-teaching staffs working are members of our library. Our college Identity card issued from our library, RFID tag of the readers is mounted on the College Identity card, so that it can be used for twin purposes i.e. Identity and library membership card. Application should be submitted to the Circulation Section after obtaining the Recommendation of the concerned Head of the Department/Principal for membership. <br /><br />A Non Liability Certificate is to be obtained by the students from the College Librarian before the commencement of their University examinations. Staff members, both teaching and non-teaching, are required to obtain the Certificate before their leaving the institution or before their retirement from the service whichever is earlier. <br /><br />n case Identity card has lost, the matter must be reported to the library with an application obtaining the Recommendation of the concerned Head of the Department/Principal and member have to pay Rs. 100 in PTA Office.</p></div>
                <div className={darkMode?"text-success mb-3":"text-primary mb-3"}><h3>Library Hours</h3></div>
                <div className={darkMode?"mb-5 text-info textcontainer4":"mb-5 textcontainer4"}><p><b>National Service Scheme</b> is a student – centered programme and it is complementary to education. It is a noble experiment in academic extension. It inculcates the spirit of voluntary work among students and teachers through sustained community interaction. It brings our academic institutions closer to the society. It is a link between the campus and community, the college and village, knowledge and action. The overall aim of NSS is the Personality Development of students through community service. It gives an extension dimension to Higher Education system and orients the student youth to community service.</p></div>
                <div className={darkMode?"mb-5 text-info":"mb-5"}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Technical Section
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p> Our Library has a collection of more than twenty thousand books. An amount of around Rs. 25, 00,000.00 is spent each year on procurement of various kinds of information sources, such as Books, Print Journals, e-journals CDs etc. All the documents are procured on the basis of recommendations received from Heads of the Departments and users. This section is responsible for the technical process of the documents like Acessioning, Classification, Cataloguing and indexing. The following Standards are used to carry out the works Cataloguing: Anglo American cataloguing Rules II (with slight modifications) Classification: Dewey Decimal Scheme of Classification In the shelves we arrange and maintain the documents in the classNameified order.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Circulation Section
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>Open Access system is followed. All the processes and services are carried out using computers. LIBSOFT an integrated Library Management Software with advanced search options, used in the library for its automated activities with RFID solutions. Under this section the job of issue and return (circulation) of documents, renewal of loan period, fine collection for delayed return of books and membership management functions, and also possible to reserve a book which one is on loan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Reference Section
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>This section maintains a good collection of reference sources that includes Encyclopaedias‟, Handbooks, Dictionaries, Reports, Theses, Dissertations, maps, Text books and costly subject books etc.The periodicals collection forms a major reading and reference source for the College campus. In different disciplines a good number of journals received gratis. In addition a good number of popular magazines are also subscribed, bounded and kept here for reference. Library subscribes Seven Newspapers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Book Bank Section
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>In this book bank system we have a very good collection of the latest text books purchased under the SC/ST Book Bank scheme financial support received from the Govt. of Kerala. Book bank facility is only available to students belonging to SC/ST community.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Digital Library(Learning Resource Centre)
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>A fully automated modern Learning Resource Centre (LRC), established with a view to enrich an outstanding learning resource materials catering to the ever growing and uncompromising information and intellectual requirements of the students, faculty, and researchers. Internet browsing, e-journal and e-books services are provided as a part of this section. The following e-Journals are available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={darkMode?"text-success mb-3":"text-primary mb-3"}><h3>Library Services</h3></div>
                <div className="table-responsive tablecontainer mb-5">
                    <table className={darkMode?"table table-striped table-dark":"table table-striped"}>
                        <thead>
                            <tr>
                            <th scope="col" colspan="2" className="text-center">Sl. No</th>
                            <th scope="col" colspan="2" className="text-center">Name of e-journal packages</th>
                            <th scope="col" colspan="2" className="text-center">Publisher</th>
                            <th scope="col" colspan="2" className="text-center">No of journal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">1</th>
                                <td className="p-3" colspan="2">Science Direct Package -2018 Engineering +Computer Science Package</td>
                                <td className="p-3" colspan="2">Elsevier</td>
                                <td className="p-3" colspan="2">275</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">2</th>
                                <td className="p-3" colspan="2">Springer EEC , packages-2018</td>
                                <td className="p-3" colspan="2">Springer</td>
                                <td className="p-3" colspan="2">149</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">3</th>
                                <td className="p-3" colspan="2">Springer ME package-2018</td>
                                <td className="p-3" colspan="2">Springer	</td>
                                <td className="p-3" colspan="2">49</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">4</th>
                                <td className="p-3" colspan="2">Springer CIVIL package-2018</td>
                                <td className="p-3" colspan="2">Springer	</td>
                                <td className="p-3" colspan="2">43</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">5</th>
                                <td className="p-3" colspan="2">ASCE</td>
                                <td className="p-3" colspan="2"></td>
                                <td className="p-3" colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">6</th>
                                <td className="p-3" colspan="2">ASME</td>
                                <td className="p-3" colspan="2"></td>
                                <td className="p-3" colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">7</th>
                                <td className="p-3" colspan="2">IEEE</td>
                                <td className="p-3" colspan="2"></td>
                                <td className="p-3" colspan="2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={darkMode?"mb-5 text-info":"mb-5"}>
                    <div className="accordion" id="accordionExample1">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                Book Lending Services
                            </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>Book lending service is provided to all the members of the library. A B.Tech student member is entitled to get three books and PG students and Research Scholars can avail five books at a time. A teaching staff member is entitled to get eight books at a time and a non teaching staff member can avail four books at a time. Under this section the job of issue and return (circulation) of documents, renewal of loan period, fine collection for delayed return of books and membership management functions, and also possible to reserve a book which one is on loan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                Renewal and Reservation Services
                            </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>The period of loan will be 14 days including the day of issue for all users. A book can be renewed for further one term, if the book is not being reserved by any one. Thus a user can keep a book for a maximum of one month. If a member wishes to keep the book after one renewal he/she has to present the book in the library and get it reissued (if available), after keeping the book in the Stack room for one week or the report of the Scientific Information Officer. Also provide a user can reserve a book, which one is borrowed another one.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Reference Services
                            </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>The library maintains a good Reference Collection. It includes valuable reference sources like Encyclopaedias, Handbooks, Multilingual dictionaries, Text books etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                Internet/ Digital Library Services
                            </button>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>Welcome to the Knowledge portal of Government Engineering College, Barton hill. Online Information Resources are vital for academic and research institutes in today‟s knowledge economy. Central library provides access to a variety of electronic resources such as e-journals, e-books and databases. Browsing facility is available in the Library for staff and students free of cost.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                Digital Library(Learning Resource Centre)
                            </button>
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>A fully automated modern Learning Resource Centre (LRC), established with a view to enrich an outstanding learning resource materials catering to the ever growing and uncompromising information and intellectual requirements of the students, faculty, and researchers. Internet browsing, e-journal and e-books services are provided as a part of this section. The following e-Journals are available.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                Reprographic Services
                            </button>
                            </h2>
                            <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>The Library provides photocopying facilities allowed within the copyright rules. An amount of one rupee per page is charged for the facility. Colour photocopying and printouts from WhatsApp, pen drives etc are done and the charges such facilities depends upon the device and nature of documents.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                User Awareness Programme
                            </button>
                            </h2>
                            <div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>GECB library takes an active part in the orientation programme organized by the institute for the benefit of new students in the beginning of academic year. They are taken around the library to familiarize them with various resources and services available and to learn how to use a particular resource like OPAC, e-journals, e-books, databases etc. <br />Central Library also organizes training, workshops and seminars etc. for library and information professionals working and students to help them update their knowledge and skills. <br />Recently we conduct a one day seminar on “”How to use e-Resources to enrich the study & Research “” and” Plagiarism” for students and staffs of our campus, with Department of Translational Engineering i our college and also conduct, Two days workshop on “”D-Space customisation -National digital Library”” in collaboration with NDL Project,IIT,Khargpur , KEDES and P N Panicker Foundation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                OPAC(Online Public Access Catalogue)
                            </button>
                            </h2>
                            <div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>The Library provides photocopying facilities allowed within the copyright rules. An amount of one rupee per page is charged for the facility. Colour photocopying and printouts from WhatsApp, pen drives etc are done and the charges such facilities depends upon the device and nature of documents.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                Book Bank Scheme
                            </button>
                            </h2>
                            <div id="collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div className={darkMode?"text-info textcontainer4 accordion-body bg-dark":"textcontainer4 accordion-body"}>
                                <p>Book Bank titles are issued for one full semester which has to be returned within a week after the end of exams enabling them to get the books for next semester or they wish. Book Bank books issued for PG & UG courses: One set( 6 Books) to one student individually.</p>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default CL

