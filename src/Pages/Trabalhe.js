import '../App.css';

function Trabalhe(){
    
    function evento(){
         alert(`Seu endereço foi cadastrado!`)
    }
    
    return(
        <div className="Trabalhe-body">
            <h1 className="Trabalhe-h1">Trabalhe Conosco</h1>
            <div className="Trabalhe-volunt">
                <h2>Voluntário</h2>
                <p>Caso você queira fazer parte da nossa família como voluntário, deixe o nome da sua residência e o título da lareira (caso você tenha mais de uma), abaixo para entrarmos em contato com você. Fique atento em ter todos os documentos necessários, como o IDB e Certificado do curso de voluntariado emitido pelo Ministério da Mágia. 
                <br></br>
                Atenção: Aceitamos apenas Bruxos para trabalhar.
                </p>
                <input className="Trabalhe-input" type="text" placeholder="Digite o nome da casa"></input>
                <input className="Trabalhe-input" type="text" placeholder="Digite o título da lareira"></input>
                <button className="Trabalhe-bttn" onClick={evento}>Enviar</button>
            </div>
            <div className="Trabalhe-trad">
                <h2>Tradicional</h2>
                <p>Caso você queria realizar o nosso processo seletivo para trabalhos formais, deixe deixe o nome da sua residência e o título da lareira (caso você tenha mais de uma), abaixo para entrarmos em contato com você. Antes de você realmente enviar os seus documentos, te enviaremos um formulário, para averiguar se seus estudos ou experiência de trabalho se adequam as nossas atividades diárias.
                <br></br>    
                Atenção: Aceitamos apenas Bruxos para trabalhar.</p>
                <input className="Trabalhe-input" type="text" placeholder="Digite o nome da casa"></input>
                <input className="Trabalhe-input" type="text" placeholder="Digite o título da lareira"></input>
                <button className="Trabalhe-bttn" onClick={evento}>Enviar</button>
            </div>
        </div>
    )
}

export default Trabalhe;