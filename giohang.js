
function them(button){
    var row = button.parentElement.parentElement.cloneNode(true); 
    var btnXoa = row.getElementsByTagName("button")[0]; btnXoa.innerText="Xóa";
    btnXoa.setAttribute('onclick', 'xoa(this)'); 
    document.getElementById("cart").appendChild(row);
    tongtien(); 
}
function xoa(button){
    var row = button.parentElement.parentElement; 
    document.getElementById("cart").removeChild(row);
    tongtien();
}
function tongtien(){
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr");
    var tong = 0;
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        console.log(cells);
        var price = cells[1].innerText.substring(1);
        var input = Number(cells[2].firstChild.value);
        v = price * input;
        tong += 1*v;
    }
    document.getElementById("tong").innerText = tong;
}