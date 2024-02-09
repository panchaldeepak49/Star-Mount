import React from 'react'
import projectImg from '/Images/New folder/projectManagement1.jpeg'

const ProjectManagement = () => {
  return (
    <>
    <div className='flex justify-center'>
    <div className='flex justify-center  sm:w-[70%] bg-red-400'>
     <img src={projectImg} alt="missing" className=' w-full '></img>
     </div>
     </div>

     <div className='flex justify-center mt-16'>
     <p className='w-[70%] font-Syne '>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project management is a process that involves planning, organizing, and managing resources to 
     achieve specific goals. It is a crucial process for keeping projects on track, meeting goals, 
     and controlling elements like cost, risk, and quality. The following are some key features of 
     project management:
     </p>
     </div>

      {/* Part-1 */}
     <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-16 bg-yellow-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-md
     bg-[url("/Images/ellipse/4.png")] bg-cover bg-no-repeat font-Syne' data-aos="zoom-in" >
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem] font-Syne'>Project Initiation and Planning :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Identifying a Need :</span>
        It all starts with a clearly defined problem or opportunity that drives the project. 
        </li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Defining Scope and Goals :</span>
        A project charter outlines the boundaries, objectives, and deliverables, ensuring everyone's on the same page.
          </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Scheduling and Budgeting : </span>
        Timelines and resource allocation are established using tools like Gantt charts and project management software.
         </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Team Assembly and Roles :</span>
        The right people are assigned to specific tasks based on their skills and expertise.
        </li>
     </div>
     </div>

      {/* Part-2 */}
     <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-gray-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-md
     bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat font-Syne' data-aos="zoom-in" >
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem] font-Syne'>Project Execution and Controls :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Communication and Collaboration :</span>
        Effective communication keeps everyone informed, promotes teamwork, and facilitates problem-solving. 
        </li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Risk Management :</span>
        Proactive identification, assessment, and mitigation of potential risks minimize disruptions and ensure project stability.
          </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Quality Control and Assurance : </span>
        Measures are implemented throughout the project to ensure deliverables meet defined quality standards.
         </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Change Management :</span>
        Adapting to unforeseen changes and managing their impact requires flexibility and proactive communication.
        </li>
     </div>
     </div>

       {/* Part-3 */}
     <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-red-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-md
     bg-[url("/Images/ellipse/2.png")] bg-cover bg-no-repeat font-Syne' data-aos="zoom-in" >
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem] font-Syne'>Project Monitoring and Closing :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Performance Measurement :</span>
        Metrics like budget variance, schedule adherence, and quality metrics assess project success. 
        </li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Reporting and Documentation :</span>
        Project reports communicate progress, challenges, and outcomes to stakeholders.
          </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Issue Resolution : </span>
        Any outstanding issues are addressed and resolved to ensure a clean project closure.
         </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Lessons Learned :</span>
        Reflection on successes and failures allows for continuous improvement in future projects.
        </li>
     </div>
     </div>
    </>
  )
}

export default ProjectManagement