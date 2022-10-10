import '../App.css'

function Home(){
    return(
        <div className="Home">
            <h1 className="Home-h1">Museu de Magia e Bruxaria de Hogwarts</h1>
            <div className="Home-body">
            <p className="Home-p">O Museu de Magia e Bruxaria de Hogwarts, que anteriormente atuava lecionando para jovens bruxos de toda a Grã-Bretanha, agora se encontra aberta para a visita de turistas de todos os lugares do mundo mágico. 
            <br></br><br></br>
            Como é de conhecimento geral, depois dos acontecimentos referentes à Segunda Guerra Bruxa, a qual ocorreu dentro dos limites da escola, a atual diretora da época, Minerva McGonagall, colocou em prática o seu desejo de que a escola se tornasse um museu histórico. "Hogwarts claramente não está em condições de portar mais de 800 alunos todos os anos e esses últimos meses deixaram claro que a escola não é segura o suficiente para as crianças. Mesmo assim, entendo o valor sentimental que todos sentem e já sentiram pela escola, por isso não gostaria de fechá-la. Decidi que utilizaria a antiga Escola de Magia e Bruxaria de Hogwarts como forma de espalhar a grandiosa história que se encontra por trás de milhares e milhares de anos letivos", comunicou publicamente Minerva McGonagall.
            <br></br><br></br>
            Com isso a antiga Escola foi completamente preservada para que os visitantes tenham a mesma experiência que os ex-alunos. Contendo variados tipos de visitação, como visitas "diárias", "semanais" e "escolares" onde você pode achar mais informações em "Agendamento".
            <br></br><br></br>

            </p>
                <div className="Home-divImg">
                    <img className="Home-img" src="https://www.visitcalifornia.com/sites/visitcalifornia.com/files/VC_WWoHP_ImageUpdates_Supplied_Portrait-Gallery-in-Hogwarts-Castle-WWoHP-at-USH_1280x640.jpg"></img>
                    <img className="Home-img" src="https://cdn.riddle.com/embeds/v2/images/q_80,f_png,c_fill,w_960,h_540/8aa/8aa6d27d17114548794d61414dac214b.png"></img>
                </div>
            </div>
        </div>  
    )
}

export default Home;