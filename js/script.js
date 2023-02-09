document.addEventListener('DOMContentLoaded', (e) => {
	document.getElementById('down').addEventListener('click', (e) => {
		document.getElementById('add-info').classList.remove('hide');
		document.getElementById('up').classList.remove('hide');
		document.getElementById('down').classList.add('hide');
	})
	document.getElementById('up').addEventListener('click', (e) => {
		document.getElementById('add-info').classList.add('hide');
		document.getElementById('up').classList.add('hide');
		document.getElementById('down').classList.remove('hide');
	})
})

document.addEventListener('DOMContentLoaded', (e) => {
	document.getElementById('open').addEventListener('click', (e) => {
		document.getElementById('add-info-1').classList.remove('hidden');
		document.getElementById('add-info-2').classList.remove('hidden');
		document.getElementById('add-info-3').classList.remove('hidden');
		document.getElementById('add-info-4').classList.remove('hidden');
		document.getElementById('add-info-5').classList.remove('hidden');
		document.getElementById('add-info-6').classList.remove('hidden');
		document.getElementById('add-info-7').classList.remove('hidden');
		document.getElementById('close').classList.remove('hidden');
		document.getElementById('open').classList.add('hidden');
	})
	document.getElementById('close').addEventListener('click', (e) => {
		document.getElementById('add-info-1').classList.add('hidden');
		document.getElementById('add-info-2').classList.add('hidden');
		document.getElementById('add-info-3').classList.add('hidden');
		document.getElementById('add-info-4').classList.add('hidden');
		document.getElementById('add-info-5').classList.add('hidden');
		document.getElementById('add-info-6').classList.add('hidden');
		document.getElementById('add-info-7').classList.add('hidden');
		document.getElementById('close').classList.add('hidden');
		document.getElementById('open').classList.remove('hidden');
	})
})