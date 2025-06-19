document.querySelectorAll('input[name="heightunit"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const inches = document.getElementById('inches');
        if (this.value === 'feet') {
            inches.style.display = 'block';
            document.getElementById('height').placeholder = 'Enter feet';
        }else{
            inches.style.display = 'none';
            document.getElementById('height').placeholder = 'Enter your height';
        }
    });
});
// BMI Calculator
document.getElementById('bmiform').addEventListener('submit',function(e){
    e.preventDefault();
    let height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const heightunit = document.querySelector('input[name="heightunit"]:checked').value;
    const weightunit = document.querySelector('input[name="weightunit"]:checked').value;            
// Convert height to meters
    if(heightunit==='feet'){
        const inches = parseFloat(document.getElementById('inches').value) || 0;
        height=(height*12+inches)*2.54/100;
    }else{
        height = height/100;//cm to meters
    }
    let weightkg=weight;
    if(weightunit==='lbs'){
        weightkg=weight*0.453592;//weight to kg
    }
// BMI calculation
    const bmi=weightkg/(height*height);
});