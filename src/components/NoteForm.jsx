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
        const newNote = {id: Date.now() ...formData}

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

    return{
        <>
                 <buttom className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg 
                cursor-pointer hover: bg-purple-200 hover: border-purple-300 transition mb-4"
            onClick = {()=>setFormVisible(isFormVisible)}
         >
            {isFormVisible ? 'Hide Form X' : 'Add Now Note +'} 
         </buttom>

         {isFormVisible && (
            /*
            Me falta esto ;( , solo se que va un form html
            <form action=""></form>
            */
         )}
        </>

    }
}

export default Noteform: