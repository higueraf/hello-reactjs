// Button.tsx
import React from 'react';

export const TailwindWorking: React.FC = () => {
  return (
    <>
    
     <div className="p-8">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Botón Tailwind
      </button>
      <p className="mt-4 text-xl text-green-600 font-semibold">TailwindCSS está funcionando ✅</p>
       
    <div className="flex flex-row space-x-4 p-4 bg-white rounded-xl shadow-md w-max">
      <div className="bg-fuchsia-500 text-white font-bold py-2 px-4 rounded">01</div>
      <div className="bg-fuchsia-500 text-white font-bold py-2 px-4 rounded">02</div>
      <div className="bg-fuchsia-500 text-white font-bold py-2 px-4 rounded">03</div>
    </div>
  

    </div>



      <div className="bg-blue-500 text-white p-6 rounded">
            TailwindCSS está funcionando
      </div>



    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
      Click Tailwind
    </button>
    </>
  );
};