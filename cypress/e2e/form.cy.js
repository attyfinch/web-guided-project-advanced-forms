describe("friend form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:60262/")
    })

    it("sanity check", () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.equal(5)
    })

    const nameInput = () => cy.get("input[name=username]")
    const emailInput = () => cy.get("input[name=email]")
    const roleInput = () => cy.get("select[name=role]")
    const marriedRadio = () => cy.get("input[name=civil][value=married]")
    const singleRadio = () => cy.get("input[name=civil][value=single]")
    const hikingInput = () => cy.get("input[name=hiking]")
    const readingInput = () => cy.get("input[name=coding]")
    const codingInput = () => cy.get("input[name=reading]")
    const submitButton = () => cy.get("button")


    it("the following elements should exist", () => {
        nameInput().should("exist");
        emailInput().should("exist")
        roleInput().should("exist")
        marriedRadio().should("exist")
        singleRadio().should("exist")
        hikingInput().should("exist")
        readingInput().should("exist")
        codingInput().should("exist")
        submitButton().should("exist")
    })

    
    it("Testing Form Submission", () => {
        nameInput()
         .should("have.value", "")
         .type("Brad Morris")
         .should("have.value", "Brad Morris");

         emailInput()
         .should("have.value", "")
         .type("brad@brad.com")
         .should("have.value", "brad@brad.com");

         roleInput().select("student")

         marriedRadio().click();
         singleRadio().click();

        hikingInput().click();
        readingInput().click();
        codingInput().click();

        submitButton().click();
    })

    it("submit disabled if name left  blank", () => {

        emailInput()
        .should("have.value", "")
        .type("brad@brad.com")
        .should("have.value", "brad@brad.com");

        roleInput().select("student")

        marriedRadio().click();
        singleRadio().click();

        hikingInput().click();
        readingInput().click();
        codingInput().click();

        submitButton().should("be.disabled")
    })
    
            



})