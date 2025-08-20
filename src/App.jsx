import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {
  const dataEntries = data.map((entry) => (
    <Entry 
      key={entry.id}
      {...entry}
    />
  ))

  return (
    <>
      <Header />
      <section className="entry-list">
        {dataEntries}
      </section>
    </>
  )
}

export default App
