
// import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />
      <main>
        This is my sites main content
      </main>
      <div className="cards">
        <Card title="card1" description="card 1 desc" />
        <Card title="card2" description="card 2 desc" />
        <Card title="card3" description="card 3 desc" />
        <Card title="card4" description="card 4 desc" />
      </div>
      <Footer />
    </>
  )
}

export default App
