var request = require('supertest')('http://localhost:3009');


//   Axios.get('/streetBreezy/api/:id', {params:{id: 0}})
//   .then((response) => {
//       console.log(response.data);
//   })

it('should get a specific item from the db based on an id number', (done) => {
    request.get('/streetBreezy/api/', {id: 39})
    .expect(200)
    .expect((response) => {
        expect(response.body.id).to.equal(39);
    })
    .end(done);
})

it('should get a specific item from the db based on an id number', (done) => {
    request.get('/streetBreezy/api/', {id: 92})
    .expect(200)
    .expect((response) => {
        expect(response.body.id).to.equal(92);
    })
    .end(done);
})