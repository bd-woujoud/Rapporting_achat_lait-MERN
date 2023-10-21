import './App.css';
import{ BrowserRouter as Router,Switch,Route }from 'react-router-dom' /*à installer pour le routage */;

import Navprincipale from './Layouts/Navprincipale';
import Bilan from './compnents/Bilan';
import Module1 from './compnents/Module1';

import Module2 from './compnents/Module2';

import ListedesModules from './compnents/ListedesModules';
import Listeindmod1 from './compnents/Listeindmod1';
import Listeindmod2 from './compnents/Listeindmod2';

import ListedesFerme from './compnents/ListedesFerme';
import AuditeGF from './compnents/AuditeGF';

import ListeA from './compnents/ListeA';
import Listefrs from './compnents/Listefrs';

import MenuFerme from './compnents/MenuFerme';
import ListeCCLA from './compnents/ListeCCLA';
import Acceul from './compnents/Acceul';
import Centres from './compnents/Centres';
import ListeFermeA from './compnents/ListeFermeA';
import ListedesmodulesA from './compnents/ListedesmodulesA';
import ListeBilanPersonnel from './compnents/ListeBilanPersonnel';



import MenuCCL from './compnents/MenuCCL';

import Connexion from './compnents/Connexion';
import PublicRoute from './routerComponents/PublicRouter';
import PrivateRoute from './routerComponents/PrivateRouter';
import Searchcentres from './compnents/Searchcentres';

import ListedesModuleFerme from './compnents/ListedesModuleFerme';

import ModuleFerme from './compnents/ModuleFerme';
import ModulesCCl from '../src/compnents/ModulesCCl';


//import PublicRoute from './routerComponents/PublicRoute';

function App() {

  return (
    <Router>
   <Switch>
   <PublicRoute  path='/connexion' component={Connexion} />
   <PublicRoute path='/navprincipale' component={Navprincipale} />
   <PublicRoute  path='/bilan' component={Bilan} />
   <PublicRoute  path='/module1' component={Module1} />
   <PublicRoute  path='/moduleindicateur' component={Module2} />
   <PublicRoute  path='/auditeGF' component={AuditeGF}/>

   <PrivateRoute role={["admin"]}   path='/ListedesFerme' component={ListedesFerme} />
   <PrivateRoute role={["admin"]}   path='/listedesModulescentre' component={ListedesModules} />
   <PrivateRoute role={["admin"]}   path='/listedesModulesferme' component={ListedesModuleFerme} />
   <PrivateRoute role={["admin"]}   path='/listeindmod1' component={Listeindmod1} />
   <PrivateRoute role={["admin"]}  path='/listeindmod2' component={Listeindmod2} />

   <PrivateRoute role={["admin"]}   path='/listeA' component={ListeA} />
   <PrivateRoute  path='/listefrs' component={Listefrs} />
   <PublicRoute  path='/menuCCL' component={MenuCCL} />
   <PublicRoute  path='/menuFerme' component={MenuFerme} />
   <PublicRoute  path='/listeCCLA' component={ListeCCLA} />
   <PrivateRoute role={["admin"]}  path='/centres' component={Centres} />
   <PublicRoute  path='/acceul' component={Acceul} />
   <PublicRoute  path='/listeFermeA' component={ListeFermeA} />
   <PublicRoute  path='/listedesmodulesA' component={ListedesmodulesA} /> 
   <PublicRoute  path='/listeBilanPersonnel' component={ListeBilanPersonnel} /> 
   <PublicRoute  path='/cherchercentre' component={Searchcentres} /> 
   <PublicRoute  path='/modulesCcl' component={ModulesCCl} /> 
   <PublicRoute  path='/modulesferme' component={ModuleFerme} /> 

   </Switch>
</Router>

  );
}

export default App;
