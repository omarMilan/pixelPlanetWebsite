import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ka79qw4",
        "template_c8kj0so",
        form.current,
        "76bLfmp29QTJ8BbxB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const isFormValid = () => {
    return email.trim() !== "" && message.trim() !== "";
  };

  return (
    <div className="flex justify-center items-center h-screen font-headerFont">
      <div className="w-full max-w-3xl">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-600 shadow-md rounded-sm px-12 pt-6 pb-8 mb-4 ring-2 border-2 border-slate-500 ring-neutral-950"
        >
          <div className="mb-4">
            <label className="block text-slate-50 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-4 text-customBlack leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-50 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-4 text-customBlack leading-tight focus:outline-none focus:shadow-outline h-24 resize-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`bg-customPurple text-customBlack transition-colors duration-300 ease-in-out hover:text-slate-50 hover:bg-customBlack font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                !isFormValid() || isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
