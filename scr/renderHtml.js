const generateEmployees = (teamList) => {
  const generatedEmployees = [];
  for (let i = 0; i < teamList.length; i++) {
    let employee = `<div class="col-4 d-flex justify-content-center">
            <div class="card" style="width: 23rem;">
                <div class="card-header bg-primary text-white fs-3 fw-bold">
                    <h4 class="bg-primary text-white fs-3 fw-bold">
                        ${teamList[i].name}
                    </h4>
                    <h6>
                        <span> `;

    if (teamList[i].getRole() === "manager") {
      employee += `<i class="fas fa-crown"></i> </span> ${teamList[i].role}
            `;
    } else if (teamList[i].getRole() === "engineer") {
      employee += `<i class="fas fa-tools"></i> </span> ${teamList[i].role}
            `;
    } else {
      teamList[i].getRole() === "intern";
      employee += `<i class="fas fa-pencil-alt"></i> </span> ${teamList[i].role}
            `;
    }

    employee += `        </h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamList[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamList[i].email}">${teamList[i].email}</a></li>
                        `;
    if (teamList[i].officeNumber) {
      employee += `<li class="list-group-item">Office Number: ${teamList[i].officeNumber}</li>
            `;
    } else if (teamList[i].username) {
      employee += `<li class="list-group-item">GitHub: <a href="https://github.com/${teamList[i].username}">${teamList[i].username}</a></li>
            `;
    } else {
      teamList[i].school;
      employee += `<li class="list-group-item">School: ${teamList[i].school}</li>
            `;
    }
    employee += `       </ul>
                </div>
            </div>
        </div>
        `;
    generatedEmployees.push(employee);
  }
  return generatedEmployees.join("");
};

module.exports = (teamList) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-info">
            <span class="navbar-brand h1 w-100 text-center !important" style="font-size: 36px">My Team</span>
        </nav>
        </br>
        <div class="row justify-content-around" style="grid-row-gap: 20px">
            ${generateEmployees(teamList)}
        </div>
    </body>
    </html>
    `;
};
