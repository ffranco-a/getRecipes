const { Recipe, Diet, conn } = require('../../src/db.js');
const { expect } = require('chai');
let { should } = require('chai').should();

describe('Recipe model', () => {
  before(() =>
    conn.authenticate().catch(err => {
      console.error('Unable to connect to the database:', err);
    })
  );

  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));

    describe('Title and Summary', () => {
      it('should throw error if summary is `null`', done => {
        Recipe.create({ title: 'Milanesa a la napolitana', summary: null })
          .then(() => done(new Error('If you see this message, this test failed: should throw error if summary is `null`')))
          .catch(() => done());
      });

      it('should throw error if title is `null`', done => {
        Recipe.create({ summary: 'Carne rebozada cocinada con salsa de tomate, queso y huevo encima' })
          .then(() => done(new Error('If you see this message, this test failed: should throw error if title is `null`')))
          .catch(() => done());
      });

      it('should work when title and summary are not null', done => {
        Recipe.create({
          title: 'Milanesa a la napolitana',
          summary: 'Carne rebozada cocinada con salsa de tomate, queso y huevo encima',
        })
          .then(() => done())
          .catch(() => done(new Error('If you see this message, this test failed: should work when its a valid title')));
      });
    });

    describe('Id', () => {
      it('a recipe must have an id', async () => {
        let recipe = await Recipe.create({
          title: 'Milanesa a la napolitana',
          summary: 'Carne rebozada cocinada con salsa de tomate, queso y huevo encima',
        })
        expect(recipe.dataValues).to.have.property('id');
      })

      it('recipes must have unique ids', async () => {
        let recipe1 = await Recipe.create({ title: 'title 1', summary: 'summary 1' });
        let recipe2 = await Recipe.create({ title: 'title 2', summary: 'summary 2' });
        expect(recipe1.dataValues.id).to.be.not.deep.equal(recipe2.dataValues.id);
      })
    })
  });

  describe('Recipe creation', () => {

    before(() => Recipe.sync({ force: true }));

    it('should be able to create multiple recipes', async () => {
      await Recipe.create({ title: 'title 1', summary: 'summary 1' });
      await Recipe.create({ title: 'title 2', summary: 'summary 2' });
      await Recipe.create({ title: 'title 3', summary: 'summary 3' });
      let recipes = await Recipe.findAll();
      expect(recipes.length).to.be.equal(3);
    });

    it('recipes data should persist and dataValues be accesible', async () => {
      let recipes = await Recipe.findAll();
      expect(recipes[2].dataValues.summary).to.be.deep.equal('summary 3');
    });

    it('recipes data should persist and dataValues be accesible', async () => {
      let recipes = await Recipe.findAll();
      expect(recipes[0].dataValues.title).to.be.deep.equal('title 1');
    });
  });
});

describe('Diet model', () => {
  before(() =>
    conn.authenticate().catch(err => {
      console.error('Unable to connect to the database:', err);
    })
  );

  describe('Name validation', () => {
    beforeEach(() => Diet.sync({ force: true }))

    it('should throw error if diet name is `null`', done => {
      Diet.create({})
      .then(() => done(new Error('If you see this message, this test failed: should throw error if diet name is `null`')))
      .catch(() => done());
    })

    it('should work if diet name is valid', done => {
      Diet.create({ name: "Vegetarian" })
      .then(() => done())
      .catch(() => done(new Error('If you see this message, this test failed: should throw error if diet name is `null`')));
    })
  })

  describe('Diet creation', () => {
    before(() => Diet.sync({ force: true }));

    it('should be able to create multiple diets', async () => {
      await Diet.create({ name: "Vegetarian" });
      await Diet.create({ name: "Vegan" });
      await Diet.create({ name: "Gluten Free" });
      await Diet.create({ name: "Pescatarian" });
      await Diet.create({ name: "Whole 30" });
      let diets = await Diet.findAll();
      expect(diets.length).to.be.equal(5);
    })

    it('diets data should persist and dataValues be accesible', async () => {
      let diets = await Diet.findAll();
      expect(diets[1].dataValues.name).to.be.deep.equal('Vegan');
    })

    it('diets data should persist and dataValues be accesible', async () => {
      let diets = await Diet.findAll();
      expect(diets[3].dataValues.name).to.be.deep.equal('Pescatarian');
    })
  })
});

describe('Relations', async () => {
  before(() =>
    conn.authenticate().catch(err => {
      console.error('Unable to connect to the database:', err);
    })
  );

  it('should be able to link a recipe model with a diet model', done => {
    Recipe.create({ title: '', summary: '' }).then(res => {
      res.addDiet(1);
      res.addDiet(2);
    })
    .then(() => done())
    .catch(() => done(new Error('If you see this message, this test failed: should be able to link a recipe model with a diet model')))
  })

  it('should show table of relations when included in search', async () => {
    let recipes = await Recipe.findAll({ include: Diet });
    expect(recipes[0].dataValues).to.include.property('diets');
  })

  it('should NOT show table of relations when NOT included in search', async () => {
    let recipes = await Recipe.findAll();
    expect(recipes[0].dataValues).to.not.include.property('diets');
  })
})