

console.log("content inject")

// import { useState } from 'react';
// import { createRenderer } from 'react-dom/test-utils';
// const App = () => {
//     useState(() => {
//         console.log("hola mundo")
//         console.log("workerIU is loaded 2 222")

//     })
//     return <div>
//         hola mundo
//     </div>
// }

const root = document.createElement("div")
root.id = "root-wolfGG-extension"
document.body.appendChild(root)


// createRenderer().render(<App />, root)