class Samochod{
constructor(marka,model,cena,rocznik,spalanie){
    this.marka = marka;
    this.cena = cena;
    this.model = model;
    this.rocznik = rocznik;
    this.spalanie = spalanie;
}


wiek(){
const data = new Date();
const rok = data.getFullYear();
const wiekPojazdu = rok - this.rocznik;

    return 'Wiek pojazdu wynosi: ' + wiekPojazdu;


}
koszt(){
    
    const kosztPaliwa = 8.00;
    const spalanko = this.spalanie*kosztPaliwa;

    return 'Spalanie w aucie: ' + this.marka + 'wynosi: ' + spalanko;
}

}