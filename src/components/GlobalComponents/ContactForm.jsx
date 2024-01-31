import React,{useState} from 'react'
import InputComp from './InputComp';
import { message } from 'antd'
import { userRequest } from '../RequestMethod';

const ContactForm = ({showModal, setShowModal}) => {

    const [name,setName] = useState("");
    const [nameTouched,setNameTouched] = useState(false);
    const [email,setEmail] = useState("");
    const [emailTouched,setEmailTouched] = useState(false);
    const [mobileNumber,setMobileNumber] = useState("");
    const [mobileNumberTouched,setMobileNumberTouched] = useState(false);
    const [query,setQuery] = useState("");
    //console.log(mobileNumber)
    
    ////////////////////////////////////////////////////////////////validation part
    const nameRegex = /^[A-Za-z]{2,50}( [A-Za-z]{2,50}){0,2}$/;
    const phoneRegex = /^\d{10}$/; // Assuming you expect a 10-digit phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    let data = JSON.stringify({
        "name": name,
        "email": email,
        "phoneNumber":mobileNumber ,
        "message": query,
      });

    const addUser = async (e) => {
  
        setNameTouched(true);
        setEmailTouched(true);
        setMobileNumberTouched(true);

        if(!name.trim()){
          message.error('Please enter your name');
        }
        else if(!nameRegex.test(name)){
          message.error('Please enter correct name(with 2-50 char.)without space at last');
        }
        else if(!email.trim()){
            message.error('Please enter your email');
          }
          else if(!emailRegex.test(email)){
            message.error('Please enter a valid email');
          }
        else if(!mobileNumber.trim()){
          message.error('Please enter your phone number');
        }
        else if(!phoneRegex.test(mobileNumber)){
          message.error('Please enter a valid phone number');
        }
       
       
    //     else{
    //       //e.preventDefault();
    //    await userRequest.post("/admin/customer/createUser", data)
    //       .then(() => {
    //         message.success("User added successfully");
    //         setShowModal(false);
    //       })
    //       .catch((err) => {
    //         const errorMessage = err.response?.data?.message || "An error occurred";
    //         message.error(errorMessage);
    //       });}
         };

  return (
    <>
    {showModal && (
        <div className='fixed z-50 flex justify-center inset-0 top-20'>
        
    <div className="bg-gradient-to-r from-blue-400 to-orange-400   w-full h-[97%]  px-5 md:w-[30%] py-5 CustomShadowColored rounded-md md:rounded-[15px]  mt-2">
        {/* {setShowModal && ( */}
          <h3
            onClick={() => setShowModal(false)}
            className="text-3xl text-end items-end justify-end flex font-semibold   cursor-pointer"
          >
            x
          </h3>
        {/* )} */}
        <h3 className="md:text-[28px] text-[20px] text-center md:text-left mb-5 md:mb-0">
          Let’s Get to know you
        </h3>

        <div className="flex flex-col gap-5 mt-3">
          <InputComp
            placeholder={"Full Name"}
            type={"text"}
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <InputComp
            placeholder={"Email"}
            type={"email"}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <InputComp
            placeholder={"Mobile Number"}
            type={"number"}
            value={mobileNumber}
            onChange={(e)=>setMobileNumber(e.target.value)}
            className={" "}
          />

          {/* <div className="flex items-center text-center justify-between pl-2 pr-4 bg-white CustomShadowLight text-[#515151] border-[1px] border-[#bfcbd3] placeholder:text-[#515151] w-full  h-[46px] outline-none  rounded-[22px]">
            <select
              name=""
              id=""
              className="rounded-[22px] h-full w-full outline-none pl-2 bg-white"
            >
              <option
                className="placeholder:text-[#515151] text-[#515151]"
                value=""
              >
                When do you want to launch a solution?
              </option>

              <option value="">immediately</option>
              <option value="">2-3 months</option>
              <option value="">4-6 months</option>
              <option value="">after 6 months</option>
            </select> */}

            {/* <div className="">
              <HiChevronDown className="text-lg md:text-[25px]" />
            </div> */}
          {/* </div> */}
          <textarea
            name=""
            id=""
            cols="20"
            rows="4"
            placeholder="Query"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            className={` CustomShadow placeholder:text-[#515151] border-[1px] border-[#bfcbd3] w-full  outline-none p-4 rounded-[22px]  `}
          ></textarea>

          {/* <ReCAPTCHA sitekey={TEST_SITE_KEY} onChange={verifiedUser} /> */}

          {/* <Button
            secondary={"secondary"}
            className="!text-[20px] disabled:cursor-not-allowed "
            disabled={!verified}
          >
            {location.pathname == "/" ? "Let's Innovate" : "Submit"}
          </Button> */}
          <div className='flex justify-center'>
          <button className='py-2 px-6 bg-orange-600 text-white animate-pulse  rounded-xl'
          onClick={()=>addUser()}>submit</button>
          </div>
        </div>
      </div>
      </div>
     )} 
    </>
  )
}

export default ContactForm