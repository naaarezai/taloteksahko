# Talotek Sähkö Oy - Verkkosivuston Muokkausohje

Tämä ohje auttaa sinua muokkaamaan verkkosivuston sisältöä ilman ohjelmointiosaamista.

## 📁 Tiedostorakenne

```
taloteksahko/
├── indes.html      # Pääsivu (muokkaa tätä)
├── style.css       # Tyylit (älä muokkaa ellei tiedä mitä tekee)
├── script.js       # JavaScript (älä muokkaa)
├── img/            # KUVAT TÄHÄN KANSIOON
└── README.md       # Tämä ohje
```

## 🖼️ KUVIEN LISÄÄMINEN

### Vaihe 1: Tallenna kuvat `img` -kansioon
1. Luo kansio nimeltä **img** (jos ei ole olemassa)
2. Tallenna kuvat sinne, esim:
   - `img/referenssi1.jpg`
   - `img/referenssi2.jpg`
   - `img/projekti-lahti.jpg`

### Vaihe 2: Vaihda kuva HTML-koodissa
Etsi `indes.html` -tiedostosta kohta jossa lukee:
```html
<img src="https://images.unsplash.com/photo-..." alt="..." class="ref-image">
```

Vaihda se näin:
```html
<img src="img/referenssi1.jpg" alt="Projektin nimi" class="ref-image">
```

**TÄRKEÄÄ:** 
- Käytä pieniä kirjaimia tiedostonimissä
- Älä käytä ääkkösiä (ä→a, ö→o)
- Ei välilyöntejä, käytä viivaa: `ennen-jalkeen.jpg`

---

## 📞 PUHELINNUMERON VAIHTO

Sivustolla on **4 paikkaa** jossa puhelinnumero näkyy. Etsi koodista:

```html
<!-- VAIHDA PUHELINNUMERO: Muuta +358408278281 ja 040 827 8281 omaan numeroosi -->
```

**Vaihda MOLEMMAT:**
1. `tel:+358408278281` → `tel:+358SINUNNUMEROSI` (ei välilyöntejä!)
2. `040 827 8281` → `040 XXX XXXX` (näkyvä numero)

**Esimerkki:**
```html
<a href="tel:+358501234567" class="phone-link">📞 050 123 4567</a>
```

---

## ✉️ SÄHKÖPOSTIN VAIHTO

Etsi:
```html
<!-- VAIHDA SÄHKÖPOSTI -->
<a href="mailto:ragnar.vaher@taloteksahko.fi">ragnar.vaher@taloteksahko.fi</a>
```

Vaihda:
```html
<a href="mailto:OMATIEOSTISI@taloteksahko.fi">OMATIEOSTISI@taloteksahko.fi</a>
```

---

## 📍 OSOITTEEN VAIHTO

Etsi:
```html
<!-- VAIHDA OSOITE -->
<div><strong>TOIMISTO & OSOITE</strong>
    Saviruukinkatu 17, 15810 Lahti</div>
```

Muuta osoite omaksesi.

---

## 🕐 AUKIOLOAIKOJEN VAIHTO

Etsi:
```html
<!-- VAIHDA AUKIOLOAJAT -->
<div><strong>AUKIOLOAJAT</strong>
    Ma-Pe 07:00 - 16:00</div>
```

Muuta haluamaksesi, esim:
- `Ma-Pe 08:00 - 17:00`
- `Ma-Pe 08:00 - 16:00 | Viikonloput sopimuksen mukaan`

---

## 🏗️ REFERENSSIN LISÄÄMINEN/MUOKKAUS

### Olemassa olevan referenssin muokkaus

Etsi esim:
```html
<!-- REFERENSSI 1: Vaihda kuva, otsikko ja teksti -->
<div class="ref-card reveal">
    <img src="..." alt="..." class="ref-image">
    <div class="ref-content">
        <span class="ref-tag">Pientalot</span> <!-- Vaihda tagi -->
        <h3>Pientalojen sähköistykset</h3> <!-- Vaihda otsikko -->
        <p>Kuvaus tähän...</p> <!-- Vaihda kuvaus -->
    </div>
</div>
```

**Muokkaa:**
1. **Kuva:** `<img src="img/oma-kuva.jpg">`
2. **Tagi:** `<span class="ref-tag">Saneeraus</span>`
3. **Otsikko:** `<h3>Kerrostalon sähköistys, Lahti</h3>`
4. **Kuvaus:** `<p>Toteutimme 3-kerroksisen kerrostalon...</p>`

### Uuden referenssin lisääminen

1. Kopioi koko `<div class="ref-card reveal">...</div>` -lohko
2. Liitä se ennen tätä kohtaa:
```html
<!-- LISÄÄ UUSI REFERENSSI: Kopioi yllä oleva ref-card -lohko ja muokkaa tiedot -->
```
3. Muokkaa kuva, otsikko ja teksti
4. Tallenna

**Esimerkki 4. referenssistä:**
```html
<div class="ref-card reveal">
    <img src="img/projekti-nastola.jpg" alt="Nastolan projekti" class="ref-image">
    <div class="ref-content">
        <span class="ref-tag">Uudiskohde</span>
        <h3>Rivitalon sähköistys, Nastola</h3>
        <p>Uuden rivitalon täydellinen sähköistys älykkäillä ratkaisuilla.</p>
    </div>
</div>
```

---

## 💬 WHATSAPP-NUMERON VAIHTO

Etsi:
```html
<!-- WHATSAPP: Vaihda 358408278281 omaan numeroon -->
<a href="https://wa.me/358408278281" class="whatsapp-float" target="_blank">
```

**HUOM!** WhatsApp-linkissä:
- **POISTA** 0 numerosta
- **LISÄÄ** maakoodi 358

**Esimerkki:**
- Numerosi: `050 123 4567`
- WhatsApp-linkki: `https://wa.me/35850123456` (ei välilyöntejä!)

```html
<a href="https://wa.me/35850123456" class="whatsapp-float" target="_blank">
```

---

## 🛠️ PALVELUIDEN MUOKKAUS

Etsi palvelukortti jonka haluat muokata:
```html
<div class="service-card reveal">
    <span class="service-icon">🏠</span>
    <h3>Kodin sähkötyöt</h3>
    <ul>
        <li>Uudisrakennusten sähköistykset</li>
        <li>Remonttikohteiden sähkötyöt</li>
        ...
    </ul>
</div>
```

**Voit:**
- Muuttaa ikonia (emoji): 🏠, 🏢, ⚡, 🔧, 💡
- Muuttaa otsikkoa: `<h3>Otsikko tähän</h3>`
- Lisätä/poistaa rivejä listasta: `<li>Uusi palvelu</li>`

---

## 📊 GOOGLE-ARVOSTELUN PÄIVITYS

Etsi:
```html
<span>5/5 Googlessa (49 arvostelua)</span>
```

Vaihda luvut omiksi:
```html
<span>4.9/5 Googlessa (98 arvostelua)</span>
```

---

## 🌟 VINKKEJÄ

### Hyvät kuvakoot referensseihin:
- Leveys: vähintään 800px
- Korkeus: vähintään 600px
- Formaatti: JPG tai PNG
- Tiedostokoko: alle 500KB (pakkaa isot kuvat)

### Kuvien pakkaus (ilmaiseksi):
- [TinyPNG.com](https://tinypng.com) - pakkaa kuvia pienemmiksi
- [Squoosh.app](https://squoosh.app) - Google kuvankäsittely

### Ilmaiskuvat (jos tarvitset):
- [Unsplash.com](https://unsplash.com) - etsi "electrical work"
- [Pexels.com](https://pexels.com) - etsi "electrician"

---

## ⚠️ TÄRKEÄÄ MUISTAA

1. **Varmuuskopio ensin!** Kopioi `indes.html` turvaan ennen muutoksia
2. **Tallenna UTF-8 -merkistöllä** (säilyttää ääkköset)
3. **Testaa paikallisesti** avaamalla `indes.html` selaimessa
4. **Älä poista** `class="..."` tai `id="..."` attribuutteja
5. **Pidä HTML-tagit** (`<div>`, `</div>`) paikoillaan

---

## 🆘 ONGELMATILANTEET

### Sivu näyttää rikki
→ Palauta varmuuskopio ja yritä uudelleen hitaammin

### Ääkköset näkyvät väärin
→ Tallenna tiedosto UTF-8 -merkistöllä (Notepad: Tallenna nimellä → Encoding: UTF-8)

### Kuva ei näy
→ Tarkista:
- Onko kuva `img/` -kansiossa?
- Onko tiedostonimi oikein kirjoitettu?
- Onko tiedostopääte oikein (.jpg, .png)?

### WhatsApp-nappi ei toimi
→ Tarkista että numero on muodossa: `35850123456` (ei välilyöntejä, ei +, ei etunollaa)

---

## 📧 Tarvitsetko apua?

Jos kohtaat ongelmia, ota yhteyttä web-kehittäjään tai kysy apua!

**Onnea sivuston muokkaamiseen! 🚀**
