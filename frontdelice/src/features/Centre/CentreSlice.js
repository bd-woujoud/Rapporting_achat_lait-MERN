import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  create, delteCentre, getAllCentre, searchc, updatecentre } from "./CentreApi";
import { message } from 'antd';

const initialState = {

    allCentres: [], //state de type tableau nhot fiha reponse eli jaya meserveur 
    deletecentre: "",
    creer:"",
    update:"",
    errors:[]

  
};

export const GetCentre = createAsyncThunk( //action eli bech ndispatchiha mel interface  jsx de type asyncthunk
    'Centre/allCentre', //just tasmiya mouch bech ne5dem biha
    async () => {
        const response = await getAllCentre(); // getAllAchetteur: nom d'Api eli 5demetha fel achetteurApi.js
        // The value we return becomes the fulfilled action payload
        return response.data; //reponse eli jaya mel serveur
    }
);
export const DeleteCentre = createAsyncThunk(
    'Centre/delteCentre',
    async (id) => {
        const response = await delteCentre(id);
        return response.data;
    }
);

//update
export const UpdateCentre = createAsyncThunk(
    'Centre/updateCentre',
    async (data) => {
        const response = await updatecentre(data);
        return response.data;
    }
);
//search
export const SearchCentre = createAsyncThunk(
    'Centre/Searchcentre',
    async (data) => {

        const response = await searchc(data);
        return response.data;

    }

);
export const Ajoutcentre = createAsyncThunk(

    'Centre/AjoutCentre',
    async (data) => {

        const response = await create(data);
        return response;

    }

);

export const centreSlice = createSlice({ //ntaba3 bih requet mte3i

    name: 'centre', //name houwa eli bech nsobo festore
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {    //depond du server.js

        builder

            //get centre
            .addCase(GetCentre.pending, (state) => { 

            })

            .addCase(GetCentre.fulfilled, (state, action) => { 

                if (action.payload.data) { 

                    state.allCentres= action.payload.data
                }

                else {
                    console.log('failure');
                }
            })

            .addCase(GetCentre.rejected, (state, action) => {
                console.log('rejected');
            })



            //delete
            .addCase(DeleteCentre.pending, (state) => {
                state.deletecentre = "loading"
    
            })
    
            .addCase(DeleteCentre.fulfilled, (state, action) => {
    
                if
                    (action.payload.data) {
    
                    state.deletecentre = "success"
                    message.success("centre supprimé avec succées")
                    
                   
    
                }
                else {
    
                    state.deletecentre = "failure"
    
                }
            })
            .addCase(DeleteCentre.rejected, (state, action) => {
                console.log('rejected');
            })

 //Ajout centre
 .addCase(Ajoutcentre.pending, (state) => {

 })

 .addCase(Ajoutcentre.fulfilled, (state, action) => {

     console.log(action.payload, 'oooooo');

     if (action.payload.status === 200) {

         state.creer = 'success'
      

     }

     else {

         state.creer = 'failure'
      
    state.errors = action.payload.response.data.errors.details

     }

 })

 .addCase(Ajoutcentre.rejected, (state, action) => {

 })

 
//search

.addCase(SearchCentre.pending, (state) => {

})

.addCase(SearchCentre.fulfilled, (state, action) => {

 console.log(action.payload.data,'dataaaaaaaaaaaa');
 state.allCentres=action.payload.data
})

.addCase(SearchCentre.rejected, (state, action) => {

})

//update
//update
.addCase(UpdateCentre.pending, (state) => {})

.addCase(UpdateCentre.fulfilled, (state, action) => {
console.log(action.payload);
if (action.payload.status=200) {
state.update = "success";
message.success("compte est à jour")
} else {
state.update = "failure";
}
})
.addCase(UpdateCentre.rejected, (state, action) => {

})

}
})

export const { } = centreSlice.actions;
export const selectAllCentre = (state) => state.centre.allCentres; 
export const selectdeletCentre = (state) => state.centre.deletecentre; 
export const selectcreate = (state) => state.centre.creer;
export const selectupdate = (state) => state.centre.update;
export const selectregistererror = (state) => state.centre.errors;

export default centreSlice.reducer;
