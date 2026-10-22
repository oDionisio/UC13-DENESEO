function validarCpfSimples(cpfOrginal) {
    if(!cpfOrginal) return{valido: false, mensagem: "CPF não informado" };

    //1.remove caracteres numericos
    const apenasNumeros = String(cpfOrginal).replace(/\D/g, '');
    

    //2.Verifica se o CPF tem 11 digitos
    if(apenasNumeros.length !== 11) return {valido: false, 
        mensagem: `CPF deve ter 11 digitos (você digitou ${apenasNumeros.length})`};

    //3.Verifica se todos os digitos são iguais
     if (todosIguais = /^(\d)\1{10}$/.test(apenasNumeros)) {
         return {valido: false, mensagem: "CPF não pode ter todos os digitos iguais"};
     }
     return {
         valido: false, mensagem: "CPF inválido: todos os dígitos são iguais"}
      }

      return{
        valido:true,
        mensagem: 'CPF possui formato válido',
        cpflimpo: apenasNumeros
      }
    const cpfController = {
    //metodo 1
        receberCPF: (req, res) => {
            //LIGAÇÃO: a função receberCPF é chamada quando a rota POST /cpf é acessada, e ela recebe os dados do corpo da requisição (req.body) e envia uma resposta (res.json) de volta ao cliente.
            const { cpf } = req.body;
            return res.json({
            sucesso: true,
            mensagem: 'CPF recebido com sucesso',
            cpfOriginal: cpf,
            mensagem: resultado.motivo
        })
        if (!resultadoValidacao.valido) {
            return res.status(400).json({
                status: 'erro',
                valido: false,
                cpfEnviado: cpf,
                mensagem: resultado.motivo
            });
        }
    }
}
module.exports = cpfController;