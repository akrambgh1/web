
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
const Input = () => {
    const [newsletter, setNewsletter] = useState({
        
        email: "",
        
    });
    const [ResponseMsg, setResponseMsg] =useState("")
     const handleChange = (e) => {
        setNewsletter({
          ...newsletter,
          [e.target.email]: e.target.value,
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("emails/api/form", newsletter, {
            headers: { "Content-Type": "application/json" },
          });
          const msg = res.data.message || " email submitted successfully!";
          setResponseMsg(msg);
          toast.success(ResponseMsg);
          
          setNewsletter({  email: "" });
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
  return (
      <StyledWrapper>
          <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="email" onChange={handleChange} className="input" id="Email" name="Email" placeholder="contatus@weblocators.com" autoComplete="off" />
        <input className="button--submit" defaultValue="Subscribe" type="submit" />
      </div></form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input-group {
    display: flex;
    align-items: center;
  }

  .input {
    min-height: 50px;
    max-width: 15rem;
    padding: 0 1rem;
    color: #fff;
    font-size: 15px;
    border: 1px solid #c0dbff  ;
    border-radius: 6px 0 0 6px;
    background-color: transparent;
  }

  .button--submit {
    min-height: 50px;
    padding: .5em 1em;
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #c0dbff ;
    font-weight:600;
    color: #1e1e1e;
    font-size: 15px;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
  }

  .button--submit:hover {
    background-color: #81b1f0;
  }

  .input:focus, .input:focus-visible {
    border-color: #81b1f0;
    outline: none;
  }`;

export default Input;
