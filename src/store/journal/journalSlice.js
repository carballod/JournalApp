import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    addNewEmptyNote: ( state, action ) => {},
    setActiveNote: ( state, action ) => {},
    setNotes: ( state, action ) => {},
    SetSaving: ( state ) => {},
    updateNote: ( state, action ) => {},
    deleteNoteById: ( state, action ) => {},
  },
});

export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    SetSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;
