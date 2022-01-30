import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Projects.css';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  const {setCart} = useContext(UserContext);

      useEffect(() => {
        fetch("./projectData.json")
        .then(res => res.json())
        .then(data => setProjects(data))
      }, []);

  return (
    <div id="Services" className="service-bg">
      <div className="viewport">
        <div>
          <h1 className="product-header pb-3">My Projects</h1>
        </div>
        <div className="Hotels">
          {projects.map((project) => (
            <div className="hotel-information">
              <div className="logo">
                <img className="hotel-img" src={project.img} alt="" />
              </div>
              <div className="hotel-details">
                <div className="name-ret">
                  <h5 className='fs-3 text-success'>❖ {project.name}</h5>
                 
                </div>
                <p style={{textAlign:"left"}}>
                    <li>{project.one}</li>
                    <li>{project.two}</li>
                    <li>{project.three}</li>
                    <li><em className='fs-4 text-success'>Technology Used:</em> {project.four}</li>
                </p>

                <div className='link-btn' style={{textAlign:"left"}}>
                {/* <a target="_blank" href="https://github.com/Supriya-debnath">Github Link</a> */}
                
                <button className="p-1 booking-button btn1 w-30">
                <a target="_blank" href={project.link} >Live Link</a>
                </button>
               
                <button className="p-1 booking-button btn1 w-30">
                <a target="_blank" href={project.client} >Client side</a>
                </button>
               
                <button className="p-1 booking-button btn1 w-30">
                <a target="_blank" href={project.server} >Server side</a>
                </button>
                </div>
                
                <div className="cnf-button">
                  <Link
                    className="p-1 text-center booking-button btn2 w-50"
                    as={Link} to="/detailsInfo" onClick={()=>setCart(project)}
                  >
                    Details{" "}
                  </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;





// https://ichef.bbci.co.uk/news/976/cpsprodpb/180CA/production/_119360589_cars.jpg







