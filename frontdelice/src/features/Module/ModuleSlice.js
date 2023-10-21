import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createModule, deleteModule, getAllModule, getModulebyCible, getModulebyId, getModulebycentre, getModulebyferme, updateModule } from "./ModuleApi";
import { message } from 'antd';
const initialState = {

    allModule: [],

    create: "",
    delete:"",
    update:'',
    getbyid:"",
    errors:[]

};

export const GetModule = createAsyncThunk(
    'Module/allModule',
    async () => {
        const response = await getAllModule();
        // The value we return becomes the fulfilled action payload
        return response.data;
    }
);
export const GetModuleById = createAsyncThunk(
    'Module/betbyidModule',
    async (id) => {
        const response = await getModulebyId(id);
        // The value we return becomes the fulfilled action payload
        return response.data;
    }
);
export const GetModuleByFerme = createAsyncThunk(
    'Module/getbyfermeModule',
    async () => {
        const response = await getModulebyferme();
        // The value we return becomes the fulfilled action payload
        return response.data;
    }
);
export const GetModuleByCentre = createAsyncThunk(
    'Module/getbycentreModule',
    async () => {
        const response = await getModulebycentre();
        // The value we return becomes the fulfilled action payload
        return response.data;
    }
);
export const CreateModule = createAsyncThunk(
    'Module/createModule',
    async (data) => {
        const response = await createModule(data);
        // The value we return becomes the fulfilled action payload
        return response.data;
    }
);
export const DeleteModule = createAsyncThunk(
    'Module/deleteModule',
    async (id) => {
        const response = await deleteModule(id);
        // The value we return becomes the fulfilled action payload
        return response.data;
    }
);
export const UpdateModule = createAsyncThunk(
    'Module/updateModule',
    async (data) => {
        const response = await updateModule(data);
        // The value we return becomes the fulfilled action payload
        return response.data;
    }
);

export const moduleSlice = createSlice({

    name: 'module',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {    //depond du server.js

        builder

            //get all module
            .addCase(GetModule.pending, (state) => {

            })

            .addCase(GetModule.fulfilled, (state, action) => {

                if (action.payload.data) {

                    state.allModule = action.payload.data
                }

                else {
                    console.log('failure');
                }
            })

            .addCase(GetModule.rejected, (state, action) => {
                console.log('rejected');
            })

            //create


            //ajout 
            .addCase(CreateModule.pending, (state) => {

            })

            .addCase(CreateModule.fulfilled, (state, action) => {


                if (action.payload.status === 200) {

                    state.create = 'success'
                    // alert(' module ajouté avec succès')

                }

                else {

                    state.create = 'failure'
                    state.errors = action.payload.response.data.errors.details

                }

            })

            .addCase(CreateModule.rejected, (state, action) => {

            })
           
            
            //ajout 
            .addCase(UpdateModule.pending, (state) => {

            })

            .addCase(UpdateModule.fulfilled, (state, action) => {


                if (action.payload.status === 200) {

                    state.update = 'success'
                    message.success("module est à jour")
                }

                else {

                    state.update = 'failure'
                }

            })

            .addCase(UpdateModule.rejected, (state, action) => {

            })
      //delete
      .addCase(DeleteModule.pending, (state) => {
        state.delete= "loading"

    })

    .addCase(DeleteModule.fulfilled, (state, action) => {

        if
            (action.payload.data) {

            state.delete = "success"
            message.success("module supprimé avec succées")

        }
        else {

            state.delete= "failure"
        }
    })

    .addCase(DeleteModule.rejected, (state, action) => {
        console.log('rejected');
    })


    //getbyferme
           //get all module
           .addCase(GetModuleByFerme.pending, (state) => {

           })

           .addCase(GetModuleByFerme.fulfilled, (state, action) => {

               if (action.payload.data) {

                   state.allModule = action.payload.data
               }

               else {
                   console.log('failure');
               }
           })

           .addCase(GetModuleByFerme.rejected, (state, action) => {
               console.log('rejected');
           })
//get module by centre
       //get all module
       .addCase(GetModuleByCentre.pending, (state) => {

       })

       .addCase(GetModuleByCentre.fulfilled, (state, action) => {

           if (action.payload.data) {

               state.allModule = action.payload.data
           }

           else {
               console.log('failure');
           }
       })

       .addCase(GetModuleByCentre.rejected, (state, action) => {
           console.log('rejected');
       })
    }
})



export const { } = moduleSlice.actions;
export const selectAllModule = (state) => state.module.allModule;
export const selectCreateModule = (state) => state.module.create;
export const selectdeleteModule = (state) => state.module.delete;
export const selectUPDATEModule = (state) => state.module.update
export const selectregistererror = (state) => state.indicateur.errors;
export const selectgetbycentre = (state) => state.indicateur.allModule;
export const selectgetbyferme = (state) => state.indicateur.allModule;

export default moduleSlice.reducer;