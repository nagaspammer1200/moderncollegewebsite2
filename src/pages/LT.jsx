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

const LT = () => {
    const {darkMode,setDarkMode} = useContext(darkModeContext);
    useEffect(() => { 
        setDarkMode(localStorage.getItem("darkModeValue2"))
    }, []);

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className={darkMode?"textaninight bg-dark p-5 text-warning":"textaniday bg-primary p-5 text-white"}><h2>Language Lab</h2></div>
          <div className={darkMode?"d-flex personcontainer3 p-3 bg-dark border-top border-1 border-primary":"d-flex p-3 personcontainer3"}>
            <div className="p-3 ms-4">
                <div className={darkMode?"mb-2 gap-5 nsscontainer1 text-info":"mb-2 gap-5 nsscontainer1"}>
                    <div className="textcontainer4"><p>A well equipped and well maintained language lab is maintained in the college to hone the soft skills of students. The students are trained in developing their communication skills through this system. The lab is equipped with server and clients with Express Pro Digital Lab software installed in it.</p></div>
                    <div><img src="https://firebasestorage.googleapis.com/v0/b/gecbhclone.appspot.com/o/lang.jpg?alt=media&token=24a8fc27-ff01-451d-bbef-096e0fffe752" width="250px" height="200px" alt="Language Lab" /></div>
                </div>
                <div className="accordion m-5" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Course objective
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"accordion-body text-info bg-dark textcontainer4":"accordion-body textcontainer4"}><p>The language lab lessons engaged in this college facilitates classroom engagement and interaction via computer based exercises and activities to maximise language immersion. It focuses on acquiring and developing the four main language skills of a student, namely; listening, speaking, reading and writing along with adequate grammar and vocabulary building exercises as well.</p></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Course Contents 
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"accordion-body text-info bg-dark textcontainer4":"accordion-body textcontainer4"}><p>The components of the course currently being practiced under the language lab involves <br /><br />1. Audio – visual monologues with exercises.<br /><br />2. Pronunciation of words focusing on stress and intonation.<br /><br />3. Vocabulary building involving word meaning and usage in a sentence.<br /><br />4. Grammar exercises in MCQ model.<br /><br />5. Learning through conversation by incorporating a role play in the fill the blanks format.<br /><br />6. Exposure to various accents viz. American, British, Indian etc.<br /><br />7. Comprehension passage and further discussion of it in the format similar to group discussion.<br /><br /></p></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Course Outcome
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"accordion-body text-info bg-dark textcontainer4":"accordion-body textcontainer4"}><p>1. Understand the nuances of language through audio – visual experience and group activities.<br /><br />2. Speak with clarity and confidence thereby enhancing employability skills of the students.<br /><br />3. Perceive and comprehend the intricacies of grammar in an interactive fashion.<br /><br />4. Improve the fluency in spoken English and neutralize mother tongue influence.<br /><br />5. Familiarize students with the use of English in everyday situations and contexts.<br /><br />6. Furthermore, theoretical lessons on frequently used idioms and phrases, question tags, tenses and classroom conversations on specific topics have also been completed until now.<br /><br /></p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className={darkMode?"accordion-button text-warning bg-dark":"accordion-button text-white bg-primary"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Bridge Programs
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={darkMode?"accordion-body text-info bg-dark textcontainer4":"accordion-body textcontainer4"}><p>To bridge the gap between the initial skills of individuals and what they need to enter and succeed in postsecondary education and career-path employment.</p></div>
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

export default LT

