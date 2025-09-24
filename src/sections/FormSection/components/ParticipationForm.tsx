export const ParticipationForm = () => {
  return (
    <form className="box-border caret-transparent max-w-4xl mb-8 mx-auto px-4">
      <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-center gap-y-8 mb-8 md:flex-row">
        <input
          type="text"
          placeholder="Ton Nom"
          name="name"
          className="text-black text-[15px] font-bold box-border caret-transparent block leading-[22.5px] w-full p-4 rounded-[3.35544e+07px] md:text-lg md:leading-7 md:w-64"
        />
        <input
          type="email"
          placeholder="Ton Email"
          name="email"
          className="text-black text-[15px] font-bold box-border caret-transparent block leading-[22.5px] w-full p-4 rounded-[3.35544e+07px] md:text-lg md:leading-7 md:w-64"
        />
        <div className="[align-items:normal] box-border caret-transparent block text-center md:items-center md:flex">
          <p className="text-black text-sm font-bold box-border caret-transparent leading-5 min-h-0 min-w-0 mr-0 mb-2 md:text-lg md:leading-[27px] md:min-h-[auto] md:min-w-[auto] md:mr-2 md:mb-0">
            Ta preuve d&#39;achat
          </p>
          <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
            <img
              src="https://c.animaapp.com/mfxmfzp8WHj4Hi/assets/ftd-download.png"
              alt="Télécharger"
              className="box-border caret-transparent h-12 max-w-full w-12 mx-auto md:h-16 md:w-16"
            />
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent max-w-2xl text-center mb-8 mx-auto">
        <label className="text-black text-sm font-bold items-start box-border caret-transparent gap-x-3 flex leading-5 gap-y-3 md:text-lg md:leading-[27px]">
          <input
            type="checkbox"
            name="terms"
            className="text-sm bg-transparent box-border caret-transparent block h-4 leading-5 text-start w-4 mt-1 p-0 md:text-lg md:leading-[27px]"
          />
          <span className="text-sm box-border caret-transparent block leading-5 md:text-lg md:leading-[27px]">
            En cochant cette case, j&#39;accepte les
            <a
              href="/French-Tacos-Day-Reglement.pdf"
              className="text-sm box-border caret-transparent leading-5 underline md:text-lg md:leading-[27px]"
            >
              conditions du jeu concours
            </a>
            et je certifie sur l&#39;honneur que les informations fournies sont
            exactes. Dans le cas contraire, ma participation sera supprimée.
          </span>
        </label>
      </div>
      <div className="box-border caret-transparent text-center">
        <span className="shadow-[rgba(208,129,0,0.6)_0px_6px_10px_0px,rgba(18,6,35,0.1)_0px_4px_18px_0px,rgba(44,13,109,0.14)_0px_14px_45px_0px] box-border caret-transparent inline-block h-[59px] bg-[position:0px_0px] rounded-[32px]">
          <button
            type="submit"
            className="[mask-image:url('https://www.french-tacos-day.com/buttons/o-button-mask-middle.svg')] relative text-black text-[27px] bg-white bg-[linear-gradient(rgb(255,209,99)_0%,rgb(255,220,145)_8.17%,rgb(255,213,115)_39.9%,rgb(255,197,82)_62.5%,rgb(255,187,70)_83.65%,rgb(255,198,97)_96.63%),none] bg-size-[auto,auto] border-b-amber-400 caret-transparent h-[62px] leading-[64px] [mask-repeat:repeat-x] [mask-size:auto_64px] -translate-y-0.5 bg-[position:0%,0%_0%,0%] px-12 py-0 rounded-[32px] border-t-0 border-x-0 border-b font-impact before:accent-auto before:bg-[url('https://www.french-tacos-day.com/buttons/o-button-texture-middle.png')] before:bg-[position:0px_100%] before:bg-repeat-x before:bg-size-[auto_122px] before:box-border before:caret-transparent before:text-black before:block before:text-[27px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[64px] before:list-outside before:list-disc before:mix-blend-soft-light before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-9 before:border-separate before:left-0 before:inset-y-0 before:font-impact after:accent-auto after:bg-[url('https://www.french-tacos-day.com/buttons/o-button-texture-middle.png')] after:bg-[position:-24px_100%] after:bg-repeat-x after:bg-size-[auto_122px] after:box-border after:caret-transparent after:text-black after:block after:text-[27px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[64px] after:list-outside after:list-disc after:mix-blend-soft-light after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-9 after:border-separate after:right-0 after:inset-y-0 after:font-impact"
          >
            <span className="absolute bg-[url('https://www.french-tacos-day.com/buttons/o-button-texture-middle.png')] bg-repeat-x bg-size-[auto_122px] box-border caret-transparent block mix-blend-soft-light inset-x-9 inset-y-0"></span>
            Envoyer
          </button>
        </span>
      </div>
    </form>
  );
};
