class Items{
	constructor(name){
		this.itemname=name
		this.qty=0;
		this.isStarred=false;
	}
}


const cart=[]

// const divitems=document.querySelectorAll('.items')

// console.dir(divitems[divitems.length-1])

// const inititem=new Items(divitems[divitems.length-1].childNodes[1].innerHTML.trim())

// divitems[0].objectelement=inititem;
// cart.push(inititem)



const ullist=document.querySelector('#ullist')
const qty=document.querySelector('.nos')
const addNewItem=document.querySelector('#addnewitem button')



ullist.addEventListener('click',function(e){
	let clickOn=e.target.className;
	let objel=e.target.parentElement.parentElement.objectelement;
	
	if(clickOn=='plus'){
		objel.qty+=1
		e.target.previousElementSibling.innerHTML=objel.qty;
	}
	else if(clickOn=='minus'){
		objel.qty=objel.qty==0?0:objel.qty-1;
		e.target.nextElementSibling.innerHTML=objel.qty;
	}
	else if(clickOn=='starred'){
		e.target.childNodes[0].classList.toggle('far')
		e.target.childNodes[0].classList.toggle('fas')
		objel.isStarred=!(objel.isStarred);
	}
	else if(clickOn=='remove'){
		console.dir(e.target)
		let toRemove=e.target.parentElement.parentElement;
		cart.forEach(function(item,index,arr){
			if(item.itemname==`${toRemove.childNodes[1].innerHTML}`){
				arr.splice(index,1);
			}
		});
		toRemove.remove();

		if(cart.length==0){
			let initdiv=document.createElement('div')
			initdiv.id='init';
			let initext=document.createTextNode('Cart is empty!')
			initdiv.append(initext)

			let cont=document.querySelector('#container')
			cont.insertBefore(initdiv,cont.firstChild)
		}
	}
})


async function getName(){
	let newName= await fetch('https://animechan.vercel.app/api/random')
      					.then(response => response.json())
      					.then(quotes => quotes)
    return newName;
}



addNewItem.addEventListener('click',async ()=>{
	if(cart.length==0){
		document.querySelector('#init').remove()
	}

	let newli=document.createElement('li')

	let itemsdiv=document.createElement('div')
	itemsdiv.classList.add('items')


	let imgdiv=document.createElement('div')
	imgdiv.classList.add('imgdiv')
	let imgnode=document.createElement('img')
	imgnode.src='desk.jpeg'
	imgdiv.append(imgnode)


	let itemnamediv=document.createElement('div')
	itemnamediv.classList.add('itemname')
	let {anime,quote,character}=await getName();
	let newitemname=document.createTextNode(`${anime}`)
	itemnamediv.append(newitemname)


	let qtydiv=document.createElement('div')
	qtydiv.classList.add('quantitydiv')

	let minusbutton=document.createElement('button')
	minusbutton.classList.add('minus')
	let minusi=document.createElement('i')
	minusi.classList.add('fas','fa-minus')
	minusbutton.append(minusi)

	let spannos=document.createElement('span')
	let spantext=document.createTextNode('0')
	spannos.append(spantext)
	spannos.classList.add('nos')

	let plusbutton=document.createElement('button')
	plusbutton.classList.add('plus')
	let plusi=document.createElement('i')
	plusi.classList.add('fas','fa-plus')
	plusbutton.append(plusi)

	qtydiv.append(minusbutton)
	qtydiv.append(spannos)
	qtydiv.append(plusbutton)



	let starrediv=document.createElement('div')
	starrediv.classList.add('starreddiv')

	let starredbutton=document.createElement('button')
	starredbutton.classList.add('starred')
	let starredi=document.createElement('i')
	starredi.classList.add('far','fa-star')
	starredbutton.append(starredi)

	starrediv.append(starredbutton)



	let removediv=document.createElement('div')
	removediv.classList.add('removediv')

	let removebutton=document.createElement('button')
	removebutton.classList.add('remove')
	let removei=document.createElement('i')
	removei.classList.add('fas','fa-trash')
	removebutton.append(removei)

	removediv.append(removebutton)


	itemsdiv.append(imgdiv)
	itemsdiv.append(itemnamediv)
	itemsdiv.append(qtydiv)
	itemsdiv.append(starrediv)
	itemsdiv.append(removediv)


	newli.append(itemsdiv)
	ullist.append(newli)

	let newdivitems=document.querySelectorAll('.items')
	let newitem=new Items(newdivitems[newdivitems.length-1].childNodes[1].innerHTML.trim())
	newdivitems[newdivitems.length-1].objectelement=newitem;

	cart.push(newitem)
})
