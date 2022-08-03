// import MaterialUIForm from 'react-material-ui-form'
// import JssProvider from 'react-jss/lib/JssProvider';
// import React from ''
 
// export default class MyForm extends React.Component {
//   submit = (values, pristineValues) => {
//     // get all values and pristineValues on form submission
//   }
 
//   customInputHandler = (value, { name }, event) => {
//     // the form will update the field as usual, and then call this handler
//     // if you want to have complete control of the field, change the "value" prop to "defaultValue"
//   }
 
//   customToggleHandler = (checked, { name, value }, event) => {
//     // the form will update the field as usual, and then call this handler
//     // if you want to have complete control of the field, change the "value" prop to "defaultValue"
//   }
 
//   render() {
//     return (
//       <JssProvider>
//         <MaterialUIForm onSubmit={this.submit}>
//           <TextField label="Name" type="text" name="name" value="" data-validators="isRequired,isAlpha" onChange={this.customInputHandler} />
//           <fieldset>
//             <FormControl>
//                 {/* form label is required here to perform default validations */}
//                 <FormLabel component="legend">I love React material UI form</FormLabel>
//                 <FormGroup value=''>
//                   <FormControlLabel control={<Checkbox value='yes' />}
//                     label='I love React material UI form'/>
//                 </FormGroup>
//               </FormControl>
 
//             <FormControl required>
//               <InputLabel>Age</InputLabel>
//               <Select value="" name="age">
//                 <MenuItem value=""><em>Please select your age ...</em></MenuItem>
//                 <MenuItem value={10}>Teens</MenuItem>
//                 <MenuItem value={20}>Twenties</MenuItem>
//                 <MenuItem value={30}>Thirties</MenuItem>
//                 <MenuItem value="40+">Fourties +</MenuItem>
//               </Select>
//               <FormHelperText>Some important helper text</FormHelperText>
//             </FormControl> 
//           </fieldset>
          
//           <FormControl>
//             <FormLabel component="legend">Gender</FormLabel>
//             <RadioGroup aria-label="Gender" name="gender"  value="male">
//               <FormControlLabel value="female" control={<Radio />} label="Female" />
//               <FormControlLabel value="male" control={<Radio />} label="Male" /> 
//             </RadioGroup>
//           </FormControl>
          
//           <Button variant="raised" type="reset">Reset</Button>
//           <Button variant="raised" type="submit">Submit</Button>
//         </MaterialUIForm>
//       </JssProvider>
//     )
//   }
// }

