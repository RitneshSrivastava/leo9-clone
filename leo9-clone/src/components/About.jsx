import React from 'react';

function About() {
  return (
    <div className="w-full bg-zinc-900 py-20 px-10 md:px-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-3xl md:text-4xl leading-snug font-light">
          We are a creative design agency that combines{' '}
          <span className="text-gray-400">design expertise</span> with{' '}
          <span className="text-gray-400">technology</span> and{' '}
          <span className="text-gray-400">intelligence</span>. Our team of
          designers, developers, and strategists is passionate about creating
          beautiful and functional digital experiences that solve business
          problems.
        </p>
      </div>
    </div>
  );
}

export default About;