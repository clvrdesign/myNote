import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Note from '../../components/Note/Note'
function Home() {
  return (
    <>
      <Navbar/>
      <div className="container flex justify-between items-center h-full px-4 py-20 mx-auto max-w-screen flex-col">
        <h1 className="text-2xl text-slate-700 font-bold py-10">
          All Notes
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
          <Note/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home