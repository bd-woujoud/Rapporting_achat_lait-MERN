import { configureStore } from '@reduxjs/toolkit';
import achetteurReducer from '../features/Achetteur/AchetteurSlice';
import moduleReducer from '../features/Module/ModuleSlice';
import fermeReducer from '../features/Ferme/FermeSlice'
import centreReducer from '../features/Centre/CentreSlice'
import indicateurReducer from '../features/Indicateur/IndiateurSlice'
import noteReducer from '../features/Note/noteSlice'
export const store = configureStore({
  reducer: {

achetteur:achetteurReducer ,
module:moduleReducer ,
ferme:fermeReducer ,
centre:centreReducer ,
indicateur:indicateurReducer,
note:noteReducer,

  },
});
