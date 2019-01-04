import React from 'react';

let modal = document.getElementById('calcModal');
let btn = document.getElementById("calcPopup");
let span = document.getElementsByClassName("close")[0];
btn.open = () => {
    modal.style.display = "block";
}
span.closer = () => {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

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
                    {/* <span><a target='_blank' href='THIS IS A POPUP'>${parseInt((Math.random())*100000)}</a></span> */}
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">${parseInt((Math.random())*100000)}</button>
                        <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Modal Header</h4>
                                </div>
                                <div class="modal-body">
                                    <p>This is a modal</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                        </div>
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