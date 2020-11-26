import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';





export default function ResulTable(props) {
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  
  let vitalKeywords = props.vitalKeywords;
  let resumeRepeatFromPosting = props.resumeRepeatFromPosting;
  const title = props.title;
 

  const columns = [
    { id: 'hardskills', label: 'Hard Skills', minWidth: 170 },
    {
      id: 'job',
      label: 'Word Repeat in Job Post',
      // minWidth: 50,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'resume',
      label: 'Word Repeat in Job Resume',
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    }
  ];
  
  function createData(hardskills, job, resume) {
    // const density = population / size;
    return { hardskills, job, resume };
  }
  
  let rows = [];


  if (!vitalKeywords.length) {
    vitalKeywords = [];
  }

  if (!resumeRepeatFromPosting.length) {
    resumeRepeatFromPosting = [];
  }

  // for(const word of vitalKeywords) {
  //   for(const word1 of resumeRepeatFromPosting){
  //     if(vitalKeywords[word][0] === resumeRepeatFromPosting[word1][0]){

  //     }
  //   }
  // }

  for (let i = 0; i < vitalKeywords.length; i++) {
    for (let j = 0; j < resumeRepeatFromPosting.length; j++) {
    if(resumeRepeatFromPosting[j] === undefined || vitalKeywords[i] === undefined) {
      resumeRepeatFromPosting[j] = "";
      vitalKeywords[i] = "";
    } else {
      // console.log("not working")
      // for(const word of vitalKeywords) {
      //   for(const word1 of resumeRepeatFromPosting){
        const count = 0; 
        if (rows.includes(vitalKeywords[i][0])){
          vitalKeywords[i][1] += 1;
          if (vitalKeywords[i][0] === resumeRepeatFromPosting[j][0]) {
            resumeRepeatFromPosting[j][1] += 1;
          }
        }

        else {
          rows.push(createData(vitalKeywords[i][0], vitalKeywords[i][1], count + resumeRepeatFromPosting[j][1]));
        }
        
            
              
            console.log("COMING FROM THE vital keywords", vitalKeywords[i]);
            console.log("coming from resume repeat", resumeRepeatFromPosting[j])
            console.log("rows", rows)
          
            
          
          // else {
          //   rows.push(createData(vitalKeywords[i][0], vitalKeywords[i][1], count));
          // }
      //   }
      // }
    
      

    }
  }
    
    // rows.push(createData(vitalKeywords[i][0], vitalKeywords[i][1], resumeRepeatFromPosting[i][1]));
    // console.log("COMING FROM THE TABLE", vitalKeywords[i]);
    
    
    }
  
    
  return (
    <Paper className={classes.root}>
      <h3>{title}</h3>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}