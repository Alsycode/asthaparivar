// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 


function Portfolio2() {
  const portfolio = [
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      img: (
        <Image
          src="/images/projects/pic1.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_development", "branding"],
      img: (
        <Image
          src="/images/projects/pic2.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      img: (
        <Image
          src="/images/projects/pic3.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      img: (
        <Image
          src="/images/projects/pic4.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      img: (
        <Image
          src="/images/projects/pic5.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      img: (
        <Image
          src="/images/projects/pic6.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-2 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={"all"} onClick={() => setFilter("all")}>
              All
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a
              active={"web_design"}
              onClick={() => setFilter("web_design")}
            >
              HIV Intervention Work
            </a>
          </li>
          <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
            <a
              active={"web_development"}
              onClick={() => setFilter("web_development")}
            >
              Children
            </a>
          </li>
          <li className={`btn ${filter === "branding" ? "active" : ""}`}>
            <a
              active={"branding"}
              onClick={() => setFilter("branding")}
            >
            Alternative Livelihoods
            </a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a
              active={"mobile_app"}
              onClick={() => setFilter("mobile_app")}
            >
             Healthcare
            </a>
          </li>
          <li className={`btn ${filter === "seo" ? "active" : ""}`}>
            <a active={"seo"} onClick={() => setFilter("seo")}>
           HIV / AIDS
            </a>
          </li>
        </ul>
      </div>
        <SimpleReactLightbox>
            <SRLWrapper >
              <div className="clearfix">
                <ul id="masonry" className="row" data-column-width="3">
                  {projects.map((item) =>
                    item.filtered === true ? (
                      <>
                        <li
                          className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                          data-wow-duration="2s"
                          data-wow-delay="0.1s"
                        >
                          <div className="dlab-box  style-2 m-b30">
                            <div className="dlab-media ">
                              {item.img}
                            </div>
                            {/* <div className="dlab-info">
                              <h5 className="title">
                                <a href="javascript:void(0);">{item.title}</a>
                              </h5>
                              <p className="post-author">
                                By <a href="javascript:void(0);">{item.author}</a>
                              </p>
                            </div> */}
                          </div>
                        </li>
                      </>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </div>
            </SRLWrapper >      
          </SimpleReactLightbox> 
    </>
  );
}

export default Portfolio2;
