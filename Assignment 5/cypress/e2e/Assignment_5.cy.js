describe('Search Product on Flipkart', () => {
  it('Searches and Displays Results', () => {
    // Visit the Flipkart website
    cy.visit('https://www.flipkart.com/')

    // Enter the search query for the MacBook Pro
    cy.get('input[class="_3704LK"]').type('Apple MacBook Pro')

    // Click the search button to initiate search
    cy.get('button[type=submit]').click()

    // Assert that search results are displayed
    cy.get('._1YokD2._3Mn1Gg').should('be.visible').and('contain.text', 'APPLE 2023 MacBook Pro M2 Pro - (16 GB/512 GB SSD/macOS Ventura)')
  })
})
