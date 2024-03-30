import React from 'react'
import PermanentNavbar from '../components/PermanentNavbar'
import FixedNavbar from '../components/FixedNavbar'
import BannerFooter from '../components/BannerFooter'
import PermanentFooter from '../components/PermanentFooter'
import AnnouncementsBar from '../components/AnnouncementsBar'
import "../assets/Home.css"
import "../assets/About.css"
import "../assets/Components.css"

const LT = () => {

  return (
    <div>
        <div>
          <div className="mb-4"><PermanentNavbar/></div>
          <div><FixedNavbar/></div>
          <div className="bg-primary text-white p-5"><h2>Quality Enhancement in Engineering Education</h2></div>
          <div className="d-flex personcontainer3 p-3">
            <div className="p-3 ms-4">
                <div className="mb-5 gap-5 nsscontainer1">
                    <div><p>A well equipped and well maintained language lab is maintained in the college to hone the soft skills of students. The students are trained in developing their communication skills through this system. The lab is equipped with server and clients with Express Pro Digital Lab software installed in it.</p></div>
                    <div><img src="src/images/lang.jpg" width="250px" height="200px" alt="Language Lab" /></div>
                </div>
                <div className="text-primary mb-3 ms-3"><h3>Course objective</h3></div>
                <div className="mb-5 p-3"><p>The language lab lessons engaged in this college facilitates classroom engagement and interaction via computer based exercises and activities to maximise language immersion. It focuses on acquiring and developing the four main language skills of a student, namely; listening, speaking, reading and writing along with adequate grammar and vocabulary building exercises as well.</p></div>
                <div className="text-primary mb-3 ms-3"><h3>Course Contents </h3></div>
                <div className="mb-5 p-3"><p>The components of the course currently being practiced under the language lab involves <br /><br />1. Audio – visual monologues with exercises.<br /><br />2. Pronunciation of words focusing on stress and intonation.<br /><br />3. Vocabulary building involving word meaning and usage in a sentence.<br /><br />4. Grammar exercises in MCQ model.<br /><br />5. Learning through conversation by incorporating a role play in the fill the blanks format.<br /><br />6. Exposure to various accents viz. American, British, Indian etc.<br /><br />7. Comprehension passage and further discussion of it in the format similar to group discussion.<br /><br /></p></div>
                <div className="text-primary mb-3 ms-3"><h3>Course Outcome</h3></div>
                <div className="mb-5 p-3"><p>1. Understand the nuances of language through audio – visual experience and group activities.<br /><br />2. Speak with clarity and confidence thereby enhancing employability skills of the students.<br /><br />3. Perceive and comprehend the intricacies of grammar in an interactive fashion.<br /><br />4. Improve the fluency in spoken English and neutralize mother tongue influence.<br /><br />5. Familiarize students with the use of English in everyday situations and contexts.<br /><br />6. Furthermore, theoretical lessons on frequently used idioms and phrases, question tags, tenses and classroom conversations on specific topics have also been completed until now.<br /><br /></p></div>
                <div className="text-primary mb-3 ms-3"><h3>Bridge Programs</h3></div>
                <div className="mb-5 p-3"><p>To bridge the gap between the initial skills of individuals and what they need to enter and succeed in postsecondary education and career-path employment.</p></div>
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

