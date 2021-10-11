
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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
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
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [selectedRow, setSelectedRow] = useState(null);
 

  const [columns, setColumns] = useState([
    { title: 'Resource', field: 'resource',
    cellStyle: {
      fontWeight: 'bold'
    }, },
    { title: 'Call Order', field: 'callOrder',lookup: { 1: 'All', 2: '001' }},
    
    {
      title: 'LCAT',
      field: 'lcat',
      lookup: { 34: 'Mid MS SQL Server Database Expert', 63: 'Cloud Engineer Sr/Senior Cloud Engineer' },
    },
    { title: 'Rate', field: 'rate', type:'currency'},
    { title: 'CAMPIN', field: 'campin'},
    { title: 'Approved', field: 'approved', type:'boolean'},
    { title: 'Transfer', field: 'transfer', type:'boolean'},
    { title: 'Exit Date', field: 'exitDate', type: 'date', 
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
      title: 'Notes',
      field: 'notes',
     
    },
  ]);

  const [data, setData] = useState([
    { resource: 'Mehmet', callOrder: 1, lcat:34, approved:true, exitDate: '1/2/2017', birthCity: 63 },
    { resource: 'Zerya Betül', callOrder: 2, lcat:63, approved:false, exitDate: '1/2/2017', birthCity: 34 },
  ]);
  const [project, setProject] = useState(10);

  const handleChange = (event) => {
    setProject(event.target.value);
  };
  
  const [value, setValue] = useState(0);

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };


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
     
      <Grid container spacing={2} >
       
        <Grid item xs={12} style={{paddingLeft: '20px'}}>
      

      <Grid container spacing={2} style={{paddingTop:'20px',paddingRight:'20px'}}>
       
        <Grid item xs={12}>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange1} aria-label="basic tabs example">
          <Tab icon={<PeopleAltIcon />} label="Personnel" {...a11yProps(0)} style={{paddingLeft:'20px',paddingRight:'20px'}} />
          <Tab icon={<AssignmentIndIcon />} label="BPA Rate Card" {...a11yProps(1)} style={{paddingLeft:'20px',paddingRight:'20px'}} />
          <Tab icon={<MonetizationOnIcon />} label="BPA Ceiling Tracker" {...a11yProps(2)} style={{paddingLeft:'20px',paddingRight:'20px'}} />
          <Tab icon={<DescriptionIcon />} label="LCAT Description" {...a11yProps(3)}  style={{paddingLeft:'20px',paddingRight:'20px'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
     
        <MaterialTable style={{boxShadow:0}}
        components={{
          Container: props => <Paper {...props} elevation={0}/>
     }}
        icons={tableIcons}
       
        
        title={
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Project</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={project}
            onChange={handleChange}
            label="Project"
            style={{marginBottom:'20px',fontWeight:'bold'}}
          >
           
            <MenuItem style={{padding:'10px'}} value={10}>BPA -Geography Support Services _GS-35F-0648Y</MenuItem>
            <MenuItem style={{padding:'10px'}} value={20}>BPA -Geography Support Services _GS-35F-0648Y</MenuItem>
            <MenuItem style={{padding:'10px'}} value={30}>BPA -Geography Support Services _GS-35F-0648Y</MenuItem>
          </Select>
        </FormControl>
        }
      columns={columns}
      data={data}
/*
      detailPanel={rowData => {
        return (
          <div
          style={{
            fontSize: 100,
            textAlign: 'center',
          }}
        >
          <Grid container spacing={2} style={{paddingTop:'20px',paddingRight:'20px'}}>
       
       <Grid item xs={12}>
         <b>Resource:</b> {rowData.resource}
         </Grid>
         </Grid>
          
        </div>
        )
      }}
*/
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

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </Box>
        </Grid>
        </Grid>
         
        </Grid>
      </Grid>
     
    </div>
  );
}

export default withAuthenticator(App);
