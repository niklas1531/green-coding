import React from 'react'
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { Alert } from "@mui/material";
export default function level2() {

  return (
    <div>
      <Navbar />
      <div className="beige-section" style={{ minHeight: "300px", padding: "10%" }}>
        <Alert variant="filled" className="level2-alert" severity="info">
          Level 2 coming soon!
        </Alert>
      </div>
      <Footer />
    </div>
  )
}
