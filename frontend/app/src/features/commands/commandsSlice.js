import {  createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import {getAllCommands, getDetailsCommand} from './commandsAPI'



const initialState = {
    commands:[],
    commandId: 0,
    detailsCommand: []
};

export const getAllCommandsAsync = createAsyncThunk(
    'commands/getAllCommands',
    async () => {
      const response = await getAllCommands();
      return response.data;
    }
  );
export const getDetailsCommandAsync = createAsyncThunk(
  'commands/getDetailsCommand',
  async (command) => {
    const response = await getDetailsCommand(command);
    return response.data;
  }
);



export const commandsSlice = createSlice({
  name: 'commands',
  initialState,
  reducers: {
    getCommandId: (state, action) => {
      state.commandId = action.payload
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCommandsAsync.fulfilled, (state, action) => {
       state.commands = action.payload
        
      })
      .addCase(getDetailsCommandAsync.fulfilled, (state, action) => {
        state.detailsCommand = action.payload
        
         
       })
      
      
  },
});

export const { getCommandId } = commandsSlice.actions;
export const selectCommandId = (state) => state.commands.commandId
export const selectCommands = (state) => state.commands.commands;
export const selectDetailsCommand = (state) => state.commands.detailsCommand;
export default commandsSlice.reducer;


