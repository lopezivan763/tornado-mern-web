function ContactForm() {
  return (
    <main>
      <section className="bg-[#09090b] text-white font-bold p-5">
        <h1 className="flex justify-center text-4xl md:text-5xl">
          Get In Touch{" "}
        </h1>
      </section>
      <div className="max-w[1040px] flex flex-wrap justify-center py-4 md:py-10 bg-[#09090b] text-[#E4C580]">
        <div className="flex items-center pb-6 md:p-4 md:m-4 w-80 text-xl ">
          <strong>
            Please complete the form by providing your email, phone number, and
            tire size.
            <br />
            Once you submit the form, you&apos;ll receive a confirmation. Our
            dedicated representatives will promptly reach out to assist you
            further.
          </strong>
        </div>
        <form action="https://getform.io/f/65f1d442-6a0d-468e-8e20-97223d1949a8" method="POST" encType="multipart/form-data">
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="flex flex-col">
              <input
                placeholder="Name"
                className="rounded-lg p-3 flex text-[#09090b]"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <input
                placeholder="Phone"
                className="rounded-lg p-3 flex text-[#09090b]"
                type="text"
                name="phone"
              />
            </div>
          </div>
          <div className="flex flex-col py-3">
            <input
              placeholder="Email"
              className="rounded-lg p-3 flex text-[#09090b]"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-3">
            <textarea
              placeholder="Message"
              className="rounded-lg p-3 text-[#09090b]"
              rows="6"
              name="message"
            ></textarea>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#E4C580] text-[#09090b] mt-2 w-full md:w-48 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none">
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ContactForm;
