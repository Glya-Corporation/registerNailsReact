const Reajuste = () => {
    const porcentaje = JSON.parse(window.localStorage.getItem('porcentaje'))
    const idGuardada = JSON.parse(window.localStorage.getItem('idGuardada'))
    const clientesGuardados = JSON.parse(window.localStorage.getItem('clientesGuardados'))
    const color = window.localStorage.getItem('color')
    const font = window.localStorage.getItem('font')
    const user = JSON.parse(window.localStorage.getItem('user'))
    const clientesEliminados = JSON.parse(window.localStorage.getItem('clientesEliminados'))
    const advances = JSON.parse(window.localStorage.getItem('advances'))
    const registro = JSON.parse(window.localStorage.getItem('registro'))

     const data = 
        {
            id: 1,
            firstName: user.firstName,
            lastName: user.lastName,
            birthDate: user.date,
            email: user.email,
            settings: {
                porcentage: porcentaje,
                color: color,
                font: font
            },
            storage: {
                register: registro,
                advances: advances,
                customers: clientesGuardados,
                deletedCustomers: clientesEliminados
            }
        }
    

    window.localStorage.setItem('data', JSON.stringify(data))

  
   /*  const porcentaje = 40
    const clientesGuardados = []
    const color = "green"
    const font = "josefinSans"
    const user = {firstName:"Andreina",lastName:"Bozo",date:"2022-10-08",email:"alfonsouzcategui2@gmail.com"}
    const clientesEliminados = [{id:1,date:"2022-10-08",name:"Andreina Bozo",service:"Manicure",price:5,colaborador:"",description:"",estado:"eliminado",motivo:"duplicado"}]
    const advances = []
    const registro = [{inicio:"2022-10-08",cierre:"2022-10-08",cobrado:5.00,ganado:2.00,clientes:[{id:0,date:"2022-10-08",name:"Andreina Bozo",service:"Manicure",price:5,colaborador:"",description:"",estado:"activo"}]}]


    window.localStorage.setItem('porcentaje', JSON.stringify(porcentaje))
    window.localStorage.setItem('clientesGuardados', JSON.stringify(clientesGuardados))
    window.localStorage.setItem('color', color)
    window.localStorage.setItem('font', font)
    window.localStorage.setItem('user', JSON.stringify(user))
    window.localStorage.setItem('clientesEliminados', JSON.stringify(clientesEliminados))
    window.localStorage.setItem('advances', JSON.stringify(advances))
    window.localStorage.setItem('registro', JSON.stringify(registro)) */
};

export default Reajuste;