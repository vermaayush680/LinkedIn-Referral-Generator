const fs = require("fs");
const moment = require("moment");

const ReferralFunction = () => {
  try {
    let data = require("./names.json");
    if (!data) throw "No Data"

    console.log(Object.keys(data).length);
    fs.appendFileSync('referralMsg.txt', `\n\n${moment().format("YYYY-MM-DD HH:mm:ss")}`);
    let userCount = 0;
    for (const company in data) {
      // console.log(company);
      let companyInfo = data[company];
      let role = Object.keys(companyInfo)[0];
      console.log("Role", role); 
      let userList = companyInfo[role];
      for (const user of userList) {
        userCount+=1;
        const splitt = user.split(" ");
        const person = splitt[0];
        const title = splitt[1];
        fs.appendFileSync('referralMsg.txt',"\n\n");
        console.log(person)
        const messageFormat = `Hello ${person} ${title},\n\nI came across the ${role} Role at ${company} and am interested in applying. Would you be open to sharing my resume with the hiring team so that they know about my interest in this role?\n\nHappy to chat more if you have the time.\nLooking forward to hearing from you.`

        console.log(messageFormat);

        console.log("\n\n--------------------------\n\n");
        fs.appendFileSync('referralMsg.txt', messageFormat);
        fs.appendFileSync('referralMsg.txt', '\n\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
      }
      
    }
    console.log("User Count :",userCount);


  } catch (error) {
    console.log(error);
  }
}

ReferralFunction();




