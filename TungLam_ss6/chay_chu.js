
let a= ["chay mot chuong trinh"];
function typeTextarea(){
    t = document.f.txt.value;
    j = t.length;
    if(j > 0)
    {
        for(var i=1; i<=j; i++)
        {
            n = n + a[i];
            if(i == 22)
            {
                document.f.txt.value = "";
                n = "";
            }
        }
    }
    document.f.txt.value = n;
    n="";
    setTimeout("typeTextarea()", 1);
    //return false;
}
