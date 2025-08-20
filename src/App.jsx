import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {
  const dataEntries = data.map((entry) => (
    <Entry 
      key={entry.id}
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
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
