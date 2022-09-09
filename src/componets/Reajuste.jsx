const Reajuste = () => {
    let registro = JSON.parse(window.localStorage.getItem('registro'))
    const newRegister = []

    registro.forEach(element => {
        let cobrado = 0
        let ganado = 0
        element.clientes.forEach(iten =>{
            cobrado += parseFloat(iten.price)
        })
        element.cobrado = cobrado
        if(element.cierre <= '2022-08-31'){
            element.ganado = cobrado * (50 / 100)
        }else{
            element.ganado = cobrado * (40 / 100)
        }
        
        newRegister.unshift(element)
    });

    window.localStorage.setItem('registro', JSON.stringify(newRegister))
    alert('¡El reajuste se realizo con exito!')
};

export default Reajuste;