function calculator(){
    grade1=parseFloat(document.getElementById('g1').value);
    credit1=parseFloat(document.getElementById('c1').value);

    grade2=parseFloat(document.getElementById('g2').value);
    credit2=parseFloat(document.getElementById('c2').value);

    grade3=parseFloat(document.getElementById('g3').value);
    credit3=parseFloat(document.getElementById('c3').value);

    grade4=parseFloat(document.getElementById('g4').value);
    credit4=parseFloat(document.getElementById('c4').value);

    grade5=parseFloat(document.getElementById('g5').value);
    credit5=parseFloat(document.getElementById('c5').value);

    grade6=parseFloat(document.getElementById('g6').value);
    credit6=parseFloat(document.getElementById('c6').value);

    grade7=parseFloat(document.getElementById('g7').value);
    credit7=parseFloat(document.getElementById('c7').value);

    grade8=parseFloat(document.getElementById('g8').value);
    credit8=parseFloat(document.getElementById('c8').value);

    num=(grade1*credit1)+(grade2*credit2)+(grade3*credit3)+(grade4*credit4)+(grade5*credit5)+(grade6*credit6)+(grade7*credit7)+(grade8*credit8)
    den=(credit1+credit2+credit3+credit4+credit5+credit6+credit7+credit8)
    final=num/den
    swal("Congrats", "Your final points is"+" "+final)
}

