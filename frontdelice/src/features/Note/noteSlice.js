import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createnote,  deltenote, getAllnote, getNoteFermeAchetteur, getNoteValid, score, updatenote } from "./noteApi";
import { message } from 'antd';

const initialState = {

    allnote: [], 
    deletenote:"",
    create:"",
    update:"",
    errors:[],
    getNote:"",
    getNoteValid:[]
 
};

export const GetNote = createAsyncThunk( 
    'note/allnote', 
    async () => {
        const response = await getAllnote(); 
        // The value we return becomes the fulfilled action payload
        return response.data; 
    }
);
export const GetScoreModule= createAsyncThunk( 
    'notescore', 
    async (data) => {
        const response = await score(data); 
        // The value we return becomes the fulfilled action payload
        return response.data; 
    }
);
export const GetNoteValid= createAsyncThunk( 
    'notesvalid', 
    async (data) => {
        const response = await getNoteValid(data); 
        // The value we return becomes the fulfilled action payload
        return response.data; 
    }
);
export const GetNoteFermeAchetteur= createAsyncThunk( 
    'getNoteFermeAchetteur', 
    async (data) => {
        const response = await getNoteFermeAchetteur(data); 
        // The value we return becomes the fulfilled action payload
        return response.data; 
    }
);

export const UpdateNote = createAsyncThunk(
    'note/updatenote',
    async (data) => {
        const response = await updatenote(data);
        return response.data;
    }
);



export const CreateNote = createAsyncThunk( 
    'note/createnote', 
    async (data) => {
        const response = await createnote(data); 
        // The value we return becomes the fulfilled action payload
        return response.data; 
    }
);
export const DeleteNote = createAsyncThunk(
    'note/deltenote',
    async (id) => {
        const response = await deltenote(id);
        return response.data;
    }
);




export const noteSlice = createSlice({

    name: 'note',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {    //depond du server.js

        builder
        .addCase(DeleteNote.pending, (state) => {
            state.deletenote = "loading"

        })

        .addCase(DeleteNote.fulfilled, (state, action) => {

            if
                (action.payload.data) {
                state.deletenote= "success"
                message.success("compte supprimé avec succées")
            }
            else {

                state.deletenote= "failure"

            }
        })
        .addCase(DeleteNote.rejected, (state, action) => {
            console.log('rejected');
        })


            //get note
            .addCase(GetNote.pending, (state) => { 

            })

            .addCase(GetNote.fulfilled, (state, action) => { 

                if (action.payload.data) {  

                    state.allnote= action.payload.data
                }

                else {
                    console.log('failure');
                }
            })
            //get notevalid
            .addCase(GetNoteValid.pending, (state) => { 

            })

            .addCase(GetNoteValid.fulfilled, (state, action) => { 

                if (action.payload.data) {  

                    state.getNoteValid= action.payload.data
                }

                else {
                    console.log('failure');
                }
            })

            .addCase(GetNoteValid.rejected, (state, action) => {
                console.log('rejected');
            
            })


            //getNotebyFermeAchetteur

            .addCase(GetNoteFermeAchetteur.pending, (state) => { 

            })

            .addCase(GetNoteFermeAchetteur.fulfilled, (state, action) => { 

                if (action.payload.data) {  

                    state.allnote= action.payload.data
                }

                else {
                    console.log('failure');
                }
            })

            .addCase(GetNoteFermeAchetteur.rejected, (state, action) => {
                console.log('rejected');
            
            })
            //get score
            .addCase(GetScoreModule.pending, (state) => { 

            })

            .addCase(GetScoreModule.fulfilled, (state, action) => { 

                if (action.payload.data) {  

                    state.getNote= action.payload.data
                }

                else {
                    console.log('failure');
                }
            })

            .addCase(GetScoreModule.rejected, (state, action) => {
                console.log('rejected');
            
            })

           //updaaaaaaaaaaaate

   
            .addCase(UpdateNote.pending, (state) => {})

            .addCase(UpdateNote.fulfilled, (state, action) => {
              console.log(action.payload);
              if (action.payload.status=200) {
                state.update = "success";
                // message.success("compte est à jour")
              } else {
                state.update = "failure";
              }
            })
            .addCase(UpdateNote.rejected, (state, action) => {
         
            })
    
         
            
        //create

               .addCase(CreateNote.pending, (state) => {

               })
   
               .addCase(CreateNote.fulfilled, (state, action) => {
   
   
                   if (action.payload.data) {
                  
                   state.create = action.payload.data
                       alert(' note ajouté avec succès')
   
                   }
   
                   else {
   
                    state.create = 'failure'
             
                    state.errors = action.payload.response.data.errors.details
                   }
   
               })
   
               .addCase(CreateNote.rejected, (state, action) => {
   
               })
   
        }
    })

    export const { } = noteSlice.actions;
    export const selectAllnote = (state) => state.note.allnote; 
    export const selectCreatenote = (state) => state.note.create; 
    export const selectdeletenote = (state) => state.note.deletenote; 
    export const selectupdatenote = (state) => state.note.update; 
    export const selectregistererror = (state) => state.note.errors;
    export const selectScore = (state) => state.note.getNote;
    export const selectNoteValid = (state) => state.note.getNoteValid;

    export default noteSlice.reducer;