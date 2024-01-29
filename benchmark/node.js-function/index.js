const Benchmark = require("benchmark");

// Test edilecek işlem
function addNumbers() {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    sum += i;
  }
  return sum;
}

// Benchmark testi oluşturma
const suite = new Benchmark.Suite();

// Test case ekleme
suite.add("Döngü ile Toplama", function () {
  addNumbers();
});

suite.add("Doğrudan Formül Kullanarak Toplama", function () {
  // 1'den 1000'e kadar olan sayıların toplamı formülle hesaplanabilir: n * (n + 1) / 2
  (1000 * (1000 + 1)) / 2;
});

// Test başladığında çalışacak kod
suite.on("start", function () {
  console.log("Benchmark başladı...");
});

suite.on("cycle", function (event) {
  console.log(String(event.target));
});

// Her test tamamlandığında çalışacak kod
suite.on("complete", function () {
  // console.log("En hızlı test:", this.filter("fastest").map("name"));

  this.forEach(function (bench) {
    // console.log(
    //   `${bench.name}: ${Math.max(bench.hz, 1).toFixed(2)} işlem/s, ${
    //     (1 / Math.max(bench.hz, 0.001)) * 1000
    //   } ms ortalama süre, ±${bench.stats.rme.toFixed(2)}% hata marjı`
    // );
    console.log("#########################");
    console.log(`Test Sonucu:                   ${bench.name}`);
    console.log(
      `Saniyedeki Işlem:              ${Math.max(bench.hz, 1).toFixed(
        2
      )} işlem/s`
    );
    console.log(
      "Ortalama Süre:                 " + bench.stats.mean.toFixed(15) + " ms"
    );
    console.log(
      "Standart Sapma:                " +
        bench.stats.deviation.toFixed(15) +
        " ms"
    );
    console.log(
      "Tutarlılık:                    " + bench.stats.variance.toFixed(15)
    );
    console.log(
      "Hata Marjı:                   ±" + bench.stats.moe.toFixed(15) + " %"
    );
    // console.log("Örnek Süreler:", bench.stats.sample);
    console.log("-------------------------");
  });
});

// Benchmark'ı çalıştırma
suite.run({
  cycles: 1, // döngü sayısı
  async: true,
});
