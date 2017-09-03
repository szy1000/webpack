// import {} from ''
import "../css/style.scss";
import "../users.html";

const btn = document.getElementById('btn');
const para = document.getElementById('para');

let bool = true;

const toggle = () => {
	if(bool){
		bool = false;
		para.style.display = 'none'
	}else{
		bool = true;
		para.style.display = 'block';
	}
}

btn.addEventListener('click',toggle);

