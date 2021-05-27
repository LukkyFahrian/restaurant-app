/* eslint-disable linebreak-style */
class HeadlineElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="news__content">
    <h2 tabindex="0" class="content__title">Berita Kuliner</h2>
        <article class="headline">
            <figure class="headline__figure">
                <img tabindex="0" src="./images/content/rendang.jpg" alt="Rendang">
                <figcaption>Xkz Re:stau - 2 May 2021</figcaption>
            </figure>
            <div class="headline__content">
                <h3 tabindex="0" class="headline__title">Rendang jadi Makanan No.1 Dunia</h3>
                <p tabindex="0" class="headline__description">Siapa pun pasti mengenal dan menyukai makanan rendang. Makanan asal Sumatera Barat ini berhasil mencuri hati masyarakat Indonesia dan juga warga dunia karena kelezatannya. Tak heran kalau hasil survei  menobatkan rendang sebagai salah satu makanan terenak di dunia. Namun, Menurut sejarahnya, rendang adalah makanan yang terbuat dari daging sapi yang direbus dengan aneka bumbu dan santan. Dikutip dari , ada arsip Belanda tentang Minangkabau yang menyatakan kontak reguler antara India dan Sumatera Barat pada awal milenium kedua. Disebutkan bahwa kombinasi antara daging dan rempah-rempah yang dikenal sebagai kari di India Utara, diyakini sebagai asaal usul rendang. 
                    <br><br>Jenis rendang ada bermacam-macam, dan jenisnya ini tergantung pada stok bahan dan kondisi lingkungan di daerah tertentu di Sumatera Barat. Beberapa jenis rendang di antaranya adalah rendang lokan (rendang kerang) dari Painan atau Pariaman; rendang belut (rendang belut) dari Batusangkar; rendang itik (rendang bebek) dan rendang jariang (rendang jengkol) dari Bukittinggi; rendang pensi (rendang kerang) dari kawasan Danau Maninjau; dan rendang daun kayu, rendang telur (rendang telur), rendang ayam (rendang ayam), rendang sapuluik itam (rendang ketan hitam), rendang tumbuak (rendang daging sapi berbentuk bulat), dan rendang telanjang (nasi ketan putih) rendang) dari Payakumbuh. Namun semua itu memiliki teknik memasak yang sama.
                    <br><br>Proses memasak rendang daging memang harus dilakukan secara lambat dan dalam waktu lama supaya segala macam bumbu, rempah, serta santan meresap secara sempurna. Dengan demikian, akan dihasilkan rendang yang benar-benar bercitarasa maksimal. Setidaknya ada tiga tingkatan dalam teknik memasak daging berbumbu dalam kuah santan untuk menghasilkan masakan yang terbasah, setengah basah, hingga yang paling kering. Olahan terbasah biasa disebut gulai yang memang masih memiliki kuah santan, di tingkatan kedua ada kalio atau yang kerap disebut rendang basah, dan yang ketiga benar-benar kering yang merupakan ciri khas rendang asli Minangkabau.
                </p>
                <div class="btn_headline">
                    <button aria-label="read more button" class="headline__button">Read More</button>
                </div>
            </div>
        </article>
    </div>
      `;
  }
}

customElements.define('headline-element', HeadlineElement);
