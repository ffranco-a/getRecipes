/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);

// ↓ tuve que editar esta receta: sólo tenía "name", y mis modelos requieren "title" y "summary" como not null.
const recipe = {
  title: 'Milanesa a la napolitana',
  summary: 'Milanesa cocinada con salsa, queso y huevo encima',
};

describe('GET /recipes', () => {
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );
  it('should get 200', () => agent.get('/recipes').expect(200));

  it('should return recipes in db', () => {
    agent.get('/recipes').then(res => {
      console.log(res.body.length);
      expect(res.body.length).to.be.equal('HOLA');
    });
  });

  // describe('Recipe routes', () => {
  //   before(() =>
  //     conn.authenticate().catch(err => {
  //       console.error('Unable to connect to the database:', err);
  //     })
  //   );
  //   beforeEach(() =>
  //     Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  //   );

  //   describe('GET /recipes', () => {
  //     it('should get 200', () => agent.get('/recipes').expect(200));

  //     /////////////////////
  //     //  ↓ MIS TESTS ↓  //
  //     //
  //     it('should return recipes in database', () =>
  //       agent.get('/recipes').then(res => {
  //         expect(res.body.length).to.be.greaterThan(0);
  //       }));

  //     it('should find recipes by name', () => {
  //       agent.get('/recipes?name=milanesa').then(res => {
  //         console.log('milanesa: ', res.body);
  //         expect(res.body[0].title).to.be.deep.equal('Milanesa a la napolitana');
  //       });
  //     });

  //     // ↓ algo no está funcionando acá . . .
  //     it('should throw error if no recipes are found', () => {
  //       agent
  //         .get('/recipes?name=asdasdasdasdasd')
  //         .expect(404)
  //         .then(res => {
  //           expect(404);
  //           expect(res.body).to.deep.equal({
  //             error: 'No se encontraron recetas con ese nombre',
  //           });
  //         });
  //     });
  //   });

  //   // ↓ a ver, intento por fuera....
  //   describe('GET /recipes?name={name}', () => {
  //     it('should find recipes by name', () => {
  //       agent.get('/recipes?name=milanesa').then(res => {
  //         console.log('milanesa: ', res.body);
  //         expect(res.body[0].title).to.equal(3);
  //       });
  //     });
  //   });

  //   // ↓ a ver si pruebo otra cosa.....................
  //   describe('GET /types', () => {
  //     it('should return the 10 diet types', () => {
  //       agent.get('/types').then(res => {
  //         console.log('GET /types test: ', res.body);
  //         expect(res.body).to.have.lengthOf(10);
  //       });
  //     });
  //   });

    // no entiendo por qué cualquier cosa que ponga me tira todo correcto...
    describe('cualca', () => {
      it('should hacer lo que quiera', () => {
        agent.get('/recipes').then(res => {
          console.log(res.body.length)
          expect(res.body.length).to.deep.equal('hola');
        });
      });
    });
  // });
});
