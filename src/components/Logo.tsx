import React from 'react';
import { Palette } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Palette className="w-8 h-8 text-purple-600" />
        <div className="absolute -inset-1 bg-purple-600/20 blur-sm rounded-full" />
      </div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
        Canvasia
      </span>
    </div>
  );
}