context('Todo-list', () =>{

    beforeEach(() => {
        cy.visit('https://listadetarefasroxa.netlify.app/');
    });

    it('Adiciona uma nova tarefa apertando ENTER', () =>{
        cy.get('.input_text').type('Estudar javascript{enter}');
        cy.get('.task_container').should('have.length', 1);
    })

    it('Adiciona uma nova tarefa apertando no botão "Adicionar"', () =>{
        cy.get('.input_text').type('Fazer almoço');
        cy.get('.input_button').click();
        cy.get('.task_container').should('have.length', 1);
    })

    it('Marca uma tarefa adicionada como concluida', () =>{
        cy.get('.input_text').type('Estudar javascript{enter}');
        cy.get('.bx-check').click();
        cy.get('.completed p').should('have.css', 'text-decoration', 'line-through solid rgb(255, 255, 255)');
    })

    it('Delete uma tarefa', () =>{
        cy.get('.input_text').type('Estudar javascript{enter}');
        cy.get('.bx-trash').click();
        cy.get('.task_container').should('have.length', 0);
    })
});