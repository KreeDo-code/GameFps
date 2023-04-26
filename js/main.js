const btnDarkMode = document.querySelector(".dark-mode-btn");

// Перевірка темної теми на рівні системних налаштувань
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

// Перевірка темної теми в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Якщо змінюються системні налаштування, змінюємо тему
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode-btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			btnDarkMode.classList.remove("dark-mode-btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
    });

// Увімкнення нічного режиму за кнопкою
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};
//
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