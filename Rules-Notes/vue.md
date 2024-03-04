name				| Componente isim tanımlama, hata ayıklama ve cakışma için kullanır.
props				| Componentler arası veri aktarımı için kullanır.		
mixins				| Import edilen componentin data, computed, methods... gibi özelliklerini aynı şekilde kullanılabilmek için

data	 			| State oluşturmak için vue 2.
ref				| State oluşturmak için vue 3, DOM elementi için kullanır.
computed 			| Belirlenen veri değiştiği zaman tekrar calışır. (başka verilere dayalı olarak çalışan işlemler) sepet hesaplama vs

created 			| Bileşenin oluşturulma aşamasında gereken işlemleri yapmak için
mounted				| DOM'a eklenmeden önce yapılması gereken işleri yapmak için kullanır.
onMounted			| DOM'a eklendikten sonra yapılması gereken işleri yapmak için kullanır.

watch 				| Bileşeninizin state'indeki değişiklikleri izlemek için kullanılır. (bir veya daha fazla verilrde değişiklik olduğunda) api vs

methods 			| Bileşeninizin işlevlerini tanımlamak için kullanılır.

components			| Componentleri eklemek için

v-model 			| Bir form öğesinin değerini bileşeninizin state'i ile bağlamak için kullanılır. (input value sini state bağlama)
v-for 				| Bir dizi öğesini bir şablona listelemek için kullanılır.
v-if, v-else, v-else-if		| Öğelerin görünürlüğünü ve davranışını kontrol etmek için kullanılır.
v-on				| Click gibi işlemler için olay dinleyici
v-bind	 			| Değişkenlerden veya bileşen özelliklerinden değerleri almak ve HTML özelliklerine bağlamak için kullanılır. Örneğin, v-bind:href.
v-show				| Bir ifade doğru olduğunda bir öğeyi görüntüler veya gizler.(CSS display)
v-text		 		| Öğenin içeriğini bir veri değişkenine bağlar.
v-html 				| HTML içeriğini veri değişkenine bağlar. Ancak, v-html kullanırken dikkatli olunmalıdır, güvenlik riskleri oluşturabilir.

v-pre				| HTML elementinin içeriğinin derlenmesini engeller. Statik iceriklerde kullınılır
v-cloak				| Sayfa yüklenme işlemi tamamlanana kadar elementi gizler.
v-once				| Bir kere calışmasını sağlar

v-slot				| Bu, bir bileşenin içeriğini belirli bir yerde yerleştirmek için kullanılır. Bu, özellikle bileşenler arasında veri veya içerik iletmek için kullanılır.


event modifiers
.stop		@click.stop 	| İç içe @click eventinde alt elementeki @click tetiklendiğinde ebeveyin etkilenmez
.prevent	@submit.prevent	| Form gibi elementlerin varsayılan özeliklerini değiştirmek için sayfa yenilemez
.once		@click.once	| Bir kere calışmasını sağlar
.capture	@click.capture	| Ebeveyin elemente tıklandığında cocuk element etkilenmesi için
.self		@click.self	| Ebeveyin elemente tıklandığında cocuk element etkilenmez
.passive	@		| Tarayıcının davranışını değiştirerek performans sağlar scrol takibi kapatma gibi 


pinia storage yönetim