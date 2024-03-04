useEffect	| ilk yüklendiğinde veya secilen veri güncellendiğinde calışır

useState	| genel değişken veri tutma
useRef		| render edilmeyecek değişmeyecek sabit veriler ve dom elementlerini depolamak için
useReducer	| komplike yapılar için coklu state bir arada tutma
useContext	| global state
useMemo		| Yavaş hesaplamaların sonuçlarını önbelleğe almak için
useCallback	| Component'ler arasında fonksiyonları referans olarak paylaşmak için

ek kütüphane
useSWR		| bir istekte bulunulduğunda önbelleğe alınmış son veriyi (stale) hemen gösterir ve ardından arkada planda yeni veriyi alır (revalidate).


react redux 				- durum yönetimi 	state
react redux RTK Query (redux toolkit)	- veri yönetimi için redux eklentisi
react query 				- veri yönetimi 	api için kullanılır