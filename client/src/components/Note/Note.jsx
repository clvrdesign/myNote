
import PropTypes from 'prop-types';

const Note = ({ note, deleteNote, setNoteId }) => {
  return (
    <div className="bg-slate-100 py-8 px-5 rounded-lg hover:bg-slate-200 ease-out duration-75 cursor-default">
      <h3 className='text-xl font-bold leading-6 text-slate-700'>The title will be here, and it can be very long</h3>
      <small className='text-slate-500'><i className='bi bi-clock'></i> June, 25th 2024</small>
      <p className='text-slate-500 py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium beatae labore fugiat consequatur. Voluptatibus reiciendis quas veritatis fuga? Odit dolor reiciendis dignissimos laudantium? Beatae, eius.</p>
      <div className="flex flex-col lg:flex-row gap-2">
         <button className='bg-sky-500 hover:bg-slate-500 ease-out duration-150 text-slate-50 w-full p-2 rounded-md' onClick={() => setNoteId(note._id)}>Edit</button>
         <button className='bg-slate-300 hover:bg-red-500 hover:text-slate-100 ease-out duration-150 text-slate-700 w-full p-2 rounded-md' onClick={() => deleteNote(note._id)}>Delete</button>
      </div>
     </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  deleteNote: PropTypes.func.isRequired,
  setNoteId: PropTypes.func.isRequired
};

export default Note;
