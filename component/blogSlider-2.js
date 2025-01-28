import Link from "next/link";
import Slider from "react-slick";

function BlogSlider2() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
		responsive: [
			{
			  breakpoint: 600,
				settings: {
					slidesToScroll: 1,
				}
			}]	
    };
    return (
        <>
            <Slider
                {...settings}
                className="blog-carousel2 owl-carousel owl-none"
            >
					<div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<img src="images/blog/default/internvisit.jpeg" alt=""/>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										{/* <li className="post-category">
											<a href="javascript:void(0);">Design</a>
											<a href="javascript:void(0);">Development</a>
										</li> */}
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="/blog-details-2"><a>An Intern’s Visit to Aastha Parivaar Unit 2</a></Link></h4>
								<p className="m-b20">On the 5th of February, 2019, I, along with three other interns, had the privilege of visiting Aastha Parivaar Unit 2 to learn about the work they do in their community and the issues they face. I am a student from University of Auckland (New Zealand) completing a 6 week internship with Aastha Parivaar, developing their communications and updating their website. The other three interns, Ravi, Amar and Pranay, are from Mumbai’s NMIMS College and are completing a 20 day internship as part of their MBA.</p>
								<Link href="/blog-details-2"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<img src="images/blog/default/internvisit.jpeg" alt=""/>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										{/* <li className="post-category">
											<a href="javascript:void(0);">Design</a>
											<a href="javascript:void(0);">Development</a>
										</li> */}
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="/blog-details-2"><a>2018 International Women’s Day Remembered</a></Link></h4>
								<p className="m-b20">Aastha Parivaar Unit 2 (AP 2) and Targeted Intervention Centre, Aasha Darpaan (AD), support a community of female sex workers (FSW) in the Grant Road suburb of Mumbai. This support includes, but is not limited to: facilitating events, health check ups, HIV screening, counselling and condom distribution.</p>
								<Link href="blog-details-2"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
                    <div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
								<img src="images/blog/default/wishlist.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										{/* <li className="post-category">
											<a href="javascript:void(0);">Design</a>
											<a href="javascript:void(0);">Development</a>
										</li> */}
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="/blog-details-2"><a>Breaking the Cycle with Amazon Wishlist</a></Link></h4>
								<p className="m-b20">Aastha Parivaar recently launched Life Skill Education Sessions; an initiative aimed at the children of our Aastha Parivaar key population communities.

The children, aged between 10 and 16 years, often come from deeply impoverished and dysfunctional families. These sessions aim to educate children on critical thinking; crisis identification and de-escalation; problem solving, and safety as well as encouraging school attendance until completion of college.</p>
								<Link href="/blog-details-2"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
                    <div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<img src="images/blog/default/funding.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										{/* <li className="post-category">
											<a href="javascript:void(0);">Design</a>
											<a href="javascript:void(0);">Development</a>
										</li> */}
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="/blog-details-2"><a>Funding the Non-Funded</a></Link></h4>
								<p className="m-b20">In the face of depleted funding, Aastha Parivaar’s CBOs are finding innovative ways to finance their outreach</p>
								<Link href="/blog-details-2"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
            </Slider>
        </>
    );
}

export default BlogSlider2;
