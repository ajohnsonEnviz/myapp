
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import Grid from '@mui/material/Grid';
import awsExports from './aws-exports';
import MaterialTable from "material-table";
import { forwardRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import moment from 'moment';
import DateFnsUtils from "@date-io/date-fns";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import IconButton from '@mui/material/IconButton';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
  DateTimePicker,
} from "@material-ui/pickers";
import './App.css';
import { Paper } from '@material-ui/core';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Divider from '@mui/material/Divider';

Amplify.configure(awsExports);

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function App() {
  const [selectedRow, setSelectedRow] = useState(null);
 

  const [columns, setColumns] = useState([
    { title: 'Order #', field: 'name',
    cellStyle: {
      fontWeight: 'bold'
    }, },
    { title: 'Call Order', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Date', field: 'birthYear', type: 'date', 
    editComponent: props => (
      <MuiPickersUtilsProvider utils={DateFnsUtils} 
                  locale={props.dateTimePickerLocalization}>
             <DatePicker
                    format="M/d/yyyy"
                    value={props.value || null}
                    onChange={props.onChange}
                    clearable
                    InputProps={{
                             style: {
                                  fontSize: 13,
                             }
                    }}
               />
        </MuiPickersUtilsProvider>
       )
  },
    {
      title: 'Type',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ]);

  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: '1/2/2017', birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: '1/2/2017', birthCity: 34 },
  ]);


  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundImage: 'linear-gradient(to right, #073451,#0F6195,#A9E3EA)',color:'#ffffff'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Cost & Resource Tracking System
          </Typography>
           <AmplifySignOut />
        </Toolbar>
      </AppBar>
    </Box>
     
      <Grid container spacing >
        <Grid item xs={2}  style={{paddingTop:'20px',paddingLeft:'20px'}}>
          <div style={{height:'120px'}} />
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
        </Grid>
        <Grid item xs={10}>
      

      <Grid container spacing={2} style={{paddingTop:'20px',paddingRight:'20px'}}>
       
        <Grid item xs={12}>
        <MaterialTable style={{boxShadow:0}}
        components={{
          Container: props => <Paper {...props} elevation={0}/>
     }}
        icons={tableIcons}
       
        
        title="BPA -Geography Support Services _GS-35F-0648Y"
      columns={columns}
      data={data}

      detailPanel={rowData => {
        return (
          <div
          style={{
            fontSize: 100,
            textAlign: 'center',
            color: 'white',
            backgroundColor: '#43A047',
          }}
        >
          {rowData.name}
        </div>
        )
      }}

          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  
                  resolve();
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
    
                  resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  
                  resolve()
                }, 1000)
              }),
          }}
          options={{
            exportButton: true,
            headerStyle: {
              
              background: '#A9E3EA',
              color: '#000000'
            }
          }}
        />
        </Grid>
        </Grid>
         
        </Grid>
      </Grid>
     
    </div>
  );
}

export default withAuthenticator(App);
