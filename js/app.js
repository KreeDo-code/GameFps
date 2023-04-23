
if(document.querySelector(".items-latest")) {
const element = document.querySelector(".items-latest");

var down = false;

element.onmouseleave = function(event) {
  down = false;
};

element.onmousemove = mousemove;
element.onmousedown = function(e) {
  e = e || element.event;
  down = true;
  x = e.clientX;
  y = e.clientY;
}
element.onmouseup = function(e){
    e = e || element.event;
    down = false;
    new_x = e.clientX;
}
function mousemove(e) {

 if(down == true){
  if (x && y) {
    element.onclick = function () {
      return false;
    };
    element.scrollBy(x - e.clientX, y - e.clientY);
  }
  x = e.clientX;
  y = e.clientY;

 }
 else {
   element.onclick = function () {
     return true;
   };
 }
}

}
window.sendModalRequest = function () {

  var form_data = new FormData();

  var request = document.querySelector('.modal-request-input').value;

  form_data.append('request', request);

  var ajax_request = new XMLHttpRequest();

  ajax_request.open('POST', '/modal-request/send');

  ajax_request.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

  ajax_request.send(form_data);

  ajax_request.onreadystatechange = function()
  {
    if(ajax_request.readyState == 4 && ajax_request.status == 200)
    {
      var response = ajax_request.responseText;
      if(response == 'error') {
        document.querySelector('.modal-body-request').querySelector('p').innerHTML = "Вы не заполнили поле, введите больше 3 символов";
      }
      else {
        document.querySelector('.modal-body-request').innerHTML = "";
        document.querySelector('.modal-body-request').innerHTML = '<div class="modal-send-success"><img src="https://1vs1.site/icons/success.svg" alt="success">Ваш запрос успешно добавлен, ожидайте :)</div>';
      }
    }
  }
  //document.getElementById('modal-request').style.display = "none";
}
window.sendConfirmedFps = function () {

  var form_data = new FormData();

  form_data.append('game', document.querySelector('[itemprop="name"]').textContent);

  form_data.append('cpu', document.querySelector('[name="search_cpus"]').value);

  form_data.append('gpu', document.querySelector('[name="search_videocards"]').value);

  form_data.append('ram', document.querySelector('[name="search_ram"]').value);

  var ajax_request = new XMLHttpRequest();

  ajax_request.open('POST', '/modal-fps/confirm');

  ajax_request.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

  ajax_request.send(form_data);

  ajax_request.onreadystatechange = function()
  {
    if(ajax_request.readyState == 4 && ajax_request.status == 200)
    {
      var response = ajax_request.responseText;
      //console.log(response);
      if(response == 'error') {
        document.querySelector('.fps-confirmed-result').innerHTML = 'Сначала укажите комплектующие своего компьютера и нажмите "Проверить"';
      }
      else {
        document.querySelector('.fps-confirmed').innerHTML = "";
        document.querySelector('.fps-confirmed').innerHTML = '<p>Спасибо за отзыв :)</p>';
      }
    }
  }
  //document.getElementById('modal-request').style.display = "none";
}
window.sendModalFps = function () {

  var form_data = new FormData();

  var fps = document.querySelector('[name="modal-fps"]').value;

  form_data.append('game', document.querySelector('[itemprop="name"]').textContent);

  form_data.append('cpu', document.getElementById('send-fps-cpu').textContent);

  form_data.append('gpu', document.getElementById('send-fps-gpu').textContent);

  form_data.append('ram', document.getElementById('send-fps-ram').textContent);

  form_data.append('fps', fps);

  var ajax_request = new XMLHttpRequest();

  ajax_request.open('POST', '/modal-fps/send');

  ajax_request.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

  ajax_request.send(form_data);

  ajax_request.onreadystatechange = function()
  {
    if(ajax_request.readyState == 4 && ajax_request.status == 200)
    {
      var response = ajax_request.responseText;
      //console.log(response);
      if(response == 'error') {
        document.querySelector('.modal-body-fps').querySelector('p').innerHTML = "Вы не заполнили поле, введите больше 3 символов";
      }
      else {
        document.querySelector('.modal-body-fps').innerHTML = "";
        document.querySelector('.modal-body-fps').innerHTML = '<div class="modal-send-success"><img src="https://1vs1.site/icons/success.svg" alt="success">Ваш запрос успешно добавлен, наш официальный ответ появится в комментариях, ожидайте :)</div>';
      }
    }
  }
  //document.getElementById('modal-request').style.display = "none";
}
window.
window.closeModal = function () {
  document.getElementById('modal-request').style.display = "none";
}
window.openModalRequest = function () {
  document.getElementById('modal-request').style.display = "block";
}
window.closeModalFps = function () {
  document.getElementById('modal-fps').style.display = "none";
}
window.openModalFps = function () {
  document.getElementById('modal-fps').style.display = "block";
}
if(document.querySelector('.cirt-form')) {
const form = document.querySelector('.cirt-form');
form.addEventListener('submit', function(evt) {
  const cpu = document.querySelector('input[name="search_cpus"]');
  const gpu = document.querySelector('input[name="search_videocards"]');
  evt.preventDefault();
  if(!cpu.getAttribute('data-name') && !gpu.getAttribute('data-name')) {
    alert('Введите название процессора и видеокарты.');
    return;
  }
  if(!cpu.getAttribute('data-name')) {
    alert('Введите название процессора и выберите его из выпадающего списка.');
    return;
  }
  else {
    if(cpu.getAttribute('data-name') != cpu.value) {
      alert('Вы не выбрали процессор из выпадающего списка.');
      return;
    }
  }
  if(!gpu.getAttribute('data-name')) {
    alert('Введите название видеокарты и выберите ее из выпадающего списка.');
    return;
  }
  else {
    if(gpu.getAttribute('data-name') != gpu.value) {
      alert('Вы не выбрали видеокарту из выпадающего списка.');
      return;
    }
  }
  this.submit();
});
}
if(document.querySelector('.item-charts-info')) {
  var elements = document.querySelectorAll('.item-charts-info');

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
      if(!document.body.querySelector('.overlay')) {
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.append(overlay);
      }
      this.parentElement.querySelector('.icf-block').style.display = "block";
    });
  }
}
if(document.querySelector('.mini-modal-close')) {
  var elements = document.querySelectorAll('.mini-modal-close');
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
      console.log(this.closest("div"));
      this.parentElement.style.display = "none";
      var elem = document.querySelector(".overlay");
      elem.parentNode.removeChild(elem);
    });
  }
}
if(document.getElementById('arrow-click')) {
  document.getElementById('arrow-click').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
/** ФИЛЬТР CPUS */
if(document.getElementById('open-menu') != null) {
  document.getElementById('open-menu').onclick = function() {
    const menu = document.getElementsByClassName("tm-menu");
		menu[0].style.visibility = "visible";
    menu[0].style.opacity = "1";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
  };
}
if(document.getElementById('close-menu') != null) {
  document.getElementById('close-menu').onclick = function() {
	    const menu = document.getElementsByClassName("tm-menu");
      menu[0].style.opacity = "0";
			menu[0].style.visibility = "hidden";
      document.getElementsByTagName('body')[0].style.overflow = "auto";
	  };
  }
if(document.getElementById('open-search') != null) {
  document.getElementById('open-search').onclick = function() {
      const search = document.getElementsByClassName("search_input");
      search[0].style.visibility = "visible";
      search[0].style.opacity = "1";
      document.getElementsByTagName('body')[0].style.overflow = "hidden";
      document.getElementById('close-search').style.display = "block";
  };
}
if(document.getElementById('close-search') != null) {
  document.getElementById('close-search').onclick = function() {
	    const search = document.getElementsByClassName("search_input");
      search[0].style.opacity = "0";
			search[0].style.visibility = "hidden";
      document.getElementsByTagName('body')[0].style.overflow = "auto";
      document.getElementById('close-search').style.display = "none";
	  };
}
if(document.getElementById('open-filter') != null) {
  document.getElementById('open-filter').onclick = function() {
      	    const search = document.getElementsByClassName("cpus-left");
            search[0].style.display = "block";
            search[0].style.visibility = "visible";
            search[0].style.opacity = "1";
            document.getElementsByTagName('body')[0].style.overflow = "hidden";
            document.getElementById('close-filter').style.display = "block";

  };
  document.getElementById('close-filter').onclick = function() {
      	    const search = document.getElementsByClassName("cpus-left");
            search[0].style.display = "none";
            search[0].style.visibility = "hidden";
            search[0].style.opacity = "0";
            document.getElementsByTagName('body')[0].style.overflow = "auto";
            document.getElementById('close-filter').style.display = "none";

  };
}

document.onmouseup = (e) => {
  const els = document.getElementsByClassName('search-content');
  Array.prototype.forEach.call(els, function(el) {
    if(el.parentElement.querySelector('.list-group')) {
      if (e.target !== el) {
        var p = el.parentElement.querySelector('.list-group').style.display="none";
      }
      else {
          if(el.parentElement.querySelector('.list-group').style.display == "none")
          {
            var p = el.parentElement.querySelector('.list-group').style.display="flex";
          }
      }
    }
  });

}
function showLoader () {
	document.getElementById('loading').style.display = 'flex';
	document.getElementById('cpus-data').style.opacity = '0.5';
}
function hideLoader () {
	document.getElementById('loading').style.display = 'none';
	document.getElementById('cpus-data').style.opacity = '1';
	document.getElementById('pagination').style.display = 'none';
}
window.doRate = function (rating, hname) {
  var form_data = new FormData();
  form_data.append('rating', rating);
  form_data.append('hname', hname);

  var ajax_request = new XMLHttpRequest();

  ajax_request.open('POST', '/load/rate');

  ajax_request.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

  ajax_request.send(form_data);

  ajax_request.onreadystatechange = function()
  {
    if(ajax_request.readyState == 4 && ajax_request.status == 200)
    {
      var response = JSON.parse(ajax_request.responseText);
      if(response[0].voted == null) {
        document.querySelector('.current-rating').style.width = response[0].cpu_ev_percent+'%';
        document.querySelector('.rating-number').innerHTML = response[0].cpu_ev+'<span>/5</span>';
        document.querySelector('.rating-count').innerHTML = 'Спасибо! Ваш голос учтен.';
      }
      else {
        alert('Вы уже проголосовали :)');
      }
    }
  }

}

window.sendComment = function (id = null) {

  var form_data = new FormData();
  var hname = window.location.href.match(/[^\/]+$/);
  if(id == null) {
    var user = document.querySelector('input[name="user"]').value;
    var text = document.querySelector('textarea[name="comment_text"]').value;
    //console.log(user, text, hname);
  }
  else {
    var element = document.getElementById('comment-'+id);

    var user = element.querySelector('input[name="user"]').value;
    var text = element.querySelector('textarea[name="comment_text"]').value;
    //console.log(user, text, hname);
    form_data.append('parentId', id);
  }
  form_data.append('user', user);
  form_data.append('text', text);
  form_data.append('hname', hname);
  if(document.getElementById('comment-pc')) {
    form_data.append('pc', document.getElementById('comment-pc').textContent);
  }
  var ajax_request = new XMLHttpRequest();

  ajax_request.open('POST', '/comments/add-comment');

  ajax_request.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

  ajax_request.send(form_data);

  ajax_request.onreadystatechange = function()
  {
    if(ajax_request.readyState == 4 && ajax_request.status == 200)
    {
      var response = ajax_request.responseText;

      if(document.querySelector('.comment-error')) {
        document.querySelector('.comment-error').remove();
      }
      if(document.querySelector('.warning-message')) {
        document.querySelector('.warning-message').remove();

      }
      if(id == null) {
        document.querySelector('.comments-block').innerHTML = response+document.querySelector('.comments-block').innerHTML;
      }
      else {
        var comment = document.getElementById('comment-'+id);
        comment.insertAdjacentHTML('afterend', response);
        //insertAfter(response, document.getElementById('comment-'+id).lastElementChild);
        //document.getElementById('comment-area-'+id).innerHTML = document.getElementById('comment-area-'+id).innerHTML;
      }
      if(response.includes('comment-text') || response.includes('успешно добавлен')) {
        document.querySelector('textarea[name="comment_text"]').value = "";
        if(id != null) {
          document.getElementById('comment-'+id).querySelector('.add-comment').remove();
          document.getElementById('comment-'+id).getElementsByTagName('button')[0].style.display = null;
        }
      }
    }
  }

}
window.openReply = function (id) {
  var replyBlock = document.querySelector(".add-comment");
  var newReplyBlock = replyBlock.cloneNode(true);

  var repliedUser = document.getElementById('comment-'+id).querySelector('.comment-name').innerHTML.trim();

  document.getElementById('comment-'+id).querySelector('.comment-reply').style.display = "none";

  newReplyBlock.getElementsByTagName('button')[0].remove();

  newReplyBlock.innerHTML += '<button onclick="sendComment('+id+')">Отправить</button>';

  newReplyBlock.querySelector('textarea[name="comment_text"]').value = repliedUser+',';

  document.getElementById('comment-'+id).appendChild(newReplyBlock);

}
window.filterLoad = function (link) {
	var form_data = new FormData();
	Array.from(document.querySelectorAll('input[id="string"], input[id="checker"]')).forEach(i => {

		if(i.id === "checker" && i.checked) {
			form_data.append(i.name, i.value);
			//console.log('ЧЕКЕЕЕЕТ');
		}
		if(i.id === 'string') {
			form_data.append(i.name, i.value);
		}
		})
    form_data.append('url', window.location.href);
		//console.clear();
		for (var pair of form_data.entries()) {
			//console.log(pair[0]+ ', ' + pair[1]);
		}

		var ajax_request = new XMLHttpRequest();
		if(link != 'filterAjax') {
			if(Number.isInteger(link)) {
				ajax_request.open('POST', '/load/filter?page='+link);
			}
			else {
				let page = link.match(/\(?<=\?page\=\).*/gm);
				ajax_request.open('POST', '/load/filter?page='+page);
			}
		}
		else {
			ajax_request.open('POST', '/load/filter');
		}
		ajax_request.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

		showLoader();

		ajax_request.send(form_data);

		ajax_request.onreadystatechange = function()
		{
			if(ajax_request.readyState == 4 && ajax_request.status == 200)
			{
				hideLoader();
				var response = ajax_request.responseText;
        //console.log(response);
				var block = document.getElementById('cpus-data');
				if(response.length > 0)
				{
					block.innerHTML = "";
					block.innerHTML = ajax_request.responseText;
				}
				else {
					block.innerHTML = "";
					block.innerHTML = '<div class="warning">По Вашему запросу ничего не найдено</div>';

				}
			}
		}
}
/** КОНЕЦ ФИЛЬТРА CPUS */
window.loadMore = function () {
  var form_data = new FormData();

  var page = document.querySelector('.rating-header-cpu-all').getAttribute('data-page');

  //console.log(page);

  var count = document.querySelector('.rating-items').getAttribute('data-count');

  //console.log(count);

  form_data.append('offset', count);

  form_data.append('page', page);

  form_data.append('hname', 'rating');

  var ajax_request = new XMLHttpRequest();

  ajax_request.open('POST', '/item/rating/all/more');

  ajax_request.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

  ajax_request.send(form_data);

  ajax_request.onreadystatechange = function()
  {
    if(ajax_request.readyState == 4 && ajax_request.status == 200)
    {
      var response = ajax_request.responseText;

      var items = document.querySelector('.rating-items').innerHTML;

      document.querySelector('.rating-items').innerHTML = items + ajax_request.responseText;

      document.querySelector('.rating-items').setAttribute('data-count', parseInt(count) + 30);
      //console.log(response);
    }
  }
}
window.get_text = function (event, field, page, hname, id) {
  var v = event.textContent;

  document.querySelector('[name="search_'+field+'"]').setAttribute("data-name", v);
  document.querySelector('[name="search_'+field+'"]').setAttribute("data-hurl", hname);
  document.querySelector('[name="search_'+field+'"]').setAttribute("data-id", id);

  document.querySelector('[name="search_'+field+'"]').value = v;

  if(document.querySelector('[name="search_1"]')) {
    var s1 = document.querySelector('[name="search_1"]').getAttribute("data-hurl");
    var s1_id = document.querySelector('[name="search_1"]').getAttribute("data-id");
  }
  if(document.querySelector('[name="search_2"]')) {
    var s2 = document.querySelector('[name="search_2"]').getAttribute("data-hurl");
    var s2_id = document.querySelector('[name="search_2"]').getAttribute("data-id");
  }
	if(page == "compare") {
    if(s1 != s2 && s1 != null && s2 !=null) {
      if(window.location.href.includes("cpu")) {
        if(s2_id > s1_id) {
			       window.location.href = '/cpu/compare/'+s2+'-vs-'+s1;
        }
        else {
          window.location.href = '/cpu/compare/'+s1+'-vs-'+s2;
        }
      }
      if(window.location.href.includes("gpu")) {
        if(s2_id > s1_id) {
          window.location.href = '/gpu/compare/'+s2+'-vs-'+s1;
        }
        else {
          window.location.href = '/gpu/compare/'+s1+'-vs-'+s2;
        }
      }
    }
	}
	if(page=="one") {
			var href = window.location.href;

			var l = href.replace( /[^\/]+$/, hname );

			l = l.replace('<b>')

			window.location.href = l;
	}
  if(page=="games") {
    var href = window.location.href.replace(/\?page=.*/gm, '')
    window.location.href = href+'/'+hname;
  }
}

var href = window.location.href;
if(href.includes('compare')) {
	href = href.split('compare/')[0];
	//console.log(href);
		//window.location.href = href.replace('cpu', 'cpu/compare')+'-vs-'+hname;
}
let timer;
window.load_data = function (query, table, key, page = null) {

  clearTimeout(timer);
  timer = setTimeout(() => {
	if(query.length > 2)
	{
		var form_data = new FormData();

    table = table.replace(/\s+/g, '');

		form_data.append('query', query);

    form_data.append('table', table);

    form_data.append('page', page);

		var ajax_request = new XMLHttpRequest();

		ajax_request.open('POST', '/load');

    ajax_request.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').content);

		ajax_request.send(form_data);

		ajax_request.onreadystatechange = function()
		{
			if(ajax_request.readyState == 4 && ajax_request.status == 200)
			{
				var response = JSON.parse(ajax_request.responseText);
        //console.log(response[0]);
				var html = '<div class="list-group">';

				if(response.length > 0)
				{
					for(var count = 0; count < response.length; count++)
					{
            if(table == "global")
            {
              html += '<a href="'+response[count].url+'" target="_blank"><div class="list-group-element"><div class="list-img"><img src="'+response[count].img+'" alt="'+response[count].name+'"/></div><div class="list-name">'+response[count].name+'</div></div></a>';
            }
            else {
              html += '<div class="list-group-element" onclick="get_text(this, \''+key+'\', \''+page+'\', \''+response[count].hname+'\', \''+response[count].id+'\')"><div class="list-img"><img src="'+response[count].img+'" alt="'+response[count].name+'"/></div><div class="list-name">'+response[count].name+'</div></div>';
            }

					}
				}
				else
				{
					html += '<div class="list-group-element lge-request">Ничего не нашлось. Отправьте запрос на добавление <a class="lge-request-button" id="open-modal-request" onclick="javascript:openModalRequest()">Запросить</a></div>';
				}

				html += '</div>';

				document.getElementById('search_result_'+key).innerHTML = html;
			}
		}
	}
	else
	{
		document.getElementById('search_result_'+key).innerHTML = '';
	}
}, 150);
}

const tabs = document.querySelector(".cpu-tabs");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

if(tabs != null) {
	tabs.onclick = e => {
	  const id = e.target.dataset.id;
	  if (id) {
	    tabButton.forEach(btn => {
	      btn.classList.remove("active");
	    });
	    e.target.classList.add("active");

	    contents.forEach(content => {
	      content.classList.remove("active");
	    });
	    const element = document.getElementById(id);
	    element.classList.add("active");
	  }
	}
}
if(document.getElementById("compare_cpu_button") != null) {
	document.getElementById("compare_cpu_button").onclick = function() {
		var e = document.getElementById('compare_block');
		var l = document.getElementById("compare_cpu_button");
		e.style.display = 'flex';
		l.style.display = 'none';
	};
}
window.compareClick = function () {
document.getElementsByName('choosed_element').forEach(item => {
  item.addEventListener("click", function(){
		var checkboxes = document.getElementsByName('choosed_element');
		var selected = [];
		for (var i=0; i<checkboxes.length; i++) {
		    if (checkboxes[i].checked) {
            //if(checkboxes[i].getAttribute('data-rating'))
		        selected.push([checkboxes[i].value, checkboxes[i].getAttribute('data-id')]);
            //console.log(selected);
		    }
		}
		if(selected.length > 1) {
			var href = window.location.href.replace(/\?page=.*/gm, '')
      if(selected[1][1] > selected[0][1]) {
        window.location.href = href+'/compare/'+selected[1][0]+'-vs-'+selected[0][0];
      }
      else {
        window.location.href = href+'/compare/'+selected[0][0]+'-vs-'+selected[1][0];
      }
		}
	}, false);
})
}
/** RANGE SLIDER */
Array.from(document.querySelectorAll('.range-slider')).forEach(i => {
	const rangeS = i.querySelectorAll('input[type="range"]'),
				numberS = i.querySelectorAll('input[type="number"]');

	rangeS.forEach((el) => {
			el.onchange = () => {
					let slide1 = parseFloat(rangeS[0].value),
							slide2 = parseFloat(rangeS[1].value);
					numberS[0].value = slide1;
					numberS[1].value = slide2;
					filterLoad('notAjax');
			}
			el.oninput = () => {
				let slide1 = parseFloat(rangeS[0].value),
						slide2 = parseFloat(rangeS[1].value),
						firstValue = i.querySelectorAll('div[id="firstValue"]')[0],
						secondValue = i.querySelectorAll('div[id="secondValue"]')[0];

				firstValue.innerHTML = slide1;
				secondValue.innerHTML = slide2;
			}
	});

	numberS.forEach((el) => {
			el.onchange = () => {
					let number1 = parseFloat(numberS[0].value),
							number2 = parseFloat(numberS[1].value),
							firstValue = i.querySelectorAll('div[id="firstValue"]')[0],
							secondValue = i.querySelectorAll('div[id="secondValue"]')[0];
					rangeS[0].value = number1;
					rangeS[1].value = number2;
					filterLoad('notAjax');
					firstValue.innerHTML = number1;
					secondValue.innerHTML = number2;
			}
	});
})



!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var g="undefined"!=typeof document&&document.documentMode,f={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var d=t.getAttribute("data-background-image-set").split(n),u=d[0].substr(0,d[0].indexOf(" "))||d[0];// Substring before ... 1x
u=-1===u.indexOf("url(")?"url("+u+")":u,1===d.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function A(t){t.setAttribute("data-loaded",!0)}var m=function(t){return"true"===t.getAttribute("data-loaded")},v=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},f,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,g=e.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),m(t.target)||(r(t.target),A(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d}));for(var c,l=v(o,i),b=0;b<l.length;b++)(c=l[b]).getAttribute("data-placeholder-background")&&(c.style.background=c.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=v(o,i),e=0;e<t.length;e++)m(t[e])||(s?s.observe(t[e]):(u(t[e]),A(t[e]),g(t[e])))},triggerLoad:function(t){m(t)||(u(t),A(t),g(t))},observer:s}}});

const observer = lozad();
observer.observe();
/** END RANGE SLIDER */
