/// <reference types="cypress" />

describe('Pokemon', () => {
  it('it gets details of a specific pokemon ', () => {
    cy.api('/charizard').then((res) => {
      const {status, body} = res;

      cy.intercept('/charizard').as('getPokemon');
      cy.visit('/charizard');

      cy.wait('@getPokemon').then(() => {
        expect(status).be.eq(200);
        expect(body).has.property('stats');
        expect(body.stats).to.be.a('array');
        expect(body.stats).to.have.length(6);
        cy.get('[data-cy=name]').should('contain.text', 'charizard');
        cy.get('[data-cy=name]').should('not.contain.text', 'pikachu');
      });
    });
  });
});
