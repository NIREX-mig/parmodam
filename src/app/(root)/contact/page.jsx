"use client";

import Image from "next/image";
import Insta from "@/public/assets/instagram.png";
import Facebook from "@/public/assets/facebook.png";
import Threads from "@/public/assets/threads.png";
import Linkedin from "@/public/assets/linkedin.png";
import Link from "next/link";
import { instaHref, fbHref, threadHref, linkedinHref } from "@/constant/index";
import { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";

export default function Contact() {
  // const { setMobileNavIsOpen } = useGlobalContext();

  // useEffect(() => {
  // setMobileNavIsOpen(false);
  // }, []);

  return (
    <section>
      <div className="page-header">
        <div className="page-header-content">
          <div className="container mx-auto">
            <h2 className="heading font-bold">Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="main-wrapper m_tp_0">
        <div className="container mx-auto">
          <div className="contact_info">
            <div className="infobox">
              <div className="infobox_icon">
                {/* <img className="primary_img" src="images/phonebook_white.png" alt="alt" /> */}
              </div>
              <div className="infobox_content">
                <p>Phone No</p>
                <h6>+ 123 456 78 99</h6>
                <h6>+ 987 654 32 05</h6>
              </div>
            </div>

            <div className="infobox">
              <div className="infobox_icon">
                {/* <img className="primary_img" src="images/mailbox_white.png" alt="alt" /> */}
              </div>
                <p>E-mail Address</p>
                <h6>benzoblog@gmail.com</h6>
                <h6>benzoeditor@gmail.com</h6>
              </div>
              <div className="infobox_content">
            </div>

            <div className="infobox">
              <div className="infobox_icon">
                {/* <img className="primary_img" src="images/map_white.png" alt="alt" /> */}
              </div>
              <div className="infobox_content">
                <p>Office Address</p>
                <h6>113 Salt Lake City, Utah<br />
                  United States of America</h6>
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
                <form className="contact_form" action="https://wpthemebooster.com/demo/themeforest/html/benzo/register.php" method="post">
                  <p className="form_note">Your email adress will not be published. Required field are marked *</p>
                  <div className="form-container">
                    <div className="row">
                      <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                          <textarea type="text" name="message" className="form-control" placeholder="Message*" required></textarea>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <input type="text" name="name" className="form-control" placeholder="Name*" required />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <input type="email" name="email" className="form-control" placeholder="E-mail*" required />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="form-group">
                          <input type="text" name="phone" className="form-control" placeholder="Phone No" />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                          <input className="button" type="submit" value="Submit" name="submit" />
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






    // <section className="w-full bg-primary-50 h-[calc(100vh-75px)] text-black px-12 py-5">
    //   <div className="flex lg:gap-20 justify-center">
    //     <div className="md:mr-[10rem] md:mt-[4rem]">
    //       <div className="md:w-80">
    //         <h1 className="md:text-7xl text-5xl font-bold">contact.</h1>
    //         <p className="md:text-xl text-lg text-gray-600 dark:text-gray-500 mt-5">
    //           Get in touch with me via social media and email.
    //         </p>
    //       </div>

    //       <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-10 gap-y-5 gap-x-4 mt-16">
    //         <Link
    //           href={threadHref}
    //           target="_blank"
    //           className="flex gap-2 items-center"
    //         >
    //           <Image
    //             src={Threads}
    //             alt="logo"
    //             width={50}
    //             height={50}
    //             className="rounded-full"
    //           />

    //           <h2 className="font-semibold text-xl text-black">Threads</h2>
    //         </Link>

    //         <Link
    //           href={fbHref}
    //           target="_blank"
    //           className="flex gap-2 items-center"
    //         >
    //           <Image
    //             src={Facebook}
    //             alt="logo"
    //             width={50}
    //             height={50}
    //             className="rounded-full"
    //           />

    //           <h2 className="font-semibold text-xl text-blue-600">Facebook</h2>
    //         </Link>
    //         <Link
    //           href={linkedinHref}
    //           target="_blank"
    //           className="flex gap-2 items-center"
    //         >
    //           <Image
    //             src={Linkedin}
    //             alt="logo"
    //             width={50}
    //             height={50}
    //             className="rounded-full"
    //           />

    //           <h2 className="font-semibold text-xl text-blue-600">Linked In</h2>
    //         </Link>
    //         <Link
    //           href={instaHref}
    //           target="_blank"
    //           className="flex gap-2 items-center"
    //         >
    //           <Image
    //             src={Insta}
    //             alt="logo"
    //             width={50}
    //             height={50}
    //             className="rounded-full"
    //           />
    //           <h2 className="font-semibold text-xl text-pink-600">Instagram</h2>
    //         </Link>
    //       </div>
    //     </div>

    //     <div className="">
    //       <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg ">
    //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us Mail</h2>
    //         <p className="text-sm text-gray-600 mb-6">
    //           Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
    //         </p>
    //         <form action="#" method="POST">
    //           <div className="mb-4">
    //             <label for="message" className="block text-sm text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
    //             <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"></textarea>
    //           </div>
    //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    //             <div>
    //               <label for="name" className="block text-sm text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
    //               <input id="name" name="name" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500" />
    //             </div>
    //             <div>
    //               <label for="email" className="block text-sm text-gray-700 mb-1">E-mail <span className="text-red-500">*</span></label>
    //               <input id="email" name="email" type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500" />
    //             </div>
    //             <div>
    //               <label for="phone" className="block text-sm text-gray-700 mb-1">Phone No</label>
    //               <input id="phone" name="phone" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500" />
    //             </div>
    //           </div>
    //           <div>
    //             <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-500">
    //               Submit
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
