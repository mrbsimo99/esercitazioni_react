import Button from "./components/Button"

function App() {
  console.log("App is rendering");
  return (
    <>
      <h1>Hello World</h1>
      <Button content='Login' logic={() => console.log('Benvenuto Utente')} style='login' />
      <Button content='Scopri di più' logic={() => console.log('Hai vinto!')} style='cta' />
    </>
  )
}

export default App
