/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, Diet, conn } = require('../../src/db.js');

const agent = session(app);

const recipe = {
  title: 'Milanesa a la napolitana',
  summary: 'Milanesa cocinada con salsa, queso y huevo encima',
};

const diet = {
  name: 'Vegetarian',
};

describe('ROUTES', () => {

  describe('GET /recipes', () => {

    before(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));

    beforeEach(() => 
      Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
    );

    beforeEach(() => 
      Diet.sync({ force: true }).then(() => Diet.create(diet))
    );

    xit('should respond with 200', () => agent.get('/recipes').expect(200));

    /////////////////////
    //  ↓ MIS TESTS ↓  //
    //
    xit('should return recipes in database', () =>
      agent.get('/recipes').then(res => {
        expect(res.body.length).to.be.greaterThan(0);
      }));

    xit('should find recipes by name', () => 
      agent.get('/recipes?name=milanesa').expect(200)
    );

    xit('should throw error if no recipes are found', () => 
      agent.get('/recipes?name=asdasdasdasdasd').expect(404)
    );
  });

  describe('GET /recipes/:id', () => {
    it('should throw error if no recipes are found', () =>
      agent.get('/recipes/invalidID').expect(404)
    )

    xit('should work if a valid ID is sent (716426 is id for "Cauliflower, Brown Rice, and Vegetable Fried Rice" recipe)', () =>
      agent.get('/recipes/716426').expect(200)
    )
  });

  describe('GET /types', () => {
    it('should return diet types', () => 
      agent.get('/types').expect(200)
    );
  });

  describe('POST /recipe', () => {
    it('should throw "400 Bad Request" error if no title or summary is sent', () => 
      agent.post('/recipe').send({}).expect(400)
    );

    it('should throw "400 Bad Request" error if no title is sent', () => 
      agent.post('/recipe').send({ summary: ''}).expect(400)
    );

    it('should throw "400 Bad Request" error if no summary is sent', () => 
      agent.post('/recipe').send({title: ''}).expect(400)
    );

    // ↓ este test no me funciona y no sé por qué. Tira 404
    it('should work if a valid recipe is posted', () => 
      agent
        .post('/recipe')
        .send({ title: 'title', summary: 'summary' })
        .expect(200)
    );

    // ↓ a ver el mismo test pero mandandole done() ?
    // it('should work if a valid recipe is posted', done => 
    //   agent
    //     .post('/recipe')
    //     .send({ title: 'title', summary: 'summary' })
    //     .then(() => done())
    //     .catch(() => done(new Error('If you see this message, this test failed: should work if a valid recipe is posted')))
    // );
  });
});
