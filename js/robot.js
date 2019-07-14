/*function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }*/

  function hideDivs0()
{
    document.getElementById('drag1').style.display = 'none';
    document.getElementById('step00').style.display = 'block';
}

function hideDivs1()
{
    if (document.getElementById('step00').style.display === 'block')
    {
        document.getElementById('drag1').style.display = 'none';
        document.getElementById('step00').style.display = 'none';
        document.getElementById('drag2').style.display = 'none';
        document.getElementById('step01').style.display = 'block';
        /*this.style.display = 'none';*/
    }
    else
        alert('Try another part!');
}

function hideDivs2()
{
    if (document.getElementById('step01').style.display === 'block')
    {
        document.getElementById('drag3').style.display = 'none';
        document.getElementById('step01').style.display = 'none';
        document.getElementById('step02').style.display = 'block';
    }
    else
        alert('Try another part!');
}

function hideDivs3()
{
    if (document.getElementById('step02').style.display === 'block')
    {
        document.getElementById('step02').style.display = 'none';
        document.getElementById('drag4').style.display = 'none';
        document.getElementById('step03').style.display = 'block';
    }
    else
        alert('Try another part!');
}

function hideDivs4()
{
    if (document.getElementById('step03').style.display === 'block')
    {
        document.getElementById('step03').style.display = 'none';
        document.getElementById('drag5').style.display = 'none';
        document.getElementById('step04').style.display = 'block';
    }
    else
        alert('Try another part!');
}

function hideDivs5()
{
    if (document.getElementById('step04').style.display === 'block')
    {
        document.getElementById('step04').style.display = 'none';
        document.getElementById('drag6').style.display = 'none';
        document.getElementById('step05').style.display = 'block';
    }
    else
        alert('Try another part!');
}

function hideDivs6()
{
    if (document.getElementById('step05').style.display === 'block')
    {
        document.getElementById('step05').style.display = 'none';
        document.getElementById('drag7').style.display = 'none';
        document.getElementById('step06').style.display = 'block';
    }
    else
        alert('Try another part!');
}

function hideDivs7()
{
    if (document.getElementById('step06').style.display === 'block')
    {
        document.getElementById('step06').style.display = 'none';
        document.getElementById('drag8').style.display = 'none';
        document.getElementById('step07').style.display = 'block';
        document.getElementById('message').innerHTML = 'Congratulation! You have assembled the Robot!';
    }
    else
        alert('Try another part!');
}


