import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: ( state ) => {
      state.isSaving = true;
    },
    addNewEmptyNote: ( state, action ) => {
      state.notes.push( action.payload );
      state.isSaving =  false;
    },
    setActiveNote: ( state, action ) => {
      state.active = action.payload;
    },
    setNotes: ( state, action ) => {
      state.notes = action.payload;
    },
    SetSaving: ( state ) => {
      state.isSaving = true;
      // TODO: Mensaje de error
    },
    updateNote: ( state, action ) => { // payload: note
      state.isSaving = false;
      state.notes = state.notes.map( note =>{
        if ( note.id === action.payload.id ) {
          return action.payload;
        }

        return note;
      });
    },

    // Todo: mostrar mensaje de actualizacion
    deleteNoteById: ( state, action ) => {},
  },
});

export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    SetSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;
