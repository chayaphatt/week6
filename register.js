window.onload = pageLoad;
function pageLoad(){
    
    const regForm = document.getElementById('myRegister');
    if (regForm) {
        regForm.onsubmit = validateForm;
    }
}

function validateForm() {

    const errorSpan = document.getElementById('errormsg');
    const form = document.forms["myRegister"]; 
    const passwordA = form["password"][0].value;
    const passwordB = form["password"][1].value;

    if (passwordA !== passwordB) {
        if (errorSpan) {
            errorSpan.textContent = "รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบและป้อนใหม่จ้า";
        }
        form["password"][0].value = "";
        form["password"][1].value = "";
        return false; 
    } 
    alert("ลงทะเบียนเรียบร้อย ข้อมูลจะถูกส่งไปยังหน้า Login จ้า");
    return true; 
}