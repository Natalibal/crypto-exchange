    const columns = document.querySelectorAll('.column');
	
	 columns.forEach(column => {
        const line = column.querySelector('.line');
        const info = column.getAttribute('data-info');
        column.addEventListener('mouseover', () => {
            line.style.borderColor = 'orange';
            column.querySelector('p').style.color = 'orange';

  
					const carencies = giveCurrencyesList[info];
					let content;
					carencies.forEach(current => {
						 renderCurency(current)
					})
                    infoText.innerHTML = ''
	
				})
	 })
	const renderCurency = (cur) => {
		                //<li style="cursor: pointer; display: flex; margin: 10px 30px 10px -25px;">
                        //<img src=cur.iconLink alt=cur.name style = "width: 100px;">
                        //<p style=cur.style onClick = "handleGiveCurrencySelected(this)">cur.name</p> 
                        //</li>
						<li style="cursor: pointer; display: flex; margin: 10px 30px 10px -25px;">
                       <p style="padding: 11px 0px; margin: 10px 0px;" code='BTC' onClick = "handleGiveCurrencySelected(this)">Bitcoin</p> 
                      </li>
	}