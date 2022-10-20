const Porcentage = () => {
    const data = JSON.parse(window.localStorage.getItem('data'))
    let porcentage = prompt('Ingresa el porcentaje de ganancia con un formato de numero entero!!');

    if (porcentage !== '') {
        data.settings.porcentage = porcentage
        window.localStorage.setItem('data', JSON.stringify(data));
        alert(`Listo! has cambiado el porsentaje de ganancias, ahora es del: ${porcentage}%`)
    } else {
        alert('No has guardado ningun valor')
    }
};

export default Porcentage;