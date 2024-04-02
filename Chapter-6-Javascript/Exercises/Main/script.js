document.getElementById('Calculatebutton').addEventListener('click', function(){
    var Petrolprice=parseFloat(document.getElementById('Petrolprice').value);
    var literspurchased= parseFloat(document.getElementById('literspurchased').value);

    var Totalprice= Petrolprice * literspurchased;

    document.getElementById('Totalprice').innerText="Total price(in $)= $"+Totalprice.toFixed(2);
});