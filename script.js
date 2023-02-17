var data=parseInt(document.getElementById("num").innerHTML);
function inc(){
    data+=1;
    document.getElementById("num").innerHTML=data;
}
function dec(){
    data-=1;
    data=data<0?0:data;
    document.getElementById("num").innerHTML=data;
}
function res(){
    data=0;
    document.getElementById("num").innerHTML=data;
}
