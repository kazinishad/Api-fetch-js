//--------------------------------------//
const loadPhone = async (searchText) => {
    //api data load korar jonno oitar url (https://openapi.programming-hero.com/api/phones?search=iphone) copy kore fetch er moddhe past kore dite hbe r await dile aktu shmy nia load nite wait kora k bujhay. tarpor search button kaj korar jonno upore loadPhone async akta paramitar dite hbe r url er last j iphone lekha chilo oita  remove daynamic vabe oi paramitar ta dite hbe. 
    const res = await fetch(`  https://openapi.programming-hero.com/api/phones?search=${searchText}`);
   //fetch file er data json a convert korte hbe .display te dekhanor jonno .
    const data = await res.json();
    const phones = data.data;
    //console.log(phones);
    //paramitar hishabe call korte hbe
    diplayPhones(phones);
}
//-------------------------------------//



//------------------------------------//
//foreach dia function ta dici karon akta akta kore phone ashbe mane data akta akta kore ashbe.
const diplayPhones= phones =>{
//------------------------------------//
//kon section er vitor div gula banate hbe sheita ante hbe.
const phoneContainer = document.getElementById('phone-container');
//clear phone container cards before adding new cards mane 1st a iphone search korle iphone ashbe abr jodi samsung search kori tahole ihpone er cards gula shoray dibe r just samsung er cards gula display korbe  aita korar jonno  .textContent empty dite hbe.//
phoneContainer.textContent = '';
// jodi 10ta ba 12 tar beshi hoy tahole show all button ta dekha jabe r onno shmy dekha jabe nah.aita .slice diar por set korte hbe.aikhane condion dia bole dice j 12 tar beshi hole .remove('hidden') dia calsslist ta cole jabe r 12 tar kom hole .add('hidden') dia abr hide hoya jabe.
const showAllContainer = document.getElementById('show-all-container');
if(phones.length >12){
    showAllContainer.classList.remove('hidden');
}
else{
    showAllContainer.classList.add('hidden');
}
// jodi 1st 10 ta ba 12 ta phone ba data dekhate chai tahole .slice(0,10)/.slice(0,12) aivabe dite hbe. aikhane phones paramitar theke data gula ashtece tai phones k call kore .slice korte hbe.
phones = phones.slice(0,12);
//--------------------------------//
    
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
    //aikhane loading icon hide korar jonno false likhte hbe.
    toggleLoadingSpiner(false);
}
//----------------------------------//

//------------------------------------//
//handle search button added 
const handleSearch = () =>{
    toggleLoadingSpiner(true);
 const searchField = document.getElementById('search-field');
 const searchText = searchField.value;
 //console.log(searchText);
 
 //aita akdom upore ai function ta paramitar shoho call korte hbe tahole oi phone gula ba data gula search korle ashbe.
 loadPhone(searchText);

}
//------------------------------------------//

//------------------------------------//
//loading icon ta shb shmy dekhabe nah tai class name hidden dia rakhte hbe tarpor aikhane eshe akta call back function likhte hbe isloading akta paramitar nite hbe oita if condition a dite hbe.tarpor .remove('hidden') dia class ta shoray dile loading icon ta show hbe abr .add('hidden') dia hide kora hoy. tarpor handle search button er function er moddhe ai function ta call kore paramitar true dite hbe. tarpor upore .append er niche function ta call kore false likhte hbe. 
const toggleLoadingSpiner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }

}
//------------------------------------//

//data load kaj korar jonno function ta k call korte hbe.
//loadPhone();



