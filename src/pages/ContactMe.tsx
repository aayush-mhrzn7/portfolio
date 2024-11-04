const ContactMe = () => {
  return (
    <div className=" h-screen flex-col flex justify-center items-center font-primary bg-MainbackgroundColor">
      <div className="bg-white p-8 rou rounded-md shadow-md m-5">
        <h2 className="text-3xl font-heading text-primary my-5">
          I'd Love to Hear From you
        </h2>
        <h3 className="text-2xl font-medium">Get In Touch</h3>
        <p className="text-xl">
          If you would like to share your ideas or collaborate on a project,
          <br />
          please don't hesitate to reach out at{" "}
          <strong>twinkeshrestha099@gmail.com</strong>. <br /> I look forward to
          getting to know you !
        </p>
        <form action="">
          <div>
            <label
              className="font-semibold my-2 block text-xl rounded-md"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border p-3 "
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              className="font-semibold my-2 block text-xl rounded-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              className="w-full border p-3 "
              placeholder="youremail@example.com "
            />
          </div>
          <div>
            <label
              className="font-semibold my-2 block text-xl rounded-md"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="w-full border p-3 "
              placeholder="your message here...."
            />
          </div>
          <button className="w-full p-4 bg-primary my-4 rounded-md font-semibold text-xl text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
