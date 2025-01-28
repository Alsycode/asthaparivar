import Link from "next/link";

function AboutUs_2() {
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
							<h2 className="title m-b20">Empowering Sex Worker Communities Across Mumbai, Pune, and Thane</h2>
							<p>Aastha Parivaar was officially registered in 2009, born from the Bill and Melinda Gates Foundation AIDS Initiative, FHI 360. From the project’s inception in 2001, Aastha Parivaar has since become one of the largest umbrella organizations representing the various sex worker communities in Mumbai, Pune and Thane, including street-based, brothel-based, home-based, male and Hijra/transgender sex workers.</p>
						</div>
						{/* <ul className="list-check primary m-b30">
							<li>Suspendisse ullamcorper mollis orci in facilisis.</li>
							<li>Etiam orci magna, accumsan varius enim volutpat.</li>
							<li>Donec fringilla velit risus, in imperdiet turpis euismod quis.</li>
							<li>Aliquam pulvinar diam tempor erat pellentesque, accumsan mauri.</li>
						</ul> */}
						<Link href="/about-us-2"><a className="btn btn-primary rounded-xl gradient">Learn More</a></Link>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUs_2;