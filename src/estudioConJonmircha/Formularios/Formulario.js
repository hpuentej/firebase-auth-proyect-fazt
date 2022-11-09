import React, { useState } from "react";

// const initialValues = {
//   intoName: "",
//   textArea: "",
//   framework: "",
//   language: "",
//   terminos: false,
// }


export function Formulario() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
    console.log(form);
  };

  return (
    <>
      <h1 className="text-4xl mb-3 font-semibold">Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-teal-500 py-3 mb-4">
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="outline-none px-1 py-0.5 rounded-md mr-2"
            onChange={handleChange}
          />
          <textarea
            id="text-area"
            cols="30"
            rows="10"
            name="texto"
            onChange={handleChange}
            className="outline-none px-1 py-0.5 rounded-md"
          ></textarea>
        </div>

        <div className="bg-amber-500">
          <h2 className="text-xl mb-2 font-medium">
            Choose your favorite framework
          </h2>

          <div className="flex justify-evenly mb-3">
            <div className="">
              <input
                id="react"
                type="radio"
                name="framework"
                value="react"
                defaultChecked
                onChange={handleChange}
                className="mr-1"
              />
              <label htmlFor="react">React</label>
            </div>
            <div>
              <input
                id="angular"
                type="radio"
                name="framework"
                value="angular"
                onChange={handleChange}
                className="mr-1"
              />
              <label htmlFor="angular">Angular</label>
            </div>
            <div>
              <input
                id="vue"
                type="radio"
                name="framework"
                value="vue"
                onChange={handleChange}
                className="mr-1"
              />
              <label htmlFor="vue">Vue</label>
            </div>

            <div>
              <input
                id="svelte"
                type="radio"
                name="framework"
                value="svelte"
                onChange={handleChange}
                className="mr-1"
              />
              <label htmlFor="svelte">Svelte</label>
            </div>
          </div>
        </div>

        <div className="bg-lime-500 py-3 mb-3">
          <h2 className="text-xl mb-1">
            Choose your favorite program language
          </h2>
          <div>
            <select name="language" defaultValue onChange={handleChange}>
              <option value="">---</option>
              <option value="js">Javascript</option>
              <option value="ts">Typescript</option>
              <option value="py">Python</option>
              <option value="go">Go</option>
            </select>
          </div>
        </div>

        <div className="bg-indigo-500 py-3 mb-3">
          <label htmlFor="terminos">Acepto terminos y condiciones</label>
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            onChange={(e) => {
              handleChecked(e)
            }}
          />
        </div>
          
        <div>
          <input type="submit" className="bg-sky-500 px-1 py-1 rounded-md hover:bg-sky-400 "/>
        </div>
      </form>
    </>
  );
}

// export function Formulario() {
//   const [nombre, setNombre] = useState("");
//   const [comentario, setComentario] = useState("Yo imagino que...");
//   const [sabor, setSabor] = useState("");
//   const [language, setLanguage] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted successfully')
//     console.log(nombre, comentario, sabor, language, terminos);
//   }

//   return (
//     <>
//       <h1 className="text-4xl mb-3 font-semibold">Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="bg-teal-500 py-3 mb-4">
//           <label htmlFor="nombre">Nombre: </label>
//           <input
//             type="text"
//             id="nombre"
//             name="nombre"
//             className="outline-none px-1 py-0.5 rounded-md mr-2"
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//           />
//           <textarea
//             name="text-area1"
//             id="text-area1"
//             cols="30"
//             rows="10"
//             value={comentario}
//             onChange={(e) => setComentario(e.target.value)}
//             className="outline-none px-1 py-0.5 rounded-md"
//           ></textarea>
//         </div>

//         <div className="bg-amber-500">
//           <h2 className="text-xl mb-2 font-medium">
//             Choose your favorite framework
//           </h2>

//           <div className="flex justify-evenly mb-3">
//             <div className="">
//               <input
//                 id="react"
//                 type="radio"
//                 name={sabor}
//                 value="react"
//                 defaultChecked
//                 onChange={(e) => setSabor(e.target.value)}
//                 className="mr-1"
//               />
//               <label htmlFor="react">React</label>
//             </div>
//             <div>
//               <input
//                 id="angular"
//                 type="radio"
//                 name={sabor}
//                 value="angular"
//                 onChange={(e) => setSabor(e.target.value)}
//                 className="mr-1"
//               />
//               <label htmlFor="angular">Angular</label>
//             </div>
//             <div>
//               <input
//                 id="vue"
//                 type="radio"
//                 name={sabor}
//                 value="vue"
//                 onChange={(e) => setSabor(e.target.value)}
//                 className="mr-1"
//               />
//               <label htmlFor="vue">Vue</label>
//             </div>

//             <div>
//               <input
//                 id="svelte"
//                 type="radio"
//                 name={sabor}
//                 value="svelte"
//                 onChange={(e) => setSabor(e.target.value)}
//                 className="mr-1"
//               />
//               <label htmlFor="svelte">Svelte</label>
//             </div>
//           </div>
//         </div>

//         <div className="bg-lime-500 py-3 mb-3">
//           <h2 className="text-xl mb-1">
//             Choose your favorite program language
//           </h2>
//           <div>
//             <select
//               name="language"
//               defaultValue={language}
//               onChange={(e) => setLanguage(e.target.value)}
//             >
//               <option value="">---</option>
//               <option value="js">Javascript</option>
//               <option value="ts">Typescript</option>
//               <option value="py">Python</option>
//               <option value="go">Go</option>
//             </select>
//           </div>
//         </div>

//         <div className="bg-indigo-500 py-3">
//           <label htmlFor="terminos">Acepto terminos y condiciones</label>
//           <input
//             type="checkbox"
//             id="terminos"
//             name={String(terminos)}
//             onChange={(e) => setTerminos(e.target.checked)}
//           />
//         </div>

//         <div>
//           <input type="submit" />
//         </div>
//       </form>
//     </>
//   );
// }
