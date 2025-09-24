export const ParticipateButton = () => {
  const handleClick = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="text-base font-bold bg-white box-border caret-transparent leading-6 uppercase px-4 py-3 rounded-[32px] md:text-xl md:leading-7 md:px-6 md:py-4 cursor-pointer hover:bg-gray-100 transition-colors"
    >
      Je participe
    </button>
  );
};
