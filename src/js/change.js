import '../css/common.css';
import '../css/style.css';

import { btn , para} from './domFile.js'

var bool = true;

btn.onclick = function(){
	if(bool){
		bool = false;
		para.style.display = 'none'
	}else{
		bool = true;
		para.style.display = 'block';
	}
}