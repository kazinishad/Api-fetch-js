const loadPhone = async () => {
    //api data load korar jonno oitar url (https://openapi.programming-hero.com/api/phones?search=iphone) copy kore fetch er moddhe past kore dite hbe r await dile aktu shmy nia load nite wait kora k bujhay.
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
   //fetch file er data json a convert korte hbe .display te dekhanor jonno .
    const data = await res.json();
    const phones = data.data;
    //console.log(phones);
    //paramitar hishabe call korte hbe
    diplayPhones(phones);
}
//kon section er vitor div gula banate hbe sheita ante hbe.
const phoneContainer = document.getElementById('phone-container');
//foreach dia function ta dici karon akta akta kore phone ashbe mane data akta akta kore ashbe.
const diplayPhones= phones =>{
    phones.forEach(phone=>{
        console.log(phone);
        //akta akta kore notun div bananor jonno creatElement dia div banante hbe.
        const phoneCard = document.createElement('div');
        //div er class add korar jonno classlist use korte hbe .html file a div er vitor j class gula ache oita copy kore ene dite hbe.
        phoneCard.classList = `card  bg-base-100 p-5 m-2 shadow-xl`;
        //tarpor div er vitor j html file gula ache oita add korar jonno innerHTML use korte hbe.tarpor div er vitor j file gula ache copy kore aikhane past korte hbe.r img add korar jonno src te daynamic vabe dolar sine dia scnd braket er moddhe phone er moddhe image ai likhte hbe. thik aki vabe phone er nam gula ante hbe.

         phoneCard.innerHTML = ` <figure><img src="${phone.image}" /></figure>
            <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>`;

        //append child dia display te add kora mane aishb html oi section a add hoya jaua.
        phoneContainer.appendChild(phoneCard);
        
    })
}


//data load kaj korar jonno function ta k call korte hbe.
loadPhone();



