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
    const bmi=weightkg/(height*height);//bmi calc
//age group
    let agegroup = '';
    if(age < 13) {
        agegroup = 'child';
    }else if(age >= 13 && age < 20) {
        agegroup = 'teen';
    }else if(age >= 20 && age < 60) {
        agegroup = 'adult';
    }else{
        agegroup = 'old';
    }
// Determine category and styling
    let category, color, bgColor, description, recommendations;
    if (agegroup === 'child'||agegroup === 'teen'){
        category = 'BMI-for-age';
        color = '#f6ad55';
        bgColor = '#fffaf0';
        description = 'BMI for children and teens is interpreted using percentiles and growth charts. Please consult a pediatrician for accurate assessment.';
        recommendations = [
            'Maintain a balanced diet',
            'Stay active',
            'Consult a pediatrician for growth charts'
        ];
    }else if(agegroup === 'adult'){
        if(bmi<18.5){
            category = 'Underweight';
            color = '#3182ce';
            bgColor = '#ebf8ff';
            description = gender === 'female'
                ? 'As an adult female, your BMI indicates underweight. Consider consulting a healthcare provider about healthy weight gain.'
                : 'As an adult male, your BMI indicates underweight. Consider consulting a healthcare provider about healthy weight gain.';
            recommendations = [
                    'Eat nutrient-dense, calorie-rich foods',
                    'Include healthy fats in your diet',
                    'Consider strength training to build muscle',
                    'Eat frequent, smaller meals throughout the day',
                    'Consult with a nutritionist or healthcare provider'
            ];
        }else if(bmi >= 18.5 && bmi < 25){
            category = 'Normal Weight';
            color = '#38a169';
            bgColor = '#f0fff4';
            description = gender === 'female'
                ? 'As an adult female, your BMI is in the normal range. Keep up the healthy lifestyle!'
                : 'As an adult male, your BMI is in the normal range. Keep up the healthy lifestyle!';
            recommendations = [
                'Maintain regular physical activity (150+ minutes/week)',
                'Continue eating a balanced, nutritious diet',
                'Stay hydrated with 8+ glasses of water daily',
                'Get adequate sleep (7-9 hours per night)',
                'Monitor your weight regularly'
            ];
        }else if(bmi >= 25 && bmi < 30){
            category = 'Overweight';
            color = '#d69e2e';
            bgColor = '#fffbeb';
            description = gender === 'female'
                ? 'As an adult female, your BMI indicates overweight. Consider a balanced diet and regular exercise.'
                : 'As an adult male, your BMI indicates overweight. Consider a balanced diet and regular exercise.';
            recommendations = [
                'Aim for 1-2 pounds of weight loss per week',
                'Increase physical activity to 300+ minutes/week',
                'Focus on portion control and mindful eating',
                'Choose whole foods over processed options',
                'Consider working with a registered dietitian'
            ];
        }else{
            category = 'Obese';
            color = '#e53e3e';
            bgColor = '#fff5f5';
            description = gender === 'female'
                ? 'As an adult female, your BMI indicates obesity. Please consult a healthcare provider for personalized advice.'
                : 'As an adult male, your BMI indicates obesity. Please consult a healthcare provider for personalized advice.';
            recommendations = [
                'Consult with a healthcare provider for a comprehensive plan',
                'Start with gentle, low-impact exercises',
                'Focus on creating a sustainable caloric deficit',
                'Consider joining a weight loss support group',
                'Monitor other health markers (blood pressure, cholesterol)'
            ];
        }
    }else if(agegroup === 'old'){
        if(bmi < 23){
            category = 'Underweight';
            color = '#3182ce';
            bgColor = '#ebf8ff';
            description = gender === 'female'
            ? 'As an older adult female, being underweight may increase risks for bone loss, weakened immunity, and slower recovery from illness.'
            : 'As an older adult male, being underweight may increase risks for muscle loss, weakened immunity, and slower recovery from illness.';
            recommendations = [
                'Focus on protein-rich foods (aim for 1.2-1.6g per kg body weight)',
                'Include calcium and vitamin D rich foods for bone health',
                'Eat frequent, smaller meals (5-6 times daily)',
                'Consider resistance exercises to maintain muscle mass',
                'Stay hydrated - older adults have reduced thirst sensation',
                'Consult healthcare provider about nutritional supplements',
                'Monitor for underlying conditions causing weight loss'
            ];
        }else if(bmi >= 23 && bmi < 30){
            category = 'Healthy Range';
            color = '#38a169';
            bgColor = '#f0fff4';
            description = gender === 'female'
                ? 'As an older adult female, your BMI is in a healthy range. A slightly higher BMI can be protective at your age.'
                : 'As an older adult male, your BMI is in a healthy range. A slightly higher BMI can be protective at your age.';
            recommendations = [
                'Maintain regular, low-impact exercise (walking, swimming, tai chi)',
                'Focus on balance and flexibility exercises to prevent falls',
                'Ensure adequate protein intake to preserve muscle mass',
                'Stay socially active - eat meals with others when possible',
                'Get regular health screenings (blood pressure, cholesterol, diabetes)',
                'Maintain consistent sleep schedule (7-8 hours nightly)',
                'Consider strength training 2-3 times per week with light weights'
            ];
        }else{
            category = 'Obese';
            color = '#e53e3e';
            bgColor = '#fff5f5';
            description = gender === 'female'
                ? 'As an older adult female, obesity increases risks for diabetes, heart disease, and mobility issues. Gradual, sustainable changes are key.'
                : 'As an older adult male, obesity increases risks for diabetes, heart disease, and mobility issues. Gradual, sustainable changes are key.';
            recommendations = [
                'Consult healthcare provider before starting any weight loss program',
                'Aim for gradual weight loss (1-2 pounds per month maximum)',
                'Start with chair exercises or water aerobics if mobility is limited',
                'Focus on portion control rather than strict dieting',
                'Prioritize nutrient-dense foods over calorie restriction',
                'Consider working with a geriatric nutritionist',
                'Monitor blood sugar, blood pressure, and joint health regularly',
                'Join senior fitness classes for social support and safety'
            ];
        }
    }
});