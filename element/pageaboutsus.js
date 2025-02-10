import Link from "next/link";

function About() {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/blog/default/internvisit.jpeg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">ABOUT US</h6>
							{/* <h2 className="title m-b20">Empowering Sex Worker Communities Across Mumbai, Pune, and Thane</h2> */}
							<p>Aastha Parivaar was officially registered in 2009, born from the Bill and Melinda Gates Foundation AIDS Initiative, FHI 360. From the project’s inception in 2001, Aastha Parivaar has since become one of the largest umbrella organizations representing the various sex worker communities in Mumbai, Pune and Thane, including street-based, brothel-based, home-based, male and Hijra/transgender sex workers.

Aastha Parivaar provides financial and administrative support to 13 registered community-based organizations (CBOs) which operate at the field level to enable different sex worker populations to voice and address their individual needs, increasing the capacity of the sex worker community. The issues addressed by CBOs include family planning, HIV intervention, health, human rights, rapid crisis intervention, legal literacy, alternative livelihoods, and education for the children of sex workers.

By utilizing CBOs, our model is extremely unique, sustainable and successful in the sex worker community, leading individuals to empowerment and self intervention. The sex workers themselves take an active role in leading their community’s development through their own elected governing board and managing committees, which are in turn supported by Aastha Parivaar’s secretariat of professionals.

Learn more about our model here.

As a result of the effectiveness of our programs, Aastha Parivaar has also become a resource centre and demonstrative model for other NGOs and programs both nationally and internationally.

Learn more about our capacity building programs here.

We envision a community of sex workers that are healthy, united, and empowered. Each day we strive to ensure our sex worker communities live with self-respect, dignity and pride, free from the discrimination and stigmatization that often accompanies their work.</p>
						</div>
						{/* <ul className="list-check primary m-b30">
							<li>Suspendisse ullamcorper mollis orci in facilisis.</li>
							<li>Etiam orci magna, accumsan varius enim volutpat.</li>
							<li>Donec fringilla velit risus, in imperdiet turpis euismod quis.</li>
							<li>Aliquam pulvinar diam tempor erat pellentesque, accumsan mauri.</li>
						</ul> */}
						<Link href="#"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default About;