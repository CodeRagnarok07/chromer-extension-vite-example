
import { useState } from 'react';
import { createRoot } from 'react-dom/client';



const App = () => {

    useState(()=>{
        console.log("contenido agregado")
    })
    return (
        <div>hola mundo</div>
    )
}

const rootIntoShadow = document.createElement('div')
createRoot(rootIntoShadow).render(<App />);

document.body.append(rootIntoShadow);

