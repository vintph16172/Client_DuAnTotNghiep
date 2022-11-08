import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const googleSpeechSlice = createSlice({

    name: "googleSpeech",
    initialState: {
        speechValue: {},
        transcript: ""
    },
    reducers: {
        changeSpeechValue(state, action) {
            if (action.payload === "") {
                state.speechValue = {}
                state.transcript = ""
            } else {
                state.speechValue = action.payload
                state.transcript = action.payload.results[0].alternatives[0].transcript.toLowerCase()
            }
        }
    }
})

export const { changeSpeechValue } = googleSpeechSlice.actions

export default googleSpeechSlice.reducer