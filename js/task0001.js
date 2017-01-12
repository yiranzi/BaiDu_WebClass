window.onload = function()
{
  var oArtical = document.getElementById("articals");
  var oLis = oArtical.getElementsByTagName("li");
  var iClick = 1;

  function DrawColor(i)
  {
    oLis[iClick].style.backgroundColor = "";
    oLis[i].style.backgroundColor = "purple";
    iClick = i;
  }
  DrawColor(2);

  for(var i=0;i<oLis.length;i++)
  {
    oLis[i].onmouseover = function()
    {
      this.style.backgroundColor = "purple";
    }

    oLis[i].onmouseout = function()
    {
      if(this.index == iClick)return;
      this.style.backgroundColor = "";
    }

    oLis[i].onclick = function()
    {
      console.log[this.index];
      DrawColor(this.index);
    }
     oLis[i].index = i;
  }
  oLis[1].onChoose = true;

  var oRiliDay = document.getElementById("riliday");
  var oDays = oRiliDay.getElementsByTagName("li");
  var iDayClick = 0;
  function DrawDayColor(i)
  {
    oDays[iDayClick].style.backgroundColor = "";
    oDays[iDayClick].style.color = "";
    oDays[i].style.backgroundColor = "purple";
    oDays[i].style.color = "white";
    iDayClick = i;
  }
  for(var i = 0;i<oDays.length;i++)
  {
    oDays[i].onmouseover = function(){
      this.style.color = "white";
      this.style.backgroundColor = "purple";
    }

    oDays[i].onmouseout = function(){
      if(this.index == iDayClick)return;
      this.style.color = "";
      this.style.backgroundColor = "";
    }

    oDays[i].onclick = function()
    {
      DrawDayColor(this.index);
    }

    oDays[i].index = i;
  }
  DrawDayColor(0);
}
