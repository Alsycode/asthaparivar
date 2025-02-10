import Footer2 from "../../layout/footer-2";
import Header3 from "../../layout/header-3";
import Link from 'next/link';
import { useRouter } from "next/router";
import blogdata from "../../data/blogdata.json";

function Storydetails() {
    const router = useRouter();
    const { id } = router.query;
  
    const blog = blogdata.find((blog) => blog.id === parseInt(id));
    console.log("dataaaas", blog?.image)
	return (
		<>
			<Header3 />
			<div className="page-content bg-white">
				{/* <!-- Banner  --> */}
				<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ "backgroundImage": "url(images/banner/bnr1.jpg)" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1>Our Story</h1>
							{/* <!-- Breadcrumb Row --> */}
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
									<li className="breadcrumb-item active" aria-current="page">Our Story</li>
								</ul>
							</nav>
							{/* <!-- Breadcrumb Row End --> */}
						</div>
					</div>
				</div>
				{/* <!-- Banner End --> */}

				{/* <!-- Blog Large --> */}
				<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg2.png)", "backgroundSize": "contain" }}>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								{/* <!-- blog start --> */}
								<div className="dlab-blog blog-single style-2">
									<div className="dlab-media rounded-md shadow">
										 <img src="/children.jpg" alt="" /> 
									</div>
									<div className="dlab-meta m-t30">
										<ul>
											<li className="post-date"><i className="flaticon-clock m-r10"></i>{blog?.date}</li>
											<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
											
										</ul>
									</div>
									<h4 className="dlab-title">{blog?.title}</h4>
									<div className="dlab-post-text">
										<p>Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis elementum. Etiam ullamcorper metus vel leo convallis, quis bibendum tortor congue. Vivamus dapibus eu ex sed tempus.</p>
										<p>Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. Proin cursus massa ipsum, at lacinia erat elementum sit amet. Quisque sem tortor, convallis in arcu eu, accumsan finibus massa. Donec et sapien risus. Duis feugiat, odio vulputate dignissim consectetur, diam metus dictum sapien, at tincidunt nibh eros vel velit. Aenean accumsan et eros et hendrerit. In metus quam, consequat id imperdiet eu, suscipit a nulla. Morbi mollis eu sem et condimentum. Pellentesque iaculis imperdiet purus ut tincidunt.</p>
										<blockquote className="blockquote style-2">
											<h4 className="blockquote-content">Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada.</h4>
										</blockquote>
										<p>Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus. Quisque a velit a eros malesuada ullamcorper. Maecenas ultricies, nisl vel tristique iaculis, libero ex dictum nisi, quis faucibus velit leo vel sapien. </p>
										<h4 className="m-b30">Donec sit amet semper massa ellentesque habitant morbi</h4>
										<img className="alignleft rounded-md shadow" width="300" src="images/blog/blog-grid/pic1.jpg" alt="" />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut imperdiet arcu, et consectetur massa. Vivamus in arcu quis diam gravida tempus. Vivamus et ullamcorper mauris, in sollicitudin tortor. Morbi vitae lacus dolor. Phasellus blandit et sapien a efficitur.</p>
										<p>In mollis auctor odio a porttitor. Vivamus venenatis auctor nulla, et imperdiet enim pretium sit amet. Mauris rutrum ex quis dolor elementum, eu pharetra dui gravida. Ut iaculis lacus molestie dui interdum, vel varius justo egestas. Donec diam ex, sodales nec molestie quis, consequat non justo. Cras elementum velit quis dolor finibus condimentum quis ac quam. Suspendisse vitae justo ut sapien rhoncus egestas.</p>
										<p>Integer accumsan lacinia nulla ac maximus. In dapibus est vel risus tincidunt, nec dignissim eros suscipit. Vestibulum fermentum aliquet ligula vitae laoreet.</p>
										<p>Phasellus vestibulum velit in lacinia ultrices. Aenean vel euismod risus, ac congue lectus. In hac habitasse platea dictumst. Vivamus et felis imperdiet, commodo augue in, condimentum tellus. Quisque a velit a eros malesuada ullamcorper. Maecenas ultricies, nisl vel tristique iaculis, libero ex dictum nisi, quis faucibus velit leo vel sapien.</p>
									</div>
									
								</div>
								
								
							</div>
						</div>
					</div>
				</section>

			</div>
			<Footer2 />
		</>
	)
}

export default Storydetails;