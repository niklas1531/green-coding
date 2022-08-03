/* This is the footer, i.e. the lower area of the website where all links
 to other sections/pages are linked. This is a component that can be 
 found on every (sub)page. */

import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from "react-router-dom";
import './footer.css'
export default function Footer() {
  return (
    <footer>
      <div class="container-fluid">
        <div class="page-footer">
          <HashLink class="footer-link" smooth to="/#">HOME</HashLink>
          <HashLink class="footer-link" smooth to="/#about">ABOUT</HashLink>
          <HashLink class="footer-link" smooth to="/#kpis">KPI</HashLink>
          <HashLink class="footer-link" smooth to="/quiz/#">QUIZ</HashLink>
          <HashLink class="footer-link" smooth to="/#team">TEAM</HashLink>
          <HashLink class="footer-link" smooth to="/#contact">CONTACT</HashLink>
          <Link class="footer-link" smooth to="/literature">LITERATURE</Link>
        </div>
        <p class="footer-copyright">Copyright © 2022 All rights reserved - Green Coding</p>
      </div>
    </footer>
  )
}
