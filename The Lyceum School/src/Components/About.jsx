const About = () => {
  return (
    <section className="about-section py-10 bg-gray-100">
      <div className="container mx-auto px-6 space-y-8">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">About Us</h2>

        {/* School Overview */}
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          The Lyceum School is committed to empowering the next generation through quality education. 
          Located in Village Jamal Khan Nizamani, near Ajan Shah, Tehsil: Hala New, District Matiari, Sindh, 
          our school offers classes from nursery and playgroup to grade 8. 
        </p>

        {/* Empowering Future Generations Section */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h3 className="text-2xl font-semibold text-gray-700 text-center">Empowering Future Generations</h3>
          <p className="text-gray-600 text-center">
            Supported by the <strong>Sindh Education Foundation</strong> and the Government of Sindh, 
            The Lyceum School provides free, high-quality education to underprivileged communities. 
          </p>
          <p className="text-gray-600 text-center">
            Under the guidance of <strong>Ameer Hyder Laghari</strong>, who ensures the school&apos;s operations 
            and policies align with excellence, we aim to deliver meaningful and impactful education.
          </p>
        </div>

        {/* Map Section */}
        <div className="map-container text-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Location</h3>
          <div className="map w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14362.269044625758!2d68.4622176!3d25.8508011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394b950024a8c659%3A0x77f3bcce11fa9e63!2sThe%20Lyceum%20High%20School!5e0!3m2!1sen!2s!4v1732994703673!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Lyceum School Location"
            ></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WbV3zRgpw_E?si=jy_GoWYGM8CgO1Yz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
