import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

export default function ResulTable(props) {
  const useStyles = makeStyles({
    root: {
      width: "100%",
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
    { id: "keywords", label: "Keywords", align: "left" },
    {
      id: "job",
      label: "Repeats in Job Posting",
      // minWidth: 50,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "resume",
      label: "Repeats in Resume",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  function createData(keywords, job, resume) {
    // const density = population / size;
    return { keywords, job, resume };
  }

  let rows = [];
  const flat = [];
  const flatten = (vitalwords) => {
    for (let item of vitalwords) {
      flat.push(item[0]);
    }
  };
  flatten(vitalKeywords);
  const resumeCount = (resumekeyword, string) => {
    for (let item of resumekeyword) {
      if (item.includes(string)) {
        return item[1];
      } 
    }
  };
  for (let i = 0; i < vitalKeywords.length; i++) {
    rows.push(
      createData(
        vitalKeywords[i][0],
        vitalKeywords[i][1],
        `${resumeCount(resumeRepeatFromPosting, vitalKeywords[i][0]) || 0}`
      )
    );
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
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
