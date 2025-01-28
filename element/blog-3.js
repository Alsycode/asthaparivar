import Link from "next/link"
import Blogdata from "../data/blogdata.json"
function Blog3() {
	const data =  Blogdata;
	console.log("dataaaaaaa", data)
  return (
    <>
     {/* <!-- Blog --> */}
		<section className="content-inner">
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">Our Blog & News</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row">
               {data.map((blog)=>(
				<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
				<div className="dlab-blog blog-half m-b30">
					<div className="dlab-media">
						<Link href="blog-details-3"><a><img src={blog.image} alt=""/></a></Link>
					</div>
					<div className="dlab-info">
						<h5 className="dlab-title">
							<Link href={`/ourstories/${blog.id}`}><a>{blog.title}</a></Link>
						</h5>
						<p>{blog.title} </p>
						<div className="dlab-meta">
							<ul>
								<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
								<li className="post-comment"><a href="#"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
								<li className="post-share"><i className="flaticon-share"></i>
									<ul>
										<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
										<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
										<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
									</ul>
								</li>
							</ul>
						</div>								
					</div>
				</div>
			</div>
			   ))}
					
					
					
					
				</div>
			</div>
		</section>
    </>
  )
}

export default Blog3;