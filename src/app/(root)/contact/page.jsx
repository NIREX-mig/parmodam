"use client";

import { useEffect, useState } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

export default function Contact() {
  const { setMobileNavIsOpen } = useGlobalContext();

  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [mailData, setMailData] = useState({
    message: "",
    name: "",
    email: "",
    phone: "",
  });


  const handleMailSubmit = async (e) => {
    e.preventDefault();
    // call send mail api
    try {
      const res = await axios.post(`/api/contact/sendusmail`, mailData);
      const { data } = res;

      if (data.success) {
        setMailData({
          message: "",
          name: "",
          email: "",
          phone: "",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: `${error?.response?.data?.message || "Somethig went wrong"} `,
      });
    } finally {
      setLoading(false);
    }
  }

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMailData({ ...mailData, [name]: value });
  }

  useEffect(() => {
    setMobileNavIsOpen(false);
  }, []);

  return (
    <section>
      <div className="page-header">
        <div className="page-header-content">
          <div className="container mx-auto">
            <h2 className="heading font-bold">Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="main-wrapper m_tp_0 px-5">
        <div className="container mx-auto">
          <div className="contact_info">
            <div className="infobox">
              <div className="infobox_content">
                <p>Phone No</p>
                <h6>+91 8291749175</h6>
              </div>
            </div>

            <div className="infobox">
              <div className="infobox_content">
                <p>E-mail Address</p>
                <h6>pramodrevolution@gmail.com</h6>
                <h6>pramodam.co.in@gmail.com</h6>
              </div>
            </div>

            <div className="infobox">
              <div className="infobox_content">
                <p>Office Address</p>
                <h6>N/A</h6>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10">
              <div className="contact" data-aos="fade-up" data-aos-duration="700">
                <div className="contact_title">
                  <h3>Send Us Mail</h3>
                  <div className="title_line"></div>
                </div>
                <form className="contact_form" onSubmit={handleMailSubmit}>
                  <p className="form_note">Your email adress will not be published. Required field are marked *</p>
                  <div className="form-container">
                    <div className="row">
                      <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                          <textarea type="text" name="message" className="form-control" placeholder="Message*" value={mailData.message} onChange={handleOnChange} required></textarea>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <input type="text" name="name" className="form-control" value={mailData.name} onChange={handleOnChange} placeholder="Name*" required />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <input type="email" name="email" className="form-control" placeholder="E-mail*" value={mailData.email} onChange={handleOnChange} required />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <input type="text" name="phone" value={mailData.phone} onChange={handleOnChange} className="form-control" placeholder="Phone No" />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="bg-gladeGreen-500 hover:bg-gladeGreen-600 text-white px-10 py-3"
                          > Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
