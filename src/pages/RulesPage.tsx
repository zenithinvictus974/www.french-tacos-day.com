import React from 'react';
import { useNavigate } from 'react-router-dom';

export const RulesPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[url('https://www.french-tacos-day.com/ftd-assets/ftd-textureorange.jpg')] bg-no-repeat bg-cover py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <img
              src="https://cdn.prod.website-files.com/64ba1f9dc11e6662d2c9738b/68d3d6476d484e4f3c4eaa37_header-p-800.png"
              alt="O'Tacos"
              className="h-16 md:h-20"
            />
            <button
              onClick={handleBackToHome}
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Retour
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-600">
          RÈGLEMENT DU JEU CONCOURS
        </h1>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">
            JEU AVEC OBLIGATION D'ACHAT – TIRAGE AU SORT EN POINT DE VENTE
          </h2>
        </div>

        <div className="space-y-8">
          {/* Article 1 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-orange-600">Article 1 – Dépôt du règlement</h3>
            <p className="text-gray-700 leading-relaxed">
              Le présent règlement est déposé auprès de la SELAS ACTA – Commissaires de Justice associés, 25 bd Joffre, 54000 NANCY – Office de Metz, 15 rue de Sarre BP 15126, 57074 METZ Cedex 3.
              <br />
              Il peut être adressé gratuitement à toute personne qui en fait la demande auprès de la société organisatrice.
            </p>
          </section>

          {/* Article 2 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-orange-600">Article 2 – Organisation</h3>
            <p className="text-gray-700 leading-relaxed">
              La société ISFAHAAN, exploitant l'enseigne O'TACOS RÉUNION, dont le siège social est situé au 50 rue du Général de Gaulle, 97438 Sainte-Marie, organise un jeu intitulé : <strong>« FRENCH TACOS DAY »</strong>.
              <br /><br />
              Ce jeu, avec obligation d'achat, se déroule du <strong>26 septembre au 7 octobre inclus</strong>.
            </p>
          </section>

          {/* Article 3 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-orange-600">Article 3 – Conditions de participation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le jeu est ouvert à toute personne physique âgée de plus de 16 ans, résidant à La Réunion, à l'exclusion :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>du personnel des entités ayant participé directement ou indirectement à la conception, l'organisation, la réalisation et/ou la gestion du jeu,</li>
              <li>des personnes travaillant dans les points de vente participants,</li>
              <li>ainsi que des membres de leur famille.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">Pour participer, il faut :</p>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
              <li>Acheter un O'Tacos M + un Coca-Cola (ou toute boisson Brasserie de Bourbon),</li>
              <li>Remplir un bulletin de participation en scannant le QR Code disponible en restaurant, et indiquer ses coordonnées (nom, prénom, adresse postale, adresse email, date de naissance).</li>
            </ol>
            <div className="bg-orange-100 p-4 rounded-lg">
              <p className="text-orange-800 font-semibold">➤ La participation est limitée à une fois par personne et par jour.</p>
              <p className="text-orange-800 font-semibold">➤ Un seul lot sera attribué par foyer (même nom, même adresse).</p>
            </div>
          </section>

          {/* Article 4 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-orange-600">Article 4 – Modalités du tirage au sort</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un tirage au sort en point de vente désignera le(s) gagnant(s) des lots suivants :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="space-y-2 text-gray-700">
                <li><strong>1 iPhone 17</strong> – valeur 1 498 €</li>
                <li><strong>3 Pass CARRÉ OR pour le concert KARTEL URBAN LIVE le 11 octobre 2025</strong> – valeur unitaire 68 € + accès au backstage pour rencontrer les artistes</li>
                <li><strong>20 places « normales » pour le concert KARTEL URBAN LIVE le 11 octobre 2025</strong> – valeur unitaire 27€</li>
                <li><strong>20 Runbox</strong> – valeur unitaire 29€</li>
                <li><strong>20 places de cinéma</strong> – valeur unitaire 10,91€ (date de validité au 24/02/2026)</li>
                <li><strong>1 air pod pro 3</strong> – valeur 249 €</li>
                <li><strong>1 oakley meta</strong> – valeur 519 €</li>
                <li><strong>1 Trottinette</strong> – valeur 399,99 €</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Les lots devront être récupérés directement dans le restaurant où le participant a pris part au jeu, dans un délai maximum de 3 mois à compter de la date de notification des résultats. Passé ce délai, les lots non réclamés seront considérés comme perdus.
            </p>
          </section>

          {/* Article 5 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-orange-600">Article 5 – Remise des dotations</h3>
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-green-800 font-semibold text-center">Tirage au sort prévu le 8 octobre 2025</p>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Les dotations seront à retirer dans l'un des restaurants indiqués sur le bulletin de participation, dans un délai d'un mois à compter de la date du tirage au sort.</li>
                <li>Les gagnants devront justifier de leur identité.</li>
                <li><strong>Passé ce délai, les dotations seront considérées comme perdues.</strong></li>
                <li>Pour les participants mineurs, une autorisation du représentant légal sera exigée pour la remise du lot.</li>
                <li>Les dotations ne peuvent en aucun cas être échangées contre leur valeur en espèces.</li>
                <li>O'TACOS RÉUNION se réserve le droit de proposer un lot équivalent ou supérieur en cas de nécessité.</li>
              </ul>
            </div>
          </section>

          {/* Article 6 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-orange-600">Article 6 – Responsabilité</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Tout bulletin de participation illisible, raturé, déchiré, altéré, photocopié, incomplet ou hors délai sera automatiquement refusé.</p>
              <p>La responsabilité de O'TACOS RÉUNION ne pourra être engagée en cas de force majeure ou d'événements indépendants de sa volonté, notamment si ces derniers empêchaient totalement ou partiellement les gagnants de bénéficier de leur lot.</p>
            </div>
          </section>

          {/* Article 7 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-orange-600">Article 7 – Données personnelles</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>Dans le cadre du présent jeu, vos données personnelles sont collectées pour la seule finalité de l'organisation et du suivi du jeu concours.</p>
              <p>Elles ne seront utilisées à d'autres fins qu'avec votre consentement exprès.</p>
              <p>Conformément à la réglementation en vigueur, chaque participant dispose d'un droit :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>d'information, d'accès et de portabilité,</li>
                <li>de rectification et d'effacement,</li>
                <li>de limitation et d'opposition.</li>
              </ul>
              <p>Les données seront automatiquement supprimées dans le mois qui suit la fin du jeu, sauf consentement exprès pour une durée et des finalités supplémentaires, précisées le cas échéant.</p>
            </div>
          </section>

          {/* Article 8 */}
          <section>
            <h3 className="text-xl font-bold mb-4 text-orange-600">Article 8 – Modification du jeu</h3>
            <p className="text-gray-700 leading-relaxed">
              La société organisatrice se réserve le droit de prolonger, écourter, modifier ou annuler le jeu à tout moment, notamment en cas de force majeure, sans qu'aucune indemnité ne puisse être réclamée par les participants.
              <br />
              Tout avenant au présent règlement sera déposé à la SELAS ACTA – Commissaires de Justice associés.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <button
            onClick={handleBackToHome}
            className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-colors"
          >
            Retour au jeu concours
          </button>
        </div>
      </main>
    </div>
  );
};
