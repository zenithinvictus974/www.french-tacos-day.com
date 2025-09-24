import { useEffect, useRef } from 'react';

export const TypeformEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Typeform script if not already loaded
    const loadTypeformScript = () => {
      return new Promise<void>((resolve) => {
        if (document.querySelector('script[src*="embed.typeform.com"]')) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://embed.typeform.com/next/embed.js';
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    // Initialize Typeform after script is loaded
    const initTypeform = async () => {
      await loadTypeformScript();
      
      // Wait a bit for the script to initialize
      setTimeout(() => {
        if (containerRef.current && (window as any).tf) {
          (window as any).tf.load();
        }
      }, 100);
    };

    initTypeform();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg p-4">
      <div 
        ref={containerRef}
        data-tf-live="01K5XJNY866AQJS2E3XD2A198C"
        data-tf-opacity="100"
        data-tf-iframe-props="title=French Tacos Day Form"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        style={{ 
          minHeight: '600px', 
          width: '100%',
          border: 'none',
          backgroundColor: 'white'
        }}
      />
    </div>
  );
};
