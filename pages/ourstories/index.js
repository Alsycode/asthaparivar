import Footer2 from "../../layout/footer-2";
import Header3 from "../../layout/header-3";
import Link from 'next/link';
import Blog from "../../element/blog"
import Blog2 from "../../element/blog-2"
import Blog3 from "../../element/blog-3"
function OurStories() {
  return (
   <>
	<Header3/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Our Stories</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Our Stories</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<Blog3/>
	</div>
	<Footer2/>
    </>
  )
}

export default OurStories;