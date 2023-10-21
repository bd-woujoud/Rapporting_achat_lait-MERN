import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createIndicateur, createindicateur, delteIndicateur, getAllIndicateur, updateindicateur } from "./IndicateurApi";
import { message } from 'antd';

const initialState = {

    allIndicateur: [], 
    deleteindicateur:"",
    create:"",
    update:"",
    errors:[]
 
};

export const GetIndicateur = createAsyncThunk( 
    'Indicateur/allIndicateur', 
    async () => {
        const response = await getAllIndicateur(); 
        // The value we return becomes the fulfilled action payload
        return response.data; 
    }
);

export const UpdateIndicateur = createAsyncThunk(
    'Indicateur/updateIndicateur',
    async (data) => {
        const response = await updateindicateur(data);
        return response.data;
    }
);



export const CreateIndicateur = createAsyncThunk( 
    'Indicateur/createIndicateur', 
    async (data) => {
        const response = await createindicateur(data); 
        // The value we return becomes the fulfilled action payload
        return response.data; 
    }
);
export const Deleteindicateur = createAsyncThunk(
    'Indicateur/delteIndicateur',
    async (id) => {
        const response = await delteIndicateur(id);
        return response.data;
    }
);
export const Createindicateur= createAsyncThunk( 
    'Indicateur/createIndicateur', 
    async (data) => {
        const response = await createIndicateur(data); 
        // The value we return becomes the fulfilled action payload
        return response.data; 
    }
);



export const indicateurSlice = createSlice({

    name: 'indicateur',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {    //depond du server.js

        builder
        .addCase(Deleteindicateur.pending, (state) => {
            state.deleteindicateur = "loading"

        })

        .addCase(Deleteindicateur.fulfilled, (state, action) => {

            if
                (action.payload.data) {

                state.deleteindicateur= "success"
                message.success("compte supprimé avec succées")
                
               

            }
            else {

                state.deleteindicateur= "failure"

            }
        })
        .addCase(Deleteindicateur.rejected, (state, action) => {
            console.log('rejected');
        })
            //get indicateur
            .addCase(GetIndicateur.pending, (state) => { 

            })

            .addCase(GetIndicateur.fulfilled, (state, action) => { 

                if (action.payload.data) {  

                    state.allIndicateur= action.payload.data
                }

                else {
                    console.log('failure');
                }
            })

            .addCase(GetIndicateur.rejected, (state, action) => {
                console.log('rejected');
            
            })

           

   
            .addCase(UpdateIndicateur.pending, (state) => {})

            .addCase(UpdateIndicateur.fulfilled, (state, action) => {
              console.log(action.payload);
              if (action.payload.status=200) {
                state.update = "success";
                // message.success("compte est à jour")
              } else {
                state.update = "failure";
              }
            })
            .addCase(UpdateIndicateur.rejected, (state, action) => {
         
            })
    
         
            
        //create

               .addCase(Createindicateur.pending, (state) => {

               })
   
               .addCase(Createindicateur.fulfilled, (state, action) => {
   
   
                   if (action.payload.status === 200) {
   
                       state.create = 'success'
                       alert(' indicateur ajouté avec succès')
   
                   }
   
                   else {
   
                    state.create = 'failure'
             
                    state.errors = action.payload.response.data.errors.details
                   }
   
               })
   
               .addCase(Createindicateur.rejected, (state, action) => {
   
               })
   
        }
    })

    export const { } = indicateurSlice.actions;
    export const selectAllIndicateur = (state) => state.indicateur.allIndicateur; 
    export const selectCreateIndicateur = (state) => state.indicateur.create; 
    export const selectdeleteIndicateur = (state) => state.indicateur.deleteindicateur; 
    export const selectupdateIndicateur = (state) => state.indicateur.update; 
    export const selectregistererror = (state) => state.indicateur.errors;

    export default indicateurSlice.reducer;