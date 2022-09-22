import { useEffect } from "react";
import ExportExcel from 'react-export-excel'

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;


const ExportToExcel = () => {
    const clientes = JSON.parse(window.localStorage.getItem('clientesGuardados'))
    const clientesEliminados = JSON.parse(window.localStorage.getItem('clientesEliminados'))
    const porcentaje = JSON.parse(window.localStorage.getItem('porcentaje'))
    const idGuardada = JSON.parse(window.localStorage.getItem('idGuardada'))
    const registro = JSON.parse(window.localStorage.getItem('registro'))
    const dataToExport = [ clientes, clientesEliminados, porcentaje, idGuardada, registro];

    return (
        <div>
            <ExcelFile element={<button>exportar</button>} filename="Excel test">
                <ExcelSheet data={clientes} name='Clientes'>
                    <ExcelColumn label="name" value="name"/>
                </ExcelSheet>
            </ExcelFile>
        </div>
    );
};

export default ExportExcel;