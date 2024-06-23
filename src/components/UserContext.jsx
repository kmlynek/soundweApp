import React, { createContext, useState } from 'react';
import guitarUser1 from "../assets/guitarist1.jpg";
import guitarUser2 from "../assets/guitarist2.jpg";
import singerUser1 from "../assets/singer1.jpg";
import singerUser2 from "../assets/singer2.jpg";
import pianistUser1 from "../assets/pianist1.jpg";

export const UserContext = createContext();
export const UserFiltersContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      nazwa: "Krzysztof Urbański",
      email: "krzysztof.urbanski@gmail.com",
      haslo: "Alamakota1!",
      numer: "606-942-106",
      miasto: "Wrocław",
      kategoria: "Gitary",
      opis: "Cześć!\nJestem Krzysztof i uwielbiam grać na gitarze. Szukam zespołu do wspólnego muzykowania. Gram różne style, od klasycznego rocka po bluesa i jazz. Chcę znaleźć inspirujących ludzi, którzy mają ochotę na wspólne granie i tworzenie czegoś fajnego. Jeśli szukacie gitarzysty, to zapraszam do kontaktu.",
      widocznosc: true,
      zdjecie: guitarUser1,
    },
    {
      id: 2,
      nazwa: "Izabela Nowakowska",
      email: "izabela.nowakowska@gmail.com",
      haslo: "Alamakota2!",
      numer: "123-456-789",
      miasto: "Warszawa",
      kategoria: "Wokal",
      opis: "Witajcie!\nJestem Anna i pasjonuje mnie śpiew. Szukam zespołu lub pianisty, z którymi mogłabym wspólnie tworzyć. Jestem otwarta na różne gatunki muzyczne, a moje ulubione to pop i rock. Jeśli szukasz wokalistki, to pisz śmiało!",
      widocznosc: true,
      zdjecie: singerUser1,
    },
    {
      id: 3,
      nazwa: "Marcin Kowalski",
      email: "marcin.kowalski@gmail.com",
      haslo: "Alamakota3!",
      numer: "987-654-321",
      miasto: "Kraków",
      kategoria: "Gitary",
      opis: "Cześć!\nJestem Marcin i szukam ludzi do wspólnego grania na gitarze. Gram od kilku lat i chętnie dołączę do zespołu lub spotkam się z innymi muzykami do jam session. Mój ulubiony gatunek to rock klasyczny. Jeśli masz ochotę na wspólne granie, daj znać!",
      widocznosc: true,
      zdjecie: guitarUser2,
    },
    {
      id: 4,
      nazwa: "Andrzej Bereta",
      email: "andrzej.bereta@gmail.com",
      haslo: "Alamakota4!",
      numer: "123-456-789",
      miasto: "Rzeszów",
      kategoria: "Wokal",
      opis: "Witam serdecznie!\nJestem Andrzej i szukam zespołu muzycznego lub pianisty do wspólnego tworzenia muzyki. Mam doświadczenie w śpiewie oraz grze na gitarze. Jestem otwarty na różne style muzyczne począwszy na R&B, skończywszy na Rockowym brzmieniu. Zapraszam do kontaktu!",
      widocznosc: true,
      zdjecie: singerUser2,
    },
    {
      id: 5,
      nazwa: "Jan Zlian",
      email: "jan.zlian@gmail.com",
      haslo: "Alamakota5!",
      numer: "987-654-321",
      miasto: "Gdańsk",
      kategoria: "Instrumenty klawiszowe",
      opis: "Witaj!\nJestem Jan i pasjonuję się grą na instrumentach klawiszowych. Szukam zespołu lub innych muzyków do wspólnego grania i tworzenia muzyki. Jeśli potrzebujesz klawiszowca w swoim zespole, to zapraszam do współpracy!",
      widocznosc: true,
      zdjecie: pianistUser1,
    }
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [filters, setFilters] = useState({});


  return (
    <UserContext.Provider value={{ users, setUsers, currentUser, setCurrentUser, selectedCity, setSelectedCity, filters, setFilters }}>
      {children}
    </UserContext.Provider>
  );
};
