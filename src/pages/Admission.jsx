import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const Admission = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary p-3 text-white"><h2>Admission</h2></div>
          <div className="d-flex personcontainer3 p-3">
            <div className="p-3 ms-4">
                <div className="text-primary mb-3 ms-3"><h3>B.Tech Admission 2023 - Spot Admission on 15-09-2023</h3></div>
                <div className="bg-primary mb-3 p-3 text-white"><h4>Venue : Conference Hall, Main Building, GEC Barton Hill</h4></div>
                <div className="bg-primary p-3 mb-3 text-white"><h4>Time of Registration : 12.00 noon to 02.00PM</h4></div>
                <div className="mb-5 p-3"><p>ഒന്നാം വർഷ ബി.ടെക്.-ൽ പ്രതീക്ഷിത ഒഴിവുകളിലേക്ക് 15-9-2023-നു ഉച്ചയ്ക്ക് 12 മണി മുതൽ 2 മണി വരെ സ്പോട് അഡ്മിഷൻ നടത്തുന്നതാണ്. 14-9-2023-ലെ സ്പോട്ട് അഡ്മിഷനിൽ പങ്കെടുത്തവർ, 15-9-2023-ലെ സ്പോട്ട് അഡ്മിഷനിൽ പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്നുവെങ്കിൽ വീണ്ടും രജിസ്റ്റർ ചെയ്യണമെന്ന് അറിയിക്കുന്നു. സ്പോട് അഡ്മിഷനിൽ പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്ന വിദ്യാർത്ഥികൾ എല്ലാ അസ്സൽ സർട്ടിഫിക്കറ്റുകളുമായി 15-9-2023 -നു ഉച്ചയ്ക്ക് 2 മണിക്ക് മുൻപായി കോളേജിൽ എത്തി നടപടികളിൽ പങ്കെടുക്കേണ്ടതാണ്. ഏതെങ്കിലും ഗവൺമെന്റ്/എയ്‌ഡഡ്‌ എൻജിനീയറിങ് കോളേജിൽ ചേർന്നിട്ടുള്ളവരാണെങ്കിൽ അഡ്മിഷൻ സ്ലിപ്പും സ്വാശ്രയ കോളേജുകളിൽ ചേർന്നിട്ടുള്ളവർ കോളേജിൽ നിന്നും NOC യും കൊണ്ടുവരേണ്ടതാണ്. അഡ്മിഷൻ സ്ലിപ്പ്/NOC അല്ലെങ്കിൽ അസ്സൽ ട്രാൻസ്ഫർ സർട്ടിഫിക്കറ്റ് (TC) കയ്യിൽ ഉള്ളവർക്ക് മാത്രമേ സ്പോട് അഡ്മിഷനിൽ പങ്കെടുക്കുവാൻ കഴിയൂ. അഡ്മിഷൻ കിട്ടുന്നവർ അപ്പോൾ തന്നെ മുഴുവൻ ഫീസും അടച്ച് പ്രാവേശനം പൂർത്തിയാക്കേണ്ടതാണ്.</p></div>
                <div className="text-primary mb-3 ms-3"><h3>B.Tech Admission 2023 - Centralised Spot Admission on Sunday 10-09-2023</h3></div>
                <div className="bg-primary mb-3 p-3 text-white"><h4>Venue : Government Engineering College Thrissur, Millennium Auditorium</h4></div>
                <div className="bg-primary p-3 mb-3 text-white"><h4>Time of Registration : 8.00AM to 12.00 Noon</h4></div>
                <div className="bg-primary p-3 mb-3 text-white"><h4>For more information visit: <a href="https://gectcr.ac.in/centralised-spot-admission-2023-24/">Link</a></h4></div>
                <div className="text-primary mb-3 ms-3"><h3>Instructions and guidelines for third phase B. Tech Admission Process - 2023</h3></div>
                <div className="mb-5 p-3"><p>1. Candidates who are allotted through CEE for joining engineering courses in this institution are advised to strictly follow these instructions / guidelines. <br /><br />2. The date and time for joining engineering programs are listed below</p></div>
                <div className="table-responsive tablecontainer mb-5">
                    <table className="table  table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col" colspan="2" className="text-center">Date</th>
                                <th scope="col" colspan="2" className="text-center">Branch</th>
                                <th scope="col" colspan="2" className="text-center">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2"
                                >05/09/2023</th>
                                <td className="p-3" colspan="2" rowspan="3">All Branches (EC,EEE,IT,ME,CE)</td>
                                <td className="p-3" colspan="2">9.00 am- 3.00 pm</td>
                            </tr>
                            <tr>
                                <td className="p-3" colspan="2">07/09/2023</td>
                                <td className="p-3" colspan="2">9.00 am -3.00 pm</td>
                            </tr>
                            <tr>
                                <td className="p-3" colspan="2">08/09/2023</td>
                                <td className="p-3" colspan="2">9.00 am -1:00 pm</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2"
                                rowspan="2"></th>
                                <td className="p-3" colspan="2" rowspan="2">All candidates and parents are requested to strictly follow this schedule for admission.</td>
                                <td rowspan="2" className="p-3" colspan="2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mb-5 p-3"><p>3. Fees to be paid to University, PTA, College Bus Facility, etc. at the time of admission is listed below.</p></div>
                <div className="table-responsive tablecontainer mb-5">
                    <table className="table  table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col" colspan="2" className="text-center">Sl.No</th>
                                <th scope="col" colspan="3" className="text-center">Item</th>
                                <th scope="col" colspan="2" className="text-center">Amount</th>
                                <th scope="col" colspan="2" className="text-center">Mode of Payment</th>
                                <th scope="col" colspan="2" className="text-center">Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">1</th>
                                <td className="p-3" colspan="3">PTA</td>
                                <td className="p-3" colspan="2">9350/-</td>
                                <td className="p-3" colspan="2">only by online/QR Code/SBI Collect	</td>
                                <td className="p-3" colspan="2">Approximate</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">2</th>
                                <td className="p-3" colspan="3">College Bus Fund</td>
                                <td className="p-3" colspan="2">4000/-</td>
                                <td className="p-3" colspan="2">by online/QR Code/Cash</td>
                                <td className="p-3" colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">3</th>
                                <td className="p-3" colspan="3">
                                    <tr>
                                        <td className="pe-5">Hostel Fees</td>
                                        <td>General</td> 
                                    </tr>
                                    <tr>
                                        <td className="pe-5"></td>
                                        <td>SC/ST/OEC</td>
                                    </tr>
                                </td>
                                <td className="p-3" colspan="3">
                                    <tr><td>15700/-</td></tr><br />
                                    <tr><td>13200/-</td></tr>
                                </td>
                                <td className="p-3" colspan="2"><td className="p-3" colspan="2" rowspan="2">Cash</td></td>
                                <td className="p-3" colspan="2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mb-5 p-3 text-dark"><p><b>Note : PTA fees can be paid through SBI collect using the following link :</b></p></div>
                <button type="button" className="btn btn-primary text-white m-3"><a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=5064408">PTA ONLINE PAYMENT</a></button>
                <div className="mb-5 p-3"><p>Kindly ensure to bring the receipt copy of payment while coming for the admission process at the Institute. <br /> <br />4. You are requested to bring all relevant documents and original of all certificates that are uploaded to CEE. <br /> <br />5. Report at the institution entrance on time on the date specified as per the published schedule. <br /> <br />6. Park the vehicle, if any, at the space as directed by the security person at the gate. <br /> <br />7. Report at the help desk / front office (near the car porch, main building). <br /> <br />8. Register at the help desk with name, phone number, email ID, Branch, etc. <br /> <br />9. A token will be given and further necessary instruction / details of admission procedure will be given to you at the help desk and will be directed to a waiting room. <br /> <br />10. Fill all the forms distributed in the room/registration desk. <br /> <br />11. You will be directed for academic and other certificate verifications in the order of the token. <br />12. After the certificate verification, you will be directed to the main admission procedure. <br /> <br />13. Finally you will visit the Principal and get admitted to the course and collect the admission slip.</p></div>
                <div className="mb-5 p-3 text-dark"><p><b>Documents to be produced in the order at the time of admission</b></p></div>
                <div className="mb-5 p-3"><p>1. Admit card of KEAM 2023<br /> <br />2. Data sheet of KEAM 2023<br /> <br />3. Allotment memo of this phase<br /> <br />4. Certificate to prove date of birth<br /> <br />5. Transfer certificate from the institution last attended and conduct certificate<br /> <br />6. Original mark list of Higher secondary or equivalent and the pass certificate of the qualifying examination (if issued)<br /> <br />7. Migration Certificate, if applicable (Other than HSE/VHSE)<br /> <br />8. Receipt of the fee remitted at the Online/ Head post office in Kerala<br /> <br />9. Eligibility certificate from any University in Kerala, in the case of candidate who have passed a qualifying examination other than HSE/VHSE conducted by Government of Kerala or the examination conducted by CBSE or ICSE board.<br /> <br />10. Physical fitness certificate in the relevant format given in Annexure XVII (b) of the prospectus 2023<br /> <br />11. Originals of all the documents/certificates uploaded during the online application<br /> <br />12. Any other documents required in the allotment as per notification<br /> <br /></p></div>
            </div>
            <AnnouncementsBar/>
          </div>
          <div><BannerFooter/></div>
          <div><PermanentFooter/></div>
        </div>
    </div>
  )
}

export default Admission

