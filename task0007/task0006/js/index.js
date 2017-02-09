/**
 * Created by northy on 2017/2/4.
 */
setTimeout("document.getElementById('change').href='css/start.css'",1);
var as = document.getElementsByTagName('a');
for(let i = 0;i<as.length;i++)
{
    as[i].onclick=function click ()
    {
        document.getElementById('change').href="css/sta3.css";
        setTimeout('top.location.href="'+this.name+'"',2000);
    }
}