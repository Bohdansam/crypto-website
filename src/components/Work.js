import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      image: 'https://i.imgur.com/3OAHGPc.png',
      title: 'Download',
      description: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.',
    },
    {
      id: 2,
      image: 'https://i.imgur.com/DarCfQG.png',
      title: 'Connect Wallet',
      description: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.',
    },
    {
      id: 3,
      image: 'https://i.imgur.com/zhv95Ya.png',
      title: 'Start Trading',
      description: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.',
    },
    {
      id: 4,
      image: 'https://i.imgur.com/SNsIbjd.png',
      title: 'Earn Money',
      description: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.',
    },
  ];

  return (
    <div className="bg-cryptoBG2 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center">How It Works</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
  {steps.map((step) => (
    <div key={step.id} className="flex flex-col items-center text-center">
      <img src={step.image} alt={step.title} className="w-30 h-30" />
      <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
      <p className="mt-2 text-base text-cryptoGray">{step.description}</p>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default HowItWorks;