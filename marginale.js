// declaration des variables
let select=document.querySelector('select');
let input=document.querySelectorAll('.dis');

let text_ar=document.querySelector('.text_ar');
let text_fr=document.querySelector('.text_fr');


let publie=document.querySelector('.publie');
let prenom_fr=document.querySelector('.prenom_fr');
let prenom_ar=document.querySelector('.prenom_ar');
let mari_fr=document.querySelector('.mari_fr');
let mari_ar=document.querySelector('.mari_ar');
let nom_fr=document.querySelector('.nom_fr');
let nom_ar=document.querySelector('.nom_ar');

let tribunal_fr=document.querySelector('.tribunal_fr');
let tribunal_ar=document.querySelector('.tribunal_ar');
let numero=document.querySelector('.numero');
let genre=document.querySelector('.genre');
let deces=document.querySelector('.deces');

let commune_fr=document.querySelector('.commune_fr');
let commune_ar=document.querySelector('.commune_ar');
let pere_fr=document.querySelector('.pere_fr');
let pere_ar=document.querySelector('.pere_ar');

let mere_fr=document.querySelector('.mere_fr');
let mere_ar=document.querySelector('.mere_ar');
let rediger=document.querySelector('.rediger');

let h1_ar=document.querySelector('.h1_ar');
let h1_fr=document.querySelector('.h1_fr');
 
let text_scroll=document.querySelector('.ss');
let convertir=document.querySelector('.convertir');
let manuelle=document.querySelector('.manue');
let mar_mariage=document.querySelectorAll('.attestation_mariage');


console.log(select)
 let name_class;

//construction function event
let text_marginal=(e)=>
    {
        if(name_class==='attestation_mariage')
            {console.log('hey')
            text_ar.textContent=` تزوج ${prenom_ar.value} ب السيدة بمقتضى الرسم رقم ${numero.value} بتاريخ ${publie.value} المخاطب عليه من طرف قاضي المحكمة الإبتدائية ل ${tribunal_ar.value} حرر بتاريخ ${rediger.value} `;
            text_fr.textContent=`Confirmation de mariage n°${numero.value}.endatedu…….
                                    transcrite au registre de conservationn°………………..
                                    Entre Mr (prénom et nom) et Mme ${prenom_fr.value} ${nom_fr.value}
                                    inscrite sur acte de naissance
                                    nannée :2022.Commune de :${tribunal_fr.value}.
                                    Fait le :${rediger.value}.
                                    ` 
            }
        text_scroll.scrollIntoView({behavior:"smooth"});
    }

let ecrire=(e)=>{
    if(name_class){
        var text_dec_fr=document.querySelector('.text_dec_fr');
        var text_dec_ar=document.querySelector('.text_dec_ar');
        console.log(text_dec_fr);
        /*
         if(name_class==='attestation_mariage')
           {
                  text_dec_ar.textContent="بيان الزواج";
                  text_dec_fr.value='déclaration Mariage';
           }
         if(name_class==='divorce_acte')
            {
               text_dec_ar.value="بيان طلاق عن طريق رسم";
               text_dec_fr.value="declaration divorce par acte";
            }
        
        //type deces_ne
         if(name_class==='deces_ne')
            {
               text_dec_ar.value="بيان وفاة الزوج(ة)";
               text_dec_fr.value="Déclaration de décès";
            }  
            */
        input.forEach(element => {
            element.removeAttribute('disabled');
            element.setAttribute("disabled",'')
           
        });
        text_scroll.scrollIntoView({behavior:"smooth"});
        text_ar.removeAttribute('disabled');
        text_fr.removeAttribute('disabled');
    }
    else{
        alert("المرجو تحديد نوع البيان الهامشي")
        }
    }
let changer_margina=function(e)
    {   
        text_ar.setAttribute('disabled','');
         name_class=e.target.value;
        input.forEach(element => {
            element.removeAttribute('disabled');
            element.setAttribute("disabled",'')
           
        });
        //type mariage
        if(name_class === 'attestation_mariage')
            {
                mar_mariage.forEach(ele=>{
                ele.removeAttribute('disabled');
                h1_ar.textContent='بيان الزواج';
                h1_fr.textContent=' déclaration Mariage';
                })
            }
        // type divorce_acte
        if(name_class==='divorce_acte')
            {
               let divorce_acte=document.querySelectorAll('.divorce_acte');
               divorce_acte.forEach(ele=>{
                   ele.removeAttribute('disabled');
                   h1_ar.textContent="بيان طلاق عن طريق رسم";
                   h1_fr.textContent="declaration divorce par acte";
               }) 
            }
        
        //type deces_ne
         if(name_class==='deces_ne')
            {
               let divorce_acte=document.querySelectorAll('.deces_ne');
               divorce_acte.forEach(ele=>{
                   ele.removeAttribute('disabled');
                   h1_ar.textContent="بيان وفاة الزوج(ة)";
                   h1_fr.textContent="Déclaration de décès";
               }) 
            }
        console.log(e.target.value);
        

    }

//declaration event
select.addEventListener('change',changer_margina)
convertir.addEventListener('click',text_marginal);
manuelle.addEventListener('click',ecrire);
let mariage='توفية الزوج(ة) بتاريخ ... و المسجلة وفاته(ا) تحت عدد بجماعة و حرر يوم ضابط الحالة المدنية بالتفويط ';

