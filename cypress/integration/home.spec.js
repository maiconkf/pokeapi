/// <reference types="cypress" />

describe('List', () => {
  it('it gets the first 24 pokemon', () => {
    cy.api('?limit=24&offset=0').then((res) => {
      const {status, body} = res;

      cy.intercept('/').as('getFirst24Pokemon');
      cy.visit('/');

      cy.wait('@getFirst24Pokemon').then(() => {
        expect(status).be.eq(200);
        expect(body).has.property('results');
        expect(body.results).to.be.a('array');
        expect(body.results).to.have.length(24);
        cy.get('[data-cy=card]').should('contain.text', 'bulbasaur');
        cy.get('[data-cy=card]').should('not.contain.text', 'pikachu');
      });
    });
  });

  it('it gets more 24 pokemon', () => {
    cy.get('[data-cy=load-more]').click();
    cy.get('[data-cy=card]').should('contain.text', 'pikachu');
    cy.get('[data-cy=card]').should('not.contain.text', 'mewtwo');
  });

  it('it search a pokemon', () => {
    cy.get('[data-cy=input]').type('snorlax');
    cy.intercept('GET', '/?pokemon=snorlax').as('getAPokemon');

    cy.get('[data-cy=search]').click();

    cy.wait('@getAPokemon').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
      cy.get('[data-cy=card]').should('contain.text', 'snorlax');
      cy.get('[data-cy=card]').should('not.contain.text', 'pikachu');
    });
  });

  it('it go back', () => {
    cy.get('[data-cy=go-back]').click();
    cy.get('[data-cy=card]').should('contain.text', 'charmander');
    cy.get('[data-cy=card]').should('not.contain.text', 'pikachu');
  });
});
