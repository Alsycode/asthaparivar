import React from 'react'
import Header3 from '../layout/header-3'
import Footer2 from '../layout/footer-2'
const Donations = () => {
  return (
    <>
    <Header3/>
    <div className="page-content bg-white">
    <section className="content-inner-2">
    <div className="container">
   
    <div className="row">
        <div className="col-md-8">
          <h2 className="display-6 mb-4">Support Aastha Parivaar</h2>
          <p className="lead">
            Your generous donations allow us to continue to improve the lives of women, men, transgender individuals, and children affected by the sex industry. We are extremely grateful for any donations towards our child sponsorships and our programs addressing issues including HIV/AIDS care, nutrition, vocational skills, health, and legal advocacy.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3>For Foreign Donations</h3>
          <ul className="list-group">
            <li className="list-group-item">Account Name: Aastha Parivaar (FCRA Saving Account)</li>
            <li className="list-group-item">Account Number: 39979121650</li>
            <li className="list-group-item">IFSC Code: SBIN0000691</li>
            <li className="list-group-item">SWIFT Code: SBININBB104</li>
            <li className="list-group-item">New Delhi Main Branch</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>For Local Donations</h3>
          <ul className="list-group">
            <li className="list-group-item">Account Name: Aastha Parivaar</li>
            <li className="list-group-item">Account Number: 30772176552</li>
            <li className="list-group-item">IFSC Code: SBIN0012924</li>
            <li className="list-group-item">MICR Code: 400002242</li>
            <li className="list-group-item">Nehru Nagar, Kurla, Mumbai</li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Additional Information</h3>
          <p>
            Aastha Parivaar is registered under the Bombay Public Trust Act 1950 and under the Foreign Contributions Regulation Act for receipt of foreign donations. Monetary donations are tax exempt under Section 80G Income Tax 1961 of the Indian Tax Laws.
          </p>
          <p>
            We also welcome donations of unused clothing, medication, school supplies, etc. for all of our programs. Contact Manager at manager@aasthaparivaar.org.in.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <a href="https://www.helpyourngo.com/ngo-details.php?ngo=491&name=Aastha-Parivaar" target='blank' className="btn btn-primary btn-lg">Donate Online</a>
          <p className="mt-3">
            HelpYourNGO is an online social services organization that helps you evaluate & analyse NGOs before you donate your money to a cause or charities. To make a donation through HelpYourNGO, Click Here.
          </p>
        </div>
      </div>
      
    </div>
    </section>
    </div>
    <Footer2/>
    </>
 
 
  )
}

export default Donations