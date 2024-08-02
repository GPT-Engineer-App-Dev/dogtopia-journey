import { Dog } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 flex items-center text-gray-800">
        <Dog className="mr-2 text-gray-700" /> All About Dogs
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
            alt="Cute dog"
            className="rounded-lg shadow-lg mx-auto object-cover w-full h-[400px]"
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Man's Best Friend</h2>
          <p className="mb-4 text-gray-700">
            Dogs are domesticated mammals known for their loyalty, companionship, and diverse breeds. They have been 
            living alongside humans for thousands of years, serving various roles from working animals to beloved pets.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Characteristics</h3>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Loyal and affectionate</li>
            <li>Intelligent and trainable</li>
            <li>Come in various sizes and shapes</li>
            <li>Have an excellent sense of smell and hearing</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Popular Breeds</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Labrador Retriever</li>
            <li>German Shepherd</li>
            <li>Golden Retriever</li>
            <li>French Bulldog</li>
            <li>Beagle</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
