import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { delteAchetteur, getAllAchetteur, register, search, updateAchetteur } from './AchetteurApi';
import { message } from 'antd';

const initialState = {

    allAchetteur: [], //state de type tableau nhot fiha reponse eli jaya meserveur 

    deleteachetteur: "",
    register: " ",
    errors: [],
    update:""
 
};

export const GetAchetteur = createAsyncThunk( //action eli bech ndispatchiha mel interface  jsx de type asyncthunk
    'Achetteur/allAchetteur', //just tasmiya mouch bech ne5dem biha
    async () => {
        const response = await getAllAchetteur(); // getAllAchetteur: nom d'Api eli 5demetha fel achetteurApi.js
        // The value we return becomes the fulfilled action payload
        return response.data; //reponse eli jaya mel serveur
    }
);
//delete achetteur

export const DeleteAchetteur = createAsyncThunk(
    'Achetteur/delteAchetteur',
    async (id) => {
        const response = await delteAchetteur(id);
        return response.data;
    }
);

//update achetteur

export const UpdateAchetteur = createAsyncThunk(
    'Achetteur/updateAchetteur',
    async (data) => {
        const response = await updateAchetteur(data);
        return response.data;
    }
);

//ajout achetteur
export const Registred = createAsyncThunk(

    'achetteur/register',
    async (data) => {

        const response = await register(data);
        return response;

    }

);

//search
export const SearchAchetteur = createAsyncThunk(
    'achetteur/SearchAchetteurs',
    async (data) => {

        const response = await search(data);
        return response.data;

    }

);








export const achetteurSlice = createSlice({ //ntaba3 bih requet mte3i

    name: 'achetteur', //name houwa eli bech nsobo festore
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {    //depond du server.js

        builder

            //get achetteur
            .addCase(GetAchetteur.pending, (state) => { //esm action eli fel create asyncthunk ;//pending requet mazelt ma5orjotch mel front 

            })

            .addCase(GetAchetteur.fulfilled, (state, action) => { //requette woslet lel serveur 

                if (action.payload.data) {  //cas de 200

                    state.allAchetteur = action.payload.data//action.payload.data hiya reponse eli jaya meserveur bech nsobha fi state allAchetteur

                }

                else {
                    console.log('failure');
                }
            })

            .addCase(GetAchetteur.rejected, (state, action) => {
                console.log('rejected');
            })

            //delete Achetteur

            .addCase(DeleteAchetteur.pending, (state) => {
                state.deleteCandidate = "loading"

            })

            .addCase(DeleteAchetteur.fulfilled, (state, action) => {

                if
                    (action.payload.data) {

                    state.deleteachetteur = "success"
                    message.success("compte supprimé avec succées")
                    
                   

                }
                else {

                    state.deleteachetteur = "failure"

                }
            })
            .addCase(DeleteAchetteur.rejected, (state, action) => {
                console.log('rejected');
            })



            //ajout achetteur
            .addCase(Registred.pending, (state) => {

            })

            .addCase(Registred.fulfilled, (state, action) => {

                console.log(action.payload, 'oooooo');

                if (action.payload.status === 200) {

                    state.register = 'success'
                    alert('Vous êtes inscrit avec succès')

                }

                else {

                    state.register = 'failure'
                    state.errors = action.payload.response.data.errors.details

                }

            })

            .addCase(Registred.rejected, (state, action) => {

            })

            
    //search

    .addCase(SearchAchetteur.pending, (state) => {

    })

    .addCase(SearchAchetteur.fulfilled, (state, action) => {

            console.log(action.payload.data,'dataaaaaaaaaaaa');
            state.allAchetteur=action.payload.data
    })

    .addCase(SearchAchetteur.rejected, (state, action) => {

    })


   //update
   .addCase(UpdateAchetteur.pending, (state) => {})

   .addCase(UpdateAchetteur.fulfilled, (state, action) => {
     console.log(action.payload);
     if (action.payload.status=200) {
       state.update = "success";
       message.success("compte est à jour")
     
     } else {
       state.update = "failure";
     }
   })
   .addCase(UpdateAchetteur.rejected, (state, action) => {

   })
    }
})
export const { } = achetteurSlice.actions;
export const selectAllAchetteur = (state) => state.achetteur.allAchetteur; // achetteur=  name: 'achetteur ' eli ta7et slice, .allachetteur=nom de state eli fel initial reducer
export const selectedelete = (state) => state.achetteur.deleteachetteur;
export const selectregister = (state) => state.achetteur.register;
export const selectregistererror = (state) => state.achetteur.errors;
export const selectSerch = (state) => state.achetteur.search;
export const selectupdate = (state) => state.achetteur.update;
export default achetteurSlice.reducer;