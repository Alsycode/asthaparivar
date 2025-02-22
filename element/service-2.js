import {useState} from 'react';
import Link from 'next/link';

function Service2() {
    const [open, setOpen] = useState("p2")
    return (
      <>
        {/* <!-- Service --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row icon-wraper-1">
					<div className="col-lg-4 col-md-6">
						<div className="section-head style-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<h6 className="sub-title text-primary bgl-primary m-b15">OUR SERVICES</h6>
							{/* <h2 className="title m-t10">We Are Providing Digital Services</h2> */}
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
										<i className="flaticon-office"></i>
									</a>
								</Link>		
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">CHILDREN</h4>
								
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-pie-charts"></i>
									</a> 
								</Link>	
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">ALTERNATE LIVELIHOOD
								</h4>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p3" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-dollar"></i>
								</a></Link> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">HEALTHCARE</h4>
								
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p4" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a></Link>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">OUR CBOs</h4>
								
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p5" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-help"></i>
								</a></Link>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">HIV</h4>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Service2;