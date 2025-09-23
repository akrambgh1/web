/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Contact() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (checked) => {
    setFormData({
      ...formData,
      acceptTerms: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      toast.error("You must accept the terms and conditions.");
      return;
    }

    try {
      const res = await axios.post("/api/form", formData, {
        headers: { "Content-Type": "application/json" },
      });

  
  toast.success(res.data.message || "Form submitted successfully!");
  setFormData({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });
} catch (error) {
  console.error("Submission error:", error);
  let errMsg = "Submission failed.";
  if (error.response) {
    errMsg =
      error.response.data?.error ||
      error.response.data?.message ||
      "Something went wrong.";
  }
  toast.error(errMsg);
}

     
  };

  return (
    <>
      <Helmet>
        <title>Contact Weblocators | Get in Touch</title>
        <meta
          name="description"
          content="Get in touch with Weblocators — contact us for web development services and digital solutions."
        />
        <meta name="keywords" content="contact, web development, digital solutions" />
        <meta name="author" content="Weblocators" />
        <link rel="canonical" href="https://www.weblocators.com/contact" />
      </Helmet>

      <main>
        <div className="min-h-[100svh]   bg-white grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4 md:p-8">
          {/* Div 1: Title */}
          <div className="order-1 hidden  md:col-start-1 md:row-start-1 md:flex items-center justify-center">
            <h1 className="text-[2.25rem] md:text-[4rem] lg:text-[6rem] select-none font-[500] tracking-tighter text-[#1e1e1e] uppercase">
              Get in Touch
            </h1>
          </div>
        
          {/* Div 2: Card */}
         
          <Card className="order-3 md:col-start-1 md:row-start-2 bg-[#1e1e1e] text-white rounded-2xl p-2 md:p-8 flex flex-col justify-end gap-4 border-[2px] relative">
            
          
            <CardHeader className="absolute  w-full top-0 left-0 p-2 md:p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <CardTitle className="tracking-tighter font-[500]">Welcome</CardTitle>
              </div>
              <CardTitle className={"text-[14px] md:text-1xl m-"} >Tel us how can we help you</CardTitle>
            </CardHeader>
            
            <CardContent className={"p-2 md:p-4"}>
              <form onSubmit={handleSubmit} className=" space-y-2 md:space-y-4">
                <div className="flex flex-col gap-2 md:gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="m@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid w-full gap-3">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                     
                      className={"resize-none h-20 md:h-[150px]"}
                      placeholder="Type your message here."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-muted-foreground text-sm">
                      Your message will be sent to our support team.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className={'w-full'} onClick={handleSubmit} >
                Send the message
              </Button>
              </CardFooter>
             
          </Card>
          
        
          {/* Div 3: Image */}
          
          <div className="order-2 md:col-start-2 md:row-span-2 h-full p-5 flex justify-start items-end bg-[url('/7.webp')] bg-center bg-cover md:rounded-[25px] rounded-xl">
            <h1 className="text-[2.25rem] md:text-[4rem] lg:text-[6rem] md:hidden  select-none font-[500] tracking-tighter text-white uppercase">
              Get in Touch
            </h1></div>

        </div>
         
        
      </main>
    </>
  );
}
