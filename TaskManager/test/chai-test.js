// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../server');  // Adjust the path to your server file
// const should = chai.should();

// chai.use(chaiHttp);

// describe('Tasks API', () => {

//     it('it should GET all the tasks', (done) => {
//         console.log("Test started");
//         chai.request(server)
//             .get('/api/tasks')
//             .end((err, res) => {
//                 console.log("Test ended");
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 done();
//             });
//       });

//   it('it should POST a new task', (done) => {
//     let task = {
//       title: "Test Task",
//       description: "This is a test task",
//       dueDate: "2024-12-31",
//       priority: "high"
//     };
//     chai.request(server)
//         .post('/api/tasks')  // Ensure this route exists in your server
//         .send(task)
//         .end((err, res) => {
//             res.should.have.status(201);  // Expect status 201
//             res.body.should.be.a('object');  // Expect response to be an object
//             res.body.should.have.property('title').eql('Test Task');  // Expect title to match
//             done();
//         });
//   });

// });
