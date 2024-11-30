import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20">
      <div className="hero-content text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">The Lyceum School</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Building a brighter future with quality education.
        </p>
        <Link
          to="/About"
          className="bg-yellow-300 text-blue-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 hover:shadow-xl transition duration-300"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default Home;
