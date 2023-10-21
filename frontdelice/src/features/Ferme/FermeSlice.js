import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, delteFerme, getAllFerme, getAllFermeAchetteur, search, searcha, updateferme } from "./FermeApi";
import { message } from 'antd';
import Search from "antd/es/transfer/search";


const initialState = {

    allFermes: [], //state de type tableau nhot fiha reponse eli jaya meserveur 
    deletefermes: "",
    errors: [],
    creer: " ",
    update:""
 
};

export const GetFerme = createAsyncThunk( //action eli bech ndispatchiha mel interface  jsx de type asyncthunk
    'Ferme/allFerme', //just tasmiya mouch bech ne5dem biha
    async () => {
        const response = await getAllFerme(); // getAllAchetteur: nom d'Api eli 5demetha fel achetteurApi.js
        // The value we return becomes the fulfilled action payload
        return response.data; //reponse eli jaya mel serveur
    }
);


export const DeleteFerme = createAsyncThunk(
    'Ferme/delteFerme',
    async (id) => {
        const response = await delteFerme(id);
        return response.data;
    }
);
//update
export const UpdateFerme = createAsyncThunk(
    'Ferme/updateFerme',
    async (data) => {
        const response = await updateferme(data);
        return response.data;
    }
);
//search
export const SearchFerme = createAsyncThunk(
    'ferme/Searchfermes',
    async (data) => {

        const response = await searcha(data);
        return response.data;

    }

);
export const Ajoutferme = createAsyncThunk(

    'ferme/Ajoutfermeer',
    async (data) => {

        const response = await create(data);
        return response;

    }

);
export const fermeSlice = createSlice({ 

    name: 'ferme',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {   

        builder

            //get ferme
            .addCase(GetFerme.pending, (state) => {
            })

            .addCase(GetFerme.fulfilled, (state, action) => {  

                if (action.payload.data) { 

                    state.allFermes= action.payload.data
                }

                else {
                    console.log('failure');
                }
            })

            .addCase(GetFerme.rejected, (state, action) => {
                console.log('rejected');
            })
        


        .addCase(DeleteFerme.pending, (state) => {
            state.deleteCandidate = "loading"

        })

        .addCase(DeleteFerme.fulfilled, (state, action) => {

            if
                (action.payload.data) {

                state.deletefermes = "success"
                message.success("compte supprimé avec succées")
                
               

            }
            else {

                state.deletefermes = "failure"

            }
        })
        .addCase(DeleteFerme.rejected, (state, action) => {
            console.log('rejected');
        })

        //Ajoutferme ferme
        .addCase(Ajoutferme.pending, (state) => {

        })

        .addCase(Ajoutferme.fulfilled, (state, action) => {

            console.log(action.payload, 'oooooo');

            if (action.payload.status === 200) {

                state.creer = 'success'
                alert('ferme ajouté avec succès')

            }

            else {

                state.creer = 'failure'
             
            state.errors = action.payload.response.data.errors.details

            }

        })

        .addCase(Ajoutferme.rejected, (state, action) => {

        })

        
//search

 .addCase(SearchFerme.pending, (state) => {

 })

 .addCase(SearchFerme.fulfilled, (state, action) => {

        console.log(action.payload.data,'dataaaaaaaaaaaa');
        state.allFermes=action.payload.data
 })

 .addCase(SearchFerme.rejected, (state, action) => {

 })

//update
   //update
   .addCase(UpdateFerme.pending, (state) => {})

   .addCase(UpdateFerme.fulfilled, (state, action) => {
     console.log(action.payload);
     if (action.payload.status=200) {
       state.update = "success";
       message.success("compte est à jour")
     } else {
       state.update = "failure";
     }
   })
   .addCase(UpdateFerme.rejected, (state, action) => {

   })


    }



    })




    export const { } = fermeSlice.actions;
    export const selectAllFerme = (state) => state.ferme.allFermes; // achetteur=  name: 'achetteur ' eli ta7et slice, .allachetteur=nom de state eli fel initial reducer
    export const selectdeletFerme = (state) => state.ferme.deletefermes; // achetteur=  name: 'achetteur ' eli ta7et slice, .allachetteur=nom de state eli fel initial reducer
    export const selectcreate = (state) => state.ferme.creer;
    export const selectupdate = (state) => state.ferme.update;
    export const selectregistererror = (state) => state.ferme.errors;

    export default fermeSlice.reducer;