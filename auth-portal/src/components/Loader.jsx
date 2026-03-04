import React from 'react'
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center
      bg-black/50 backdrop-blur-sm">

      <div className="w-14 h-14 border-4 border-green-500
        border-t-transparent rounded-full animate-spin"></div>

    </div>
  );
}
