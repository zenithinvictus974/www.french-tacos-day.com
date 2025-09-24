export const LegalText = () => {
  return (
    <div className="box-border caret-transparent">
      <p className="text-black text-xs box-border caret-transparent leading-4 text-center">
        En validant ce formulaire, les informations font l&#39;objet d&#39;un
        traitement informatisé par Coca-Cola Europacific Partners France,
        destiné à répondre et assurer le suivi du jeu concours. Elles seront
        conservées durant le délai nécessaire au traitement pendant le jeu
        concours et de toute suite qui pourrait y être donnée.
        <br className="box-border caret-transparent" />
        <br className="box-border caret-transparent" />
        Conformément à la réglementation, vous disposez de droits d&#39;accès,
        de rectification, d&#39;effacement, de limitation, d&#39;opposition, le
        cas échéant de portabilité et de définir des directives relatives à la
        conservation, à l&#39;effacement et à la communication de vos données à
        caractère personnel après votre décès. Pour en savoir plus, vous pouvez
        vous rendre sur la{" "}
        <a
          href="https://www.coca-cola-france.fr/politique-de-confidentialite"
          className="font-semibold box-border caret-transparent underline"
        >
          Politique de confidentialité
        </a>
        de la société Coca-Cola.
      </p>
    </div>
  );
};
