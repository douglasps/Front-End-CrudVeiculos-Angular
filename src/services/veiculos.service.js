var baseUrl = 'https://consulta-veiculos.nimble.com.br/v1/veiculos/';
export const VeiculosService = ($http) => {
    
    var veiculos = [];
    const listar = () => {
        return $http({
            method: 'GET',
            url: baseUrl,
        }).then(function (response) {
            if (response.data)
                veiculos = response.data;
        });
    };

    const listarGetState = () => {
        return veiculos;
    }

    const salvar = (veiculo) => {
        var metodo = 'POST';
        var url = baseUrl; 
        if(veiculo._id)
        {
            metodo = 'PUT'
            url += veiculo._id;
        }
        $http({
            method: metodo,
            url: url,
            data:{
                veiculo: veiculo.veiculo,
                marca: veiculo.marca,
                ano: veiculo.ano,
                vendido: veiculo.vendido,
                descricao: veiculo.descricao
            }
        });
    };

    const excluir = (idVeiculo) =>{
        $http({
            method: 'DELETE',
            url: baseUrl+idVeiculo
        });
    }

    return { listar, listarGetState, salvar, excluir };
};
