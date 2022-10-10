import ActionAreaCard from '../Card';
import '../App.css';

var infos = [
    {titulo: "Visita Diária", descricao: "Aqui você pode agendar uma visita rápida ao museu, durando cerca de 4 horas de duração.  Ao clicar, terá um calendário com os dias reservados para esta visita, a qual você poderá comprar os ingressos indivudais e familiares. Fique atento pois são poucas vagas que acabam rápido.", img: "http://1.bp.blogspot.com/-ZMiolcaoUkU/UmyP2Fep_SI/AAAAAAAAT9E/djtPjlevqis/s1600/023.jpg"},
    {titulo: "Visita Semanal", descricao: "Aqui você poderá agendar visitas que duram uma semana inteira, porém só aberta em época de férias escolares, ou visitas que duram o final de semana. Essa visita abre apenas uma vez por mês, por isso, fique ligado nas datas de abertura da compra dos ingressos.", img:"https://68.media.tumblr.com/44ffe7c4e0c414d040422039bf9b6650/tumblr_oa63zaF1ro1vokydso1_500.png"},
    {titulo: "Visita Escolar", descricao:"Aqui é uma área reservada para visitas escolares, onde, apenas diretos e vice-diretores podem marcas-las. Ao cliclar, você será direcionado para falar diretamente com um dos nossos organizadores para que seja acordado a data da visita. As escolas não precisaram pagar pelos ingressos dos alunos.", img:"https://diariodesalvador.com/wp-content/uploads/2018/05/cc21edef-ffcd-4027-ab96-158ffea55c0a.png"}
]

function Agendamento(){
    return(
        <div className="Agende">
            <div className="Agende-header">
                <h1>Agende aqui a sua visita:</h1>
            </div>
            <div className="Agende-body">
                {infos.map((daod) => (<ActionAreaCard titulo = {daod.titulo} descricao = {daod.descricao} img = {daod.img} />))}
            </div>
        </div>
    )
}

export default Agendamento;