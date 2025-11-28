import React, { useState } from 'react';
import { X } from 'lucide-react';

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md bg-white rounded-lg shadow-lg border border-slate-200 p-6 z-50">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
      >
        <X className="w-5 h-5" />
      </button>
      
      <h3 className="font-semibold text-slate-900 mb-3">This site uses cookies</h3>
      
      <p className="text-sm text-slate-600 mb-4">
        We and selected third parties use cookies (or similar technologies) for technical purposes, to enhance and analyze site usage, to support our marketing efforts, and for other purposes described below.
      </p>
      
      <p className="text-sm text-slate-600 mb-6">
        By clicking "Accept all", you agree to the storing of cookies on your device for these purposes.
      </p>
      
      <div className="flex space-x-3">
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
        >
          Deny
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-1 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          Accept all
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;