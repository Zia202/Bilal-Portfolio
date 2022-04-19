import React from "react";

const ProjectCard = ({projectDataProps})=>{
     return(
    <>
    <section id="Projects">
  <div className="bg-dark text-light p-5">
      <h1 className="p-5 bg-dark text-light text-center">MY PROJECTS</h1>
      

      <div className="container">

<div className="row">
 
{projectDataProps.map((curElem)=>{

return(
    <>
<div className="col-lg-4 mb-3" key={curElem.id}>
        <div className="p-4 project-card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <img src={curElem.thumbnail} className="img-fluid mb-4"/>  
            <h5 className="text-center">{curElem.description}</h5>          

        </div>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content bg-secondary">
              <div className="modal-header">
                <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>          
              <img src={curElem.fullimage} className="img-fluid"/>
            </div>
          </div>
        </div>

     </div>
     </>
)})   
}
</div>
</div>
</div>
</section>
</>
    )
}


export default ProjectCard;




