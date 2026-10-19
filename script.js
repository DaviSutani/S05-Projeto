// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false },
  { id: 2, formato: "padrao", status: true, acessivel: false },
  { id: 3, formato: "padrao", status: true, acessivel: false },
  { id: 4, formato: "padrao", status: false, acessivel: true },
  { id: 5, formato: "padrao", status: false, acessivel: true },
  { id: 6, formato: "duplo", status: true, acessivel: true },
  { id: 7, formato: "duplo", status: false, acessivel: true },
  { id: 8, formato: "duplo", status: false, acessivel: true },  
];


function reservarArmario() {
  
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true &&
    
    usuario.acessibilidade === a.acessivel);
  
  if (armariosDisponiveis.length === 0) {
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo   selecionado.`;
    return;
  }
  
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  
  const dataHoraReserva = new Date();
  
  const dataHoraEntrega = new Date(dataHoraReserva.getTime() + 24 * 60 * 60 * 1000);
  
  function formatarDataHora(data) {
    return data.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
  
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id);
  
  armarioEmprestado.status = false;
  
  armarioEmprestado.dataReserva = formatarDataHora(dataHoraReserva);
  
  armarioEmprestado.dataEntrega = formatarDataHora(dataHoraEntrega);
  
  usuario.pendencia = true;
  
document.getElementById("resultado").innerText = 
  `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso!\n` +
  `Data e hora da reserva: ${armarioEmprestado.dataReserva}\n` +
  `Data e hora de entrega: ${armarioEmprestado.dataEntrega}`;
  
  console.log("Usuário:", usuario);
  console.log("Armários:", armarios);
}