import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white flex flex-col py-20">
      <p className="text-6xl font-bold">
        <span className="font-thin text-gray">Get</span> in Touch.
      </p>
      <p className="text-lg text-neutral pt-5">We can improve your business together</p>
      <div className="flex flex-row text-2xl justify-center gap-20 pt-10">
        <p><span className="font-thin">Phone #:</span> +57 3148545066</p>
        <p><span className="font-thin">Email:</span> idacera@hotmail.com</p>
      </div>
    </footer>
  );
}
