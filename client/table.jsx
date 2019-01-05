import React from 'react';

var Table = () => {
    return(
    <table border='1'>
        <tbody>
            <tr id='tableRow0'>
                <td className='tabletext' id='table0x0'>
                    <span>DAYS ON MARKET</span>
                    <br></br>
                    <span>{parseInt((Math.random()*500))} Days</span>
                </td>
                <td className='tabletext' id='table1x0'>
                    <span>LAST PRICE CHANGE</span>
                    <br></br>
                    <span>{parseInt((Math.random()*500))} Days Ago</span>
                </td>
                <td className='tabletext' id='table2x0'>
                    <span>ESTIMATED PAYMENT</span>
                    <br></br>
                    <span><a target='_blank' href='https://data.whicdn.com/images/315929782/large.jpg'>${parseInt((Math.random())*100000)}</a></span>
                </td>
            </tr>
            <tr id='tableRow1'>
                <td className='tabletext' id='table0x1'>
                    <span>MONTHLY TAXES</span>
                    <br></br>
                    <span>${parseInt((Math.random())*7000)}</span>
                </td>
                <td className='tabletext' id='table1x1'>
                    <span>MONTHLY MAINTENANCE</span>
                    <br></br>
                    <span>${parseInt((Math.random())*4000)}</span>
                </td>
                <td className='tabletext' id='table2x1'>
                    <span>TAX ABATEMENT</span>
                    <br></br>
                    <span>No data available</span>
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default Table;