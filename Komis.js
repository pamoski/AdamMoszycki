class Komis{
    constructor(nazwa){
   this.nazwa = nazwa;
   this.samochody = [];


    }
    dodajSamochod(auto){
    this.samochody.push(auto);
    }

    wyswietlSamochody(){

        const div = document.querySelector('div');
        //div.innerHTML = `<p>${this.samochody[0].marka}</p>`;
          div.innerHTML = ' ';
        this.samochody.forEach((auto) => {
        div.innerHTML += `<p>Marka: ${auto.marka}</p>`;
        div.innerHTML += `<p>Model: ${auto.model}</p>`;
        div.innerHTML += `<p>Cena: ${auto.cena}</p>`;
        div.innerHTML += `<p>Rocznik: ${auto.rocznik}</p>`;
        div.innerHTML += `<p>Spalanie: ${auto.spalanie}</p>`;
        div.innerHTML += `<hr>`;
        });
    }
}