import { createRoot } from 'react-dom/client';

// import ReactJs components
import App from '../components/app.component.jsx';

/*
* create React root element and insert it into document
*/

const bootstrapReact =
   () => {
      const root = createRoot(document.getElementById('insertReactHere'));
      root.render(
         <App />
      );
   }

window.addEventListener('DOMContentLoaded', bootstrapReact );
// bootstrapReact();

console.log('le bundle a été généré !');
