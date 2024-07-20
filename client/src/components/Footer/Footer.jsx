

function Footer() {

  const copyright = new Date().getFullYear()

  return (
    <footer className="container mx-auto max-w-screen py-5">
      <div className="border-t border-t-slate-50 pt-5">
        <ul className="flex justify-between flex-col items-center md:flex-row text-slate-500"> 
          <li>&copy; {copyright} NoteApp | All Rights Reserved</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer