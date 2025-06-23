import UsersList from "./components/UsersList";
import UserProfile from "./components/UserProfile";

function App() {

  const users = [
    {
      name: "Ada Lovelace",
      bio: "Prima programmatrice della storia. Appassionata di matematica e logica.",
      img: "https://via.placeholder.com/100?text=Ada"
    },
    {
      name: "Alan Turing",
      bio: "Pioniere dell'informatica. Ha decifrato il codice Enigma.",
      img: "https://via.placeholder.com/100?text=Alan"
    },
    {
      name: "Grace Hopper",
      bio: "Inventrice del primo compilatore. Ha contribuito allo sviluppo del COBOL.",
      img: "https://via.placeholder.com/100?text=Grace"
    },
    {
      name: "Linus Torvalds",
      bio: "Creatore di Linux. Sostenitore dell'open source.",
      img: "https://via.placeholder.com/100?text=Linus"
    },
    {
      name: "Margaret Hamilton",
      bio: "Responsabile del software di bordo delle missioni Apollo della NASA.",
      img: "https://via.placeholder.com/100?text=Margaret"
    }
  ];

  return (
    <>
      <UsersList array={users} />
      <UserProfile name={users[0].name} />
    </>
  )
}

export default App;
