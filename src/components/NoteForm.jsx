import { useState } from "react";

const NoteForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        category: 'work',
        priority: 'Medium',
        description: ''
    })

    const [isFormVisible, setFormVisible] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventfault()

        //Validacion
        if (!formData.title || !formData.de3scription) return

        //crear el objeto de la nota
        const newNote = {id: Date.now(), ...formData}

        //Agregar notas al estado (state)
        setNotas([newNota, ...notas])

        //React de campos de formData
        setFormData({
            title: '',
            category: 'work',
            priority: 'Medium',
            description: ''
        })
    }

    return(
        <>
                 <buttom className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg 
                cursor-pointer hover: bg-purple-200 hover: border-purple-300 transition mb-4"
            onClick = {()=>setFormVisible(isFormVisible)}
         >
            {isFormVisible ? 'Hide Form X' : 'Add Now Note +'} 
         </buttom>

         {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="" className="block font-semibold">Title</label>
            <input
              name="title"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Priority */}
          <div className="mb-4">
            <label htmlFor="" className="block font-semibold">Priority</label>
            <select
              name="priority"
              className="w-full p-2 border rounded-lg"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="High">🔴 High</option>
              <option value="Medium">🟠 Medium</option>
              <option value="Low">🟢 Low</option>
            </select>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="" className="block font-semibold">Category</label>
            <select
              name="category"
              className="w-full p-2 border rounded-lg"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="study">Study</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="" className="block font-semibold">Description</label>
            <textarea
              name="description"
              className="w-full p-2 border rounded-lg"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-900 transition"
          >
            Add Note
            </button>
        </form>
         )}
        </>
         
        )
}

export default Noteform