import Navbar from "../components/Navbar";
import logo from "../assets/public/images/white_logo.jpeg";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="relative h-[50vh] w-full">
        <img
          src={logo}
          alt="School Logo"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold tracking-wide">Our Mission</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            Nurturing curiosity, creativity, and confidence in every child
          </p>
        </div>
      </div>
      <div className="w-[95%] mx-auto py-16 space-y-10">
  <div className="max-w-4xl space-y-5">
    <p className="text-lg text-gray-700 leading-relaxed">
      Each and every child is a unique individual with his/her own talents and abilities.
      Children are born learners, with a strong sense of curiosity, imagination, and creativity.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed">
      At <span className="font-semibold">Sharada Shishu Mandir, Alekhapada</span>,
      our mission is to treat each child with respect while nurturing their natural
      desire to learn. We believe emotionally healthy children are best prepared
      for later schooling.
    </p>
  </div>
  </div>

  <div className="grid md:grid-cols-2 gap-6 mt-10">
  {[
    "Low student–teacher ratio",
    "Creative curriculum focused on curiosity",
    "Pre-reading & pre-writing skill development",
    "Safe & joyful play environment",
    "Music and art for self-expression",
  ].map((item, index) => (
    <div
      key={index}
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <h3 className="font-semibold text-lg text-blue-600">
        {item}
      </h3>
    </div>
  ))}
</div>


  <div className="mt-20 bg-blue-50 py-14 rounded-2xl">
  <h2 className="text-4xl font-bold text-center mb-12">
    Why Parents Trust Us
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
    
    {/* Teachers */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-5xl mb-4">👨‍🏫</div>
      <h3 className="text-3xl font-bold text-blue-600">20+</h3>
      <p className="mt-2 text-gray-600 font-medium">Dedicated Teachers</p>
    </div>

    {/* Students */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-5xl mb-4">👧</div>
      <h3 className="text-3xl font-bold text-blue-600">500+</h3>
      <p className="mt-2 text-gray-600 font-medium">Happy Students</p>
    </div>

    {/* Experience */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-5xl mb-4">🏆</div>
      <h3 className="text-3xl font-bold text-blue-600">15+</h3>
      <p className="mt-2 text-gray-600 font-medium">Years of Excellence</p>
    </div>

  </div>
</div>


    </>
  );
}
