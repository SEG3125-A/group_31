import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Chainsaw Man": "Chainsaw Man",
          "Chainsaw Man Description": "Chainsaw Man follows the story of Denji, an impoverished young man who makes a contract that fuses his body with that of a dog-like devil named Pochita, granting him the ability to transform parts of his body into chainsaws. Denji eventually joins the Public Safety Devil Hunters, a government agency focused on fighting against devils whenever they become a threat to Japan.",
          "One Piece": "One Piece",
          "One Piece Description": "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda...",
          "Dark": "Dark",
          "Dark Description": "Dark is a German science fiction thriller television series co-created by Baran bo Odar and Jantje Friese...",
          "The Circle": "The Circle",
          "The Circle Description": "The Circle is an American reality competition series, produced by Studio Lambert and Motion Content Group...",
          "My Hero Academia": "My Hero Academia",
          "My Hero Academia Description": "My Hero Academia is a Japanese manga series written and illustrated by Kōhei Horikoshi...",
          "The Wolf of Wall Street": "The Wolf of Wall Street",
          "The Wolf of Wall Street Description": "The Wolf of Wall Street is a 2013 American epic biographical black comedy crime film co-produced and directed by Martin Scorsese...",
          "Breaking Bad": "Breaking Bad",
          "Breaking Bad Description": "Breaking Bad is an American television drama series created by Vince Gilligan...",
          "Watch Now": "Watch Now",
          "Detail": "Detail",
          //...other translations
        }
      },
      fr: {
        translation: {
          "Chainsaw Man": "Chainsaw Man",
          "Chainsaw Man Description": "Chainsaw Man suit l'histoire de Denji, un jeune homme pauvre qui conclut un contrat qui fusionne son corps avec celui d'un diable ressemblant à un chien nommé Pochita, lui donnant la capacité de transformer des parties de son corps en tronçonneuses. Denji rejoint finalement les Public Safety Devil Hunters, une agence gouvernementale axée sur la lutte contre les démons chaque fois qu'ils deviennent une menace pour le Japon.",
          "One Piece": "One Piece",
          "One Piece Description": "One Piece est une série de mangas japonais écrite et illustrée par Eiichiro Oda...",
          "Dark": "Dark",
          "Dark Description": "Dark est une série télévisée de thriller de science-fiction allemande co-créée par Baran bo Odar et Jantje Friese...",
          "The Circle": "The Circle",
          "The Circle Description": "The Circle est une série de compétition de réalité américaine, produite par Studio Lambert et Motion Content Group...",
          "My Hero Academia": "My Hero Academia",
          "My Hero Academia Description": "My Hero Academia est une série de mangas japonais écrite et illustrée par Kōhei Horikoshi...",
          "The Wolf of Wall Street": "Le Loup de Wall Street",
          "The Wolf of Wall Street Description": "Le Loup de Wall Street est un film comique biographique noir américain de 2013 co-produit et réalisé par Martin Scorsese...",
          "Breaking Bad": "Breaking Bad",
          "Breaking Bad Description": "Breaking Bad est une série dramatique télévisée américaine créée par Vince Gilligan...",
          "Watch Now": "Regarder maintenant",
          "Detail": "Détail",
          //...other translations
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
