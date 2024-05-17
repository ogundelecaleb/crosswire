import React from "react";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { SyncLoader } from "react-spinners";

const ContactUs = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const projectTitleRef = useRef();
  const message = useRef();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => emailjs.init("761G2RNv1eQSVyEsj"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_iqwq95h";
    const templateId = "template_yqaz9p7";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: message.current.value,

        project: projectTitleRef.current.value,
      });
      setShowModal(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-[#3F3F3F] pt-[32px] px-[12px] pb-[32px]  ">
      <h2 className="text-[24px] md:text-[42px] xl:text-[70px] md:pl-5 text-[#141414] font-bold text-center md:text-left mb-1">
        Discuss Your
      </h2>
     
      <div className="px-[24px] pb-[29px] relative bg-[#141414] mb-[13px] rounded-[20px] md:flex">
        <h2 className="text-[24px] md:hidden text-[#fff] font-bold text-center mb-[33px]">
          Project With Us
        </h2>
        <div className="w-[50%] hidden md:block">
          <h2 className="text-[42px] xl:text-[70px] text-[#fff] font-bold  mb-[33px]">
            Project With Us
          </h2>
        </div>
        <img
          src="./rocket.png"
          alt="roket"
          className=" h-[460px] lg:h-[540px] xl:h-[600px] absolute left-0 bottom-0 hidden md:block"
        />

        <form className="w-full md:w-[50%]">
          <div className="flex flex-col gap-[20px] md:pt-[57px]">
            <input
              placeHolder={"Your Name*"}
              ref={nameRef}
              className="focus:border-[#37B34A] pl-6 bg-[#C4C4C4] focus:ring-[#37B34A] w-full focus:outline-none rounded-lg before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#37B34A] before:to-[#ffffff] before:p-1 before:content-[''] before:[-webkit-mask:linear-gradient(#C4C4C4_0_0)_content-box,linear-gradient(#C4C4C4_0_0)] before:[mask-composite:exclude]"
            />
            <input
              placeHolder={"Email Address*"}
              ref={emailRef}
              className="focus:border-[#37B34A] pl-6 bg-[#C4C4C4] focus:ring-[#37B34A] w-full focus:outline-none rounded-lg before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#37B34A] before:to-[#ffffff] before:p-1 before:content-[''] before:[-webkit-mask:linear-gradient(#C4C4C4_0_0)_content-box,linear-gradient(#C4C4C4_0_0)] before:[mask-composite:exclude]"
            />
            <input
              placeHolder={"Project Title*"}
              ref={projectTitleRef}
              className="focus:border-[#37B34A] pl-6 bg-[#C4C4C4] focus:ring-[#37B34A] w-full focus:outline-none rounded-lg before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#37B34A] before:to-[#ffffff] before:p-1 before:content-[''] before:[-webkit-mask:linear-gradient(#C4C4C4_0_0)_content-box,linear-gradient(#C4C4C4_0_0)] before:[mask-composite:exclude]"
            />
            <textarea
              placeHolder={"project Summary*"}
              ref={message}
              className="focus:border-[#37B34A] h-[283px] pl-6 bg-[#C4C4C4] focus:ring-[#37B34A] w-full focus:outline-none rounded-lg before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-[#37B34A] before:to-[#ffffff] before:p-1 before:content-[''] before:[-webkit-mask:linear-gradient(#C4C4C4_0_0)_content-box,linear-gradient(#C4C4C4_0_0)] before:[mask-composite:exclude]"
            />

            <button
              onClick={handleSubmit}
              className="px-[28px] py-[15px] bg-gradient-to-r from-[#37B34A] to-[#184D20] text-white rounded-[10px] max-w-[122px]"
            >
              {!loading ? <p>Submit</p> : <SyncLoader color="#fff" />}
            </button>
          </div>
        </form>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-4 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#37B34A] outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative p-3 md:p-6 flex-auto">
                  <p className="my-2 md:my-4 text-white text-base leading-relaxed">
                    Message sent ! A representative will reach out to you. We
                    look forward to working with you.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-4   rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ContactUs;
