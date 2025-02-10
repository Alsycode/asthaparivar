import Footer2 from "../../layout/footer-2";
import Header3 from "../../layout/header-3";
import Link from 'next/link';
import Blog from "../../element/blog"
import Blog2 from "../../element/blog-2"
import Blog3 from "../../element/blog-3"
import { useEffect, useState } from "react";
function OurStories() {
	const [blogs, setBlogs] = useState(null);
// useEffect(()=>{
// 	const fetchBlogs = async () => {
// 		const response = await fetch("http://145.223.21.6:1337/api/updates?populate=*") 
// 		const data = await response.json();
// 		setBlogs(data?.data)
// 	}
// 	fetchBlogs();
// },[])
console.log("blogssss", blogs)
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