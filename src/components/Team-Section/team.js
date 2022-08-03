/* In this section we introduce ourself and link our linkedIn-profiles */
import React from 'react'
import Alia from './team-images/Alia.jpg'
import Izzet from './team-images/Izzet.png'
import Marcel from './team-images/Marcel.png'
import Niklas from './team-images/Niklas.jpeg'
import TeamMemberBox from './team-member-box'
import './team.css'
export default function team() {
    return (

        <section id="team" class="team grey-section">
            <div class="container-fluid">
                <h1 class="black-text-color">Team</h1>
                <hr class="line" />
                <div class="team-div">
                    <TeamMemberBox name="Alia" linkedin="https://www.linkedin.com/in/alia-erfan/" image={<img src={Alia} alt="Alia"
                        style={{ height: "150px", marginTop: "10px", width: "140px", marginLeft: "10px", marginRight: "10px" }} />} />
                    <TeamMemberBox name="Izzet" linkedin="https://www.linkedin.com/in/izzet-fatih-cetinkaya/" image={<img src={Izzet} alt="Izzet" style={{ height: "130px", marginTop: "30px" }} />} />
                    <TeamMemberBox name="Marcel" linkedin="https://www.linkedin.com/in/marcel-dietl-b70b48200/" image={<img src={Marcel} alt="Marcel" />} />
                    <TeamMemberBox name="Niklas" linkedin="https://linkedin.com/in/niklasminth/" image={<img src={Niklas} alt="Niklas" />} />
                </div>
            </div>
        </section>
    )
}
