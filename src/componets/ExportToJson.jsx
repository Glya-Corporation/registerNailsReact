import React from 'react';
import { saveAs } from 'file-saver'

const ExportToJson = ( data ) => {
    const blob = new Blob([JSON.stringify(data)], {type: 'application/json'} )
    saveAs( blob, 'data-base')
};

export default ExportToJson;