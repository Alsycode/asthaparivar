import Counterup from '../component/counterup';
function Counter2() {
    return (
      <>
        {/* <!-- Counters 2 --> */}
		<section className="counter-wraper-2 overlay-gradient-dark"> 
			<div className="counter-inner content-inner-3" style={{"backgroundImage":"url(images/background/bg14.png)","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={13}/>+</h2>
									<span className="title">Community Based Organisations</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-smile"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={10818}/>+</h2>
									<span className="title">Social Entitlements Provided</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-line-chart"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={145}/>+</h2>
									<span className="title">AmazonWishlist Donations</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-startup"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={254}/>+</h2>
									<span className="title">HIV Positive Support Groups</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-confetti"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={642}/>+</h2>
									<span className="title">Children Helped</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-confetti"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 m-b30">
							<div className="dlab-content-bx style-3 text-center">
								<div className="icon-content">
									<h2 className="m-b0 text-primary"><Counterup count={29520}/>+</h2>
									<span className="title">Health Camps Attendance</span>
									{/* <div className="icon-md text-primary"> 
										<span className="icon-cell">
											<i className="flaticon-confetti"></i>
										</span> 
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Counter2;