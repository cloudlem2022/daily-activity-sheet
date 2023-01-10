

const express = require('express');
const bodyParser = require('body-parser');
const Excel = require('exceljs');
 
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/post", (req, res) => {
  
  res.sendFile(__dirname + '/src/App.js');
});

 
app.post('/postForm', (req, res) => {
    const username = req.body.username;
    const date = new Date();
    const signin = req.body.signin;
    const signout = req.body.signout;
    const tool = req.body.tool;
    const task = req.body.task;
 
    const workbook = new Excel.Workbook();
    workbook.xlsx.readFile('Data.xlsx')
    .then(() => {
        let worksheet = workbook.getWorksheet(username);
        if(!worksheet) {
            worksheet = workbook.addWorksheet(username);
            worksheet.columns = [
                { header: 'Date', key: 'date', width: 15 },
                { header: 'Sign-in', key: 'signin', width: 10 },
                { header: 'Sign-out', key: 'signout', width: 10 },
                { header: 'Tool', key: 'tool', width: 20 },
                { header: 'Task', key: 'task', width: 30 }
            ];
        }
        var lastRow = worksheet.lastRow;
        var getRowInsert = worksheet.getRow(++(lastRow.number));
 
  getRowInsert.getCell('A').value = date;
  getRowInsert.getCell('B').value = signin;
  getRowInsert.getCell('C').value = signout;
  getRowInsert.getCell('D').value = tool;
  getRowInsert.getCell('E').value = task;
          
        getRowInsert.commit();
 
        worksheet.columns.forEach((sheetColumn) => {
    sheetColumn.font = {
      size: 12,
    };
    sheetColumn.width = 20;
});

worksheet.getRow(1).font = {
    bold: true,
    size: 13,
};
      
        return workbook.xlsx.writeFile('Data.xlsx');
    })
    .then(() => {
      res.redirect("/src/App.js"); 
    });
    
});
 
const PORT = process.env.PORT || 8081;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));