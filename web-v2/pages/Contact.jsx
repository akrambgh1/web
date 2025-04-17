/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ScrambleText from "../src/components/ScrambleText";
import { MoveLeft } from "lucide-react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function Contact() {
  const navigate = useNavigate();
  const [type, setType] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "",
    budget: "",
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
      setFormData({ name: "", email: "", message: "", type: "", budget: "" });
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

  return (
    <>
      <section className="flex w-full justify-center" ref={containerRef}>
        <Navbar />
        <form onSubmit={handleSubmit}>
          <div className="grid p-4 h-screen w-screen gap-x-[0.52rem] gap-y-[0.52rem] grid-rows-[1fr_1px_1fr_1px_1fr] grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr] auto-cols-fr">
            {/* Header Area */}
            <div className="rounded bg-blue-800 col-start-1 row-start-1 row-end-4 col-end-10 flex-col flex items-start justify-end gap-10 p-10">
              {currentStep !== 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex items-center gap-2 bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl">
                  <MoveLeft color="#fff" />
                  <ScrambleText
                    textSize="text-1xl"
                    text="Back"
                    Color="#fff"
                    speed={45}
                  />
                </button>
              )}

              <h1 className="text-5xl font-bold">
                <ScrambleText
                  textSize="text-6xl"
                  Color="#fff"
                  text={
                    currentStep === 0
                      ? "Hello there!"
                      : currentStep === 1
                      ? "Choose your budget range"
                      : currentStep === 2
                      ? "A brief overview"
                      : ""
                  }
                  speed={35}
                />
                <br />
                <ScrambleText
                  Color="#fff"
                  textSize="text-6xl"
                  text={
                    currentStep === 0
                      ? "Choose how we can help you"
                      : currentStep === 1
                      ? "for this project"
                      : currentStep === 2
                      ? "of your project"
                      : currentStep === 3
                      ? "How can we address you?"
                      : ""
                  }
                  speed={25}
                />
              </h1>
            </div>

            {/* Step 0: Choose Type */}
            {currentStep === 0 && (
              <div className="grid rounded grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr] gap-x-[0.52rem] gap-y-[0.52rem] auto-cols-fr row-span-2 col-span-9">
                <div
                  onClick={() => {
                    setCurrentStep(1);
                    setType("Custom website");
                    setFormData({ ...formData, type: "Custom website" });
                  }}
                  className="flex rounded-xl hover:bg-white text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                  <h1 className="text-4xl">Custom website</h1>
                </div>
                <div className="bg-gray-400 opacity-30"></div>

                <div
                  onClick={() => {
                    setCurrentStep(1);
                    setType("Custom Shop");
                    setFormData({ ...formData, type: "Custom Shop" });
                  }}
                  className="flex rounded-xl hover:bg-white text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                  <h1 className="text-4xl">Custom Shop</h1>
                </div>
                <div className="bg-gray-400 opacity-30"></div>

                <div
                  onClick={() => {
                    setCurrentStep(1);
                    setType("website remake");
                    setFormData({ ...formData, type: "website remake" });
                  }}
                  className="flex rounded-xl hover:bg-white text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                  <h1 className="text-4xl">website remake</h1>
                </div>
                <div className="bg-gray-400 opacity-30"></div>

                <div
                  onClick={() => {
                    setCurrentStep(1);
                    setType("landing page");
                    setFormData({ ...formData, type: "landing page" });
                  }}
                  className="flex rounded-xl hover:bg-white text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                  <h1 className="text-4xl">landing page</h1>
                </div>
                <div className="bg-gray-400 opacity-30"></div>

                <div
                  onClick={() => {
                    setCurrentStep(1);
                    setType("complex web app");
                    setFormData({ ...formData, type: "complex web app" });
                  }}
                  className="flex rounded-xl hover:bg-white text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                  <h1 className="text-4xl">complex web app</h1>
                </div>
              </div>
            )}

            {/* Step 1: Choose Budget Options */}
            {currentStep === 1 && (
              <div className="grid rounded grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1fr] gap-x-[0.52rem] gap-y-[0.52rem] auto-cols-fr row-span-2 col-span-9">
                {type === "Custom website" ? (
                  <>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({ ...formData, budget: "$500 - $1,500" });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$500 - $1,500"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                    <div className="bg-gray-400 opacity-30"></div>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({
                          ...formData,
                          budget: "$1,000 - $10,000",
                        });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$1,000 - $10,000"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                    <div className="bg-gray-400 opacity-30"></div>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({ ...formData, budget: "$10,000+" });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$10,000+"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                  </>
                ) : type === "Custom Shop" ? (
                  <>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({ ...formData, budget: "1,500 - $5,000" });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="1,500 - $5,000"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                    <div className="bg-gray-400 opacity-30"></div>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({
                          ...formData,
                          budget: "$5,000 - $15,000+",
                        });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$5,000 - $15,000+"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                  </>
                ) : type === "website remake" ? (
                  <>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({ ...formData, budget: "$500 - $1,500" });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$500 - $1,500"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                    <div className="bg-gray-400 opacity-30"></div>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({ ...formData, budget: "$1,500 - $5,000" });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$1,500 - $5,000"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                    <div className="bg-gray-400 opacity-30"></div>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({
                          ...formData,
                          budget: "$5,000 - $10,000+",
                        });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$5,000 - $10,000+"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                  </>
                ) : type === "landing page" ? (
                  <>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({ ...formData, budget: "$300 - $500" });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$300 - $500"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                    <div className="bg-gray-400 opacity-30"></div>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({ ...formData, budget: "$500 - $1,500" });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$500 - $1,500"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                  </>
                ) : type === "complex web app" ? (
                  <>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({ ...formData, budget: "$300 - $500" });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$300 - $500"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                    <div className="bg-gray-400 opacity-30"></div>
                    <div
                      onClick={() => {
                        setCurrentStep(2);
                        setFormData({ ...formData, budget: "$15,000+" });
                      }}
                      className="flex rounded-xl hover:bg-black duration-200 text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                      <h1 className="text-4xl">
                        <ScrambleText
                          textSize="text-1xl"
                          text="$15,000+"
                          Color="#fff"
                          speed={25}
                        />
                      </h1>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            )}

            {/* Step 2: Message Input */}
            {currentStep === 2 && (
              <div className="grid rounded grid-cols-[2fr_1px_1fr_1px_1fr_1px_1fr_1fr] gap-x-[0.52rem] gap-y-[0.52rem] auto-cols-fr row-span-2 col-span-9">
                <div className="flex rounded-xl hover:cursor-pointer items-center h-full">
                  <textarea
                    className="text-white resize-none outline-none border-none h-full text-3xl w-full"
                    id="message"
                    placeholder="Example: I want a website for my business..."
                    name="message"
                    maxLength="330"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gray-400 opacity-30"></div>
                <div
                  onClick={() => setCurrentStep(3)}
                  className="flex rounded-xl hover:bg-white text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                  <h1 className="text-4xl">
                    <ScrambleText
                      textSize="text-1xl"
                      text={formData.message === "" ? "skip" : "Next"}
                      Color="#fff"
                      speed={25}
                    />
                  </h1>
                </div>
              </div>
            )}

            {/* Step 3: Email & Name Input and Submit */}
            {currentStep === 3 && (
              <div className="grid rounded grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr_1px_1fr] gap-x-[0.52rem] gap-y-[0.52rem] auto-cols-fr row-span-2 col-span-9">
                <div className="flex flex-col rounded-xl p-4 text-white hover:cursor-pointer items-start justify-end h-full bg-gray-80">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="text-white resize-none outline-none border-none text-2xl w-full"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="bg-gray-400 opacity-30"></div>
                <div className="flex flex-col rounded-xl p-4 text-white hover:cursor-pointer items-start justify-end h-full bg-gray-80">
                  <label htmlFor="name">Name:</label>
                  <input
                    className="text-white resize-none outline-none border-none text-2xl w-full"
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="bg-gray-400 opacity-30"></div>
                <button
                  type="submit"
                  className="flex rounded-xl hover:bg-white text-white hover:cursor-pointer hover:text-black items-center justify-center h-full bg-gray-800">
                  <h1 className="text-4xl">Submit</h1>
                </button>
              </div>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
