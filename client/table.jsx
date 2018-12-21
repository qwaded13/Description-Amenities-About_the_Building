import React from 'react';

var Table = () => {
    return(
    <table border='1'>
        <tbody>
            <tr id='tableRow0'>
                <td className='tabletext' id='table0x0'>DAYS ON MARKET</td>
                <td className='tabletext' id='table1x0'>LAST PRICE CHANGE</td>
                <td className='tabletext' id='table2x0'>ESTIMATED PAYMENT</td>
            </tr>
            <tr id='tableRow1'>
                <td className='tabletext' id='table0x1'>MONTHLY TAXES</td>
                <td className='tabletext' id='table1x1'>MONTHLY MAINTENANCE</td>
                <td className='tabletext' id='table2x1'>TAX ABATEMENT</td>
            </tr>
        </tbody>
    </table>
    )
}

export default Table;