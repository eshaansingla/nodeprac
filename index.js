import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';
inquirer
  .prompt([
    {"message":"Type the URL of your website:",
    "name":"List"
    }
  ])
  .then((answers) => {
        const url=answers.List;
        var qr_svg = qr.image(url,{ type: 'png' });
        qr_svg.pipe(fs.createWriteStream('genrated_qr.png'));
        console.log("Generating QR....");
        fs.writeFile("List.txt",url,(err)=>{
            if(err) throw err;
    });
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
     
    }
  });
