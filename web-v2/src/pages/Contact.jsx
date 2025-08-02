/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";

import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ScrambleText from "../components/ScrambleText";
import { MoveLeft } from "lucide-react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";


export default function Contact() {
  const navigate = useNavigate();
  const [type, setType] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "",
   
  });
  const [responseMsg, setResponseMsg] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef(null);

  // Update form data as user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/form", formData, {
        headers: { "Content-Type": "application/json" },
      });
      const msg = res.data.message || "Form submitted successfully!";
      setResponseMsg(msg);
      toast.success(msg);
      setTimeout(() => {
        navigate("/");
      }, 1000);
      setFormData({ name: "", email: "", message: "", type: "" });
    } catch (error) {
      console.error("Submission error:", error);
  
      // Try to extract error message from different sources
      let errMsg = "Submission failed.";
      if (error.response) {
        errMsg =
          error.response.data?.error ||
          error.response.data?.message ||
          error.response.headers["error-message"] || // custom header
          "Something went wrong.";
      }
  
      setResponseMsg(errMsg);
      toast.error(errMsg);
    }
  };
  

  useEffect(() => {
    if (!containerRef.current) return;
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.02,
      lenisOptions: 0.001,
      class: "is-reveal",
    });

    return () => {
      scroll.destroy();
    };
  }, []);
const emailRef = useRef(null);
  const nameRef = useRef(null);
 const focusInput = (ref) => {
    ref.current?.focus();
  };
  return (
    <><Helmet>
        <title>Contact Weblocators | Get in Touch</title>
        <meta
          name="description"
          content="Get in touch with Weblocators — contact us for web development services and digital solutions. Reach out by email or follow us on social media."
      />
        <meta name="keywords" content="contact, web development, digital solutions, Weblocators" />
        <meta name="author" content="Weblocators" />
      <link rel="canonical" href="https://www.weblocators.com/contact" />
    </Helmet>
      <main>
      <section className="flex  min-h-[100svh] w-full justify-center bg-black overflow-y-auto" ref={containerRef} style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
  <form onSubmit={handleSubmit} className="w-full">
    <div className="grid md:p-4 p-2 md:gap-4 gap-1 h-full w-full  md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr] grid-rows-[25vh_1fr] md:grid-rows-[1fr_1fr]  ">
      {/* Header Area */}
      <div className="rounded bg-[url('/7.webp')] bg-center bg-cover col-span-full md:col-start-1 md:col-end-10  row-start-1  row-end-2 flex flex-col items-start justify-end p-6 h-[25vh] md:h-[30vh] lg:h-[65vh]
">
              <div className=" md:h-[40%] flex flex-col items-start  ">
                {currentStep == 0 && (
          
                <button
            type="button"
           
            className="flex items-center w-auto bg-trasparent  md:py-5 px-4 rounded-2xl"
          >
           
          </button>
        )}
        {currentStep !== 0 && (
          
                <button
            type="button"
            onClick={() => setCurrentStep(currentStep - 1)}
            className="flex items-center gap-2 cursor-pointer w-auto bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl"
          >
            <MoveLeft color="#fff" />
            <ScrambleText textSize="text-1xl" text="Back" Color="#fff" speed={45} />
          </button>
        )}
          
        <h1 className="text-3xl h-[50%] md:text-5xl font-bold">
          <ScrambleText
            textSize="text-xl md:text-6xl"
            Color="#fff"
            text={
              currentStep === 0
                ? 'Hello there!'
                : currentStep === 1
                ? 'A brief overview'
                : ''
            }
            speed={35}
          />
          <br />
          <ScrambleText
            Color="#fff"
            textSize="text-xl md:text-6xl"
            text={
              currentStep === 0
                ? 'Choose how we can help you'
                : currentStep === 1
                ? 'of your project'
                : currentStep === 2
                ? 'How can we address you?'
                : ''
            }
            speed={25}
          />
                </h1>
              </div>
            </div>
   

      {/* Step 0: Choose Type */}
      {currentStep === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr]   gap-0 md:gap-2 col-span-full md:col-span-9">
          {[
            'Custom website',
            'Custom Shop',
            'website remake',
            'landing page',
            'complex web app',
          ].map((label, i) => (
            <React.Fragment key={label}>
              <div
                onClick={() => {
                  setCurrentStep(1)
                  setType(label)
                  setFormData({ ...formData, type: label })
                }}
                className="flex rounded-xl hover:bg-white duration-300 text-white hover:cursor-pointer hover:text-black items-center justify-center h-20  md:h-full bg-[#1e1e1e] text-2xl md:text-4xl text-center"
              >
                {label}
              </div>
              {i !== 4 && <div className="bg-gray-400 opacity-30 hidden md:block"></div>}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Step 1: Message Input */}
      {currentStep === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr]   gap-0 md:gap-2 col-span-full md:col-span-9">
          <div className="flex rounded-xl hover:cursor-pointer md:h-full justify-start items-start md:items-center ">
            <textarea
              className="text-white text-xl md:text-3xl resize-none outline-none border-none h-20 md:h-full w-full bg-transparent"
              id="message"
              placeholder="Example: I want a website for my business..."
              name="message"
              maxLength="340"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="bg-gray-400 opacity-30 hidden md:block"></div>
          <div
            onClick={() => setCurrentStep(2)}
            className="flex rounded-xl duration-300 hover:bg-white text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-[#1e1e1e]"
          >
            <h1 className="text-2xl md:text-4xl">
              <ScrambleText
                textSize="text-1xl"
                text={formData.message === '' ? 'skip' : 'Next'}
                speed={25}
              /></h1>
            
          </div>
        </div>
      )}

      {/* Step 2: Email & Name Input and Submit */}
      {currentStep === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr] gap-2 col-span-full md:col-span-9">
          <div
            className="flex flex-col rounded-xl  text-white hover:cursor-pointer items-start justify-start md:justify-end h-30 md:h-full"
            onClick={() => focusInput(emailRef)}
          >
            <label htmlFor="email">Email:</label>
            <input
              ref={emailRef}
              className="bg-transparent text-white text-xl md:text-2xl w-full outline-none"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bg-gray-400 opacity-30 hidden md:block"></div>
          <div
            className="flex flex-col rounded-xl  text-white hover:cursor-pointer items-start justify-start md:justify-end h-40 md:h-full"
            onClick={() => focusInput(nameRef)}
          >
            <label htmlFor="name">Name:</label>
            <input
              ref={nameRef}
              className="bg-transparent text-white text-xl md:text-2xl w-full outline-none"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="bg-gray-400 opacity-30 hidden md:block"></div>
          <button
            type="submit"
            className="flex rounded-xl duration-300 hover:bg-white text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-[#1e1e1e]"
          >
            <h1 className="text-2xl md:text-4xl">Submit</h1>
          </button>
        </div>
      )}
    </div>
  </form>
</section></main>

    </>
  );
}
