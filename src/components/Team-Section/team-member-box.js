import React from 'react'

export default function teamMemberBox(props) {
    return (
        <div class="team-member box-shadow">
            <p class="grey-text-color-fix">{props.name}</p>
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin-in linkedin"></i>
            </a>
            {props.image}
        </div>
    )
}
