const images = import.meta.glob('./assets/images/*.{jpeg,jpg,png,gif}', { eager: true });
const imagePaths = Object.values(images).map((module) => module.default);

const Gallery = () => {
  return (
    <section className="gallery-section py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Gallery</h2>
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {imagePaths.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
