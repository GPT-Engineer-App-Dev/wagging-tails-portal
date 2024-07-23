import React from 'react';
import { Bone, Heart, Shield, Dog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const DogBreed = ({ name, description }) => (
  <Card className="w-full max-w-sm">
    <CardHeader className="text-xl font-bold">{name}</CardHeader>
    <CardContent>{description}</CardContent>
  </Card>
);

const FeatureIcon = ({ Icon, text }) => (
  <div className="flex flex-col items-center">
    <Icon size={48} className="text-yellow-500 mb-2" />
    <span className="text-center">{text}</span>
  </div>
);

const DogLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to the Wonderful World of Dogs
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover the joy, love, and companionship that dogs bring to our lives.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button className="rounded-md shadow">Adopt a Dog</Button>
            <Button variant="outline" className="mt-3 sm:mt-0 sm:ml-3">Learn More</Button>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Why Dogs are Amazing</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureIcon Icon={Heart} text="Unconditional Love" />
            <FeatureIcon Icon={Shield} text="Loyal Companions" />
            <FeatureIcon Icon={Bone} text="Playful Nature" />
            <FeatureIcon Icon={Dog} text="Diverse Breeds" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Popular Dog Breeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <DogBreed 
              name="Labrador Retriever" 
              description="Friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog."
            />
            <DogBreed 
              name="German Shepherd" 
              description="Smart, confident, and versatile working dogs. Their courage is matched by their intelligence, making them ideal for search-and-rescue, police, and military service."
            />
            <DogBreed 
              name="Golden Retriever" 
              description="Intelligent, friendly, and devoted. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events."
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ready to Meet Your New Best Friend?</h2>
          <p className="mb-8 text-xl text-gray-600">Visit your local shelter or rescue organization today!</p>
          <Button size="lg" className="rounded-md shadow">Find a Dog Near You</Button>
        </section>
      </div>

      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; 2023 Dog Lovers United. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DogLandingPage;