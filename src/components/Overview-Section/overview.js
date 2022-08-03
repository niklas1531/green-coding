/* This is the section at the top, below the menu bar, 
with a large background image, a heading, a subheading and two buttons.*/
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import "./overview.css"

export default function overview() {
  return (
    <section class="overview" id='overview'>
      <div class="banner-text">
        <h1 class="heading-1">Is my code green?</h1>
        <h4>An environment that educates and teaches programmers about sustainable coding.</h4>
        <HashLink class="overview-button" smooth to="/#about">Start Here</HashLink>
        <HashLink class="overview-button" smooth to="/#kpis">Our KPI</HashLink>
      </div>
    </section>
  )
}
