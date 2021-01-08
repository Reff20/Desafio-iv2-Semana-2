(function() {
    document.getElementById('quantity').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, "");
    });

    document.getElementById('calcular').addEventListener('click', function(e) {
        calcular(parseInt(document.getElementById('quantity').value));
    });
})()

function calcular(gramas) {
    var resultado = gramas;
    var medida = gramas * (16 + 8 - 2);
    var resultado = medida * 2.57;
    

    
    if(resultado == 0){
        document.getElementById('quantity').value = '';
        alert('Favor inserir um valor maior que 0 (zero).');
    }else{
        document.getElementById('quantity').value = '';
        alert('R$' + resultado);
    }
}