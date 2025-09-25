import { BackgroundImage } from "@/sections/ParticipationSection/components/BackgroundImage";
import { ParticipationContent } from "@/sections/ParticipationSection/components/ParticipationContent";
import { TypeformEmbed } from "@/components/TypeformEmbed";

export const ParticipationSection = () => {
  return (
    <div className="relative box-border caret-transparent">
      <BackgroundImage />
      <ParticipationContent />
      <div id="form-section" className="items-center bg-[url('https://www.french-tacos-day.com/ftd-assets/ftd-textureorange.jpg')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-center min-h-0 py-8 md:min-h-[1000px] md:py-[200px]">
        <div className="box-border caret-transparent max-w-4xl w-full px-4">
          <img
            src="https://c.animaapp.com/mfxmfzp8WHj4Hi/assets/ftd-heuredelarecompense.png"
            alt=""
            className="box-border caret-transparent max-w-full w-full mb-8 mx-auto md:w-9/12"
          />
          <div className="box-border caret-transparent max-w-4xl mb-8 mx-auto px-4">
            <TypeformEmbed />
          </div>
          <div className="box-border caret-transparent">
            <p className="text-black text-xs box-border caret-transparent leading-4 text-center">
              En validant ce formulaire, les informations font l&#39;objet
              d&#39;un traitement informatisé par O'TACOS RÉUNION, destiné à répondre et assurer le suivi du jeu concours. Elles seront conservées durant le délai nécessaire au traitement pendant le jeu concours et de toute suite qui pourrait y être donnée.
              <br className="box-border caret-transparent" />
              <br className="box-border caret-transparent" />
              Conformément à la réglementation, vous disposez de droits
              d&#39;accès, de rectification, d&#39;effacement, de limitation,
              d&#39;opposition, le cas échéant de portabilité et de définir des
              directives relatives à vos données. Pour en savoir plus, vous pouvez vous rendre sur les{" "}
              <a
                href="/reglement"
                className="font-semibold box-border caret-transparent underline"
              >
                conditions du jeu concours
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
