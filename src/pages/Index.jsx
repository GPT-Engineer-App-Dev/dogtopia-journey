import { Dog, PawPrint } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-8 flex items-center justify-center text-green-800">
          <Dog className="mr-3 text-green-600" size={48} /> All About Dogs
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              alt="Cute dog"
              className="rounded-lg shadow-md mx-auto object-cover w-full h-[400px] mb-6"
            />
            <h2 className="text-3xl font-semibold mb-4 text-green-700">Man's Best Friend</h2>
            <p className="mb-4 text-green-600 leading-relaxed">
              Dogs are domesticated mammals renowned for their loyalty, companionship, and diverse breeds. They have been 
              living alongside humans for thousands of years, serving various roles from working animals to beloved pets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-green-700 flex items-center">
              <PawPrint className="mr-2 text-green-600" /> Canine Characteristics
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "Loyal and affectionate",
                "Intelligent and trainable",
                "Come in various sizes and shapes",
                "Have an excellent sense of smell and hearing"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-green-600">
                  <PawPrint className="mr-2 h-5 w-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Popular Breeds</h3>
            <ul className="grid grid-cols-2 gap-2 text-green-600">
              {[
                "Labrador Retriever",
                "German Shepherd",
                "Golden Retriever",
                "French Bulldog",
                "Beagle",
                "Poodle"
              ].map((breed, index) => (
                <li key={index} className="flex items-center">
                  <PawPrint className="mr-2 h-4 w-4 text-green-500" />
                  {breed}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
