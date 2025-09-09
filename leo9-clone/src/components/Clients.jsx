import React from 'react';
import { Server, Cloud, Database, Cpu, GitBranchPlus, Users, Package, Code } from 'lucide-react';

function Clients() {
  const icons = [
    <Server />, <Cloud />, <Database />, <Cpu />, <GitBranchPlus />, <Users />, <Package />, <Code />
  ];

  return (
    <div className="w-full bg-zinc-900 py-20 px-10 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl text-gray-400 mb-10">
          Trusted by the world's best companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-16">
          {icons.map((icon, index) => (
            <div key={index} className="text-gray-500">
              {React.cloneElement(icon, { size: 48 })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
