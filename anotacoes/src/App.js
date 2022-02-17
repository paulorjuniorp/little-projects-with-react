import React, {useState} from "react";

import Header from './components/Header';

/*
    No React é essencial saber
    -componentização
    -propriedades - informação que pode ser passada de um componente pai para um componente filho
    -estado

*/

function App(){
    /*return(
        <div>
            <Header/>
            <Header/>
        </div>
    )
    */
    //div pode prejudicar a estilização entãoo pode-se usar o fragment <></>

    const [projects, setProjects] = useState(['Desenvolvimento de app','Front-end web']);

    // useState retorna um array com duas posições
    // a 1º posição é uma variavel com seu valor inicial ex: ['Desenvolvimento de app','Front-end web']
    // a 2º posição é uma função para atualizar o valor inicial da variavel na primeira posição
    
    function handleAddProject(){
       /*projects.push(`Novo projeto - ${Date.now()}`)
            O método push altera o valor do array, mas isso não deve ser feito no react. No React deve-se
            criar um novo valor para a variável e não alterar o valor inicial e para isso utiliza-e a função
            presente na 2º posição do useState que no caso chamamos ela de setProjects
       */
      
        setProjects([...projects, `Novo projeto - ${Date.now()}`]);

        // o método setProjects está compiando o valor inicial a partir do spread opetator ... e junto com o
        // novo valor, criando uma novo conteúdo para a variavel
    }
    return(
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;