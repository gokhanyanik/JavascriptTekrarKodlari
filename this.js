let kisi = {
    ad: "gökhan",
    soyad: "yanik",
    ad_soyad: function () {
        return this.ad + " " + this.soyad; // this ile nesneyi referans göstermiş olduk
    }                                      // this yerine nesnenin ismini de kullanabilirdik.
}
console.log(kisi.ad_soyad())