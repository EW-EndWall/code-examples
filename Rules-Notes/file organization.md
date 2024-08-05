src/
|-- assets/                         Uygulamanın kullandığı medya dosyalarını içerir (resimler, videolar, vb.).
|   |-- logo.png
|   |-- banner.jpg
|   |-- background.jpg
|   |-- icon.svg
|   |-- video.mp4
|   |-- animations/
|       |-- loadingAnimation.gif
|       |-- successAnimation.json
|-- auth/                           Kimlik doğrulama ve yetkilendirme ile ilgili işlemleri içerir.
|   |-- login.js
|   |-- register.js
|   |-- forgotPassword.js
|   |-- resetPassword.js
|   |-- refreshToken.js
|-- bin/                            Uygulama giriş noktalarını içerir.
|   |-- start.js
|   |-- stop.js
|   |-- restart.js
|   |-- setup.js
|   |-- cli.js
|-- cache/                          Önbellekleme ile ilgili işlemleri içerir.
|   |-- redisCache.js
|   |-- memoryCache.js
|   |-- cacheMiddleware.js
|   |-- cacheUtils.js
|   |-- cacheConfig.js
|-- config/                         Uygulama yapılandırma dosyalarını içerir.
|   |-- config.js
|   |-- database.js
|   |-- server.js
|   |-- appConfig.js
|   |-- mailConfig.js
|-- constants/                      Uygulamanın genelinde kullanılan sabit değerleri içerir.
|   |-- errorMessages.js
|   |-- statusCodes.js
|   |-- regexPatterns.js
|   |-- roles.js
|   |-- settings.js
|-- controllers/                    İstemci isteklerini alır, iş akışını başlatır ve yanıtları oluşturur.
|   |-- userController.js
|   |-- authController.js
|   |-- productController.js
|   |-- orderController.js
|   |-- profileController.js
|-- crons/                          Zamanlanmış görevleri (cron job) içerir.
|   |-- cleanup.js
|   |-- sendReports.js
|   |-- dailyBackup.js
|   |-- weeklySummary.js
|   |-- notificationCron.js
|-- docs/                           Proje dökümantasyonunu içerir.
|   |-- api-docs.md
|   |-- architecture.md
|   |-- readme.md
|   |-- contributing.md
|   |-- changelog.md
|-- email/                          E-posta şablonlarını ve ilgili işlemleri içerir.
|   |-- welcomeEmail.js
|   |-- resetPasswordEmail.js
|   |-- verificationEmail.js
|   |-- notificationEmail.js
|   |-- promotionEmail.js
|-- exceptions/                     Özel hata ve istisna sınıflarını içerir.
|   |-- UserNotFoundException.js
|   |-- AuthenticationException.js
|   |-- ValidationException.js
|   |-- DatabaseException.js
|   |-- NotFoundException.js
|-- handlers/                       Belirli işlemleri veya veri işlemlerini yönetir, genellikle bir kontrolör tarafından çağrılır.
|   |-- userHandlers.js
|   |-- authHandlers.js
|   |-- productHandlers.js
|   |-- orderHandlers.js
|   |-- notificationHandlers.js
|-- helpers/                        Yardımcı fonksiyonları içerir.
|   |-- dateHelper.js
|   |-- stringHelper.js
|   |-- numberHelper.js
|   |-- arrayHelper.js
|   |-- objectHelper.js
|-- integrations/                   Üçüncü taraf servislerle entegrasyonları içerir.
|   |-- paymentGateway.js
|   |-- smsService.js
|   |-- externalApi.js
|   |-- oauthIntegration.js
|   |-- socialMediaIntegration.js
|-- locales/                        Uluslararasılaştırma (i18n) ve yerelleştirme (l10n) dosyalarını içerir.
|   |-- en.json
|   |-- tr.json
|   |-- de.json
|   |-- fr.json
|   |-- es.json
|-- logs/                           Uygulama log dosyalarını içerir.
|   |-- app.log
|   |-- errors.log
|   |-- requests.log
|   |-- db.log
|   |-- security.log
|   |-- archive/
|       |-- 2024-07-01-app.log
|       |-- 2024-06-30-errors.log
|       |-- 2024-06-29-requests.log
|       |-- 2024-06-28-db.log
|       |-- 2024-06-27-security.log
|-- middlewares/                    Orta katman yazılımlarını içerir.
|   |-- authMiddleware.js
|   |-- errorHandler.js
|   |-- rateLimiter.js
|   |-- requestLogger.js
|   |-- corsMiddleware.js
|-- migrations/                     Veritabanı geçiş dosyalarını içerir.
|   |-- 001_create_users_table.js
|   |-- 002_add_index_to_email.js
|   |-- 003_create_products_table.js
|   |-- 004_create_orders_table.js
|   |-- 005_create_profiles_table.js
|-- models/                         Veri modelleri.
|   |-- userModel.js
|   |-- authModel.js
|   |-- productModel.js
|   |-- orderModel.js
|   |-- profileModel.js
|-- notifications/                  Bildirim sistemleri ile ilgili dosyaları içerir (örneğin, push bildirimleri).
|   |-- pushNotifications.js
|   |-- emailNotifications.js
|   |-- smsNotifications.js
|   |-- inAppNotifications.js
|   |-- notificationUtils.js
|-- patches/                        Uygulama yamalarını içerir.
|   |-- fixUserModel.js
|   |-- patchOrderService.js
|   |-- updateAuthPlugin.js
|   |-- refactorProfileHandler.js
|   |-- optimizeCache.js
|-- plugins/                        Eklentilerini içerir.
|   |-- dbPlugin.js
|   |-- authPlugin.js
|   |-- loggerPlugin.js
|   |-- cachePlugin.js
|   |-- monitoringPlugin.js
|-- prototypes/                     Prototip ve deneysel kodları içerir.
|   |-- newFeaturePrototype.js
|   |-- experimentalAlgorithm.js
|   |-- proofOfConcept.js
|   |-- tempUtility.js
|   |-- sandboxTest.js
|-- public/                         Statik dosyaları içerir.
|   |-- index.html
|   |-- styles.css
|   |-- main.js
|   |-- favicon.ico
|   |-- robots.txt
|-- routes/                         Url yollarını tanımlamaları.
|   |-- userRoutes.js
|   |-- authRoutes.js
|   |-- productRoutes.js
|   |-- orderRoutes.js
|   |-- profileRoutes.js
|-- scripts/                        Proje ile ilgili yardımcı betikleri içerir.
|   |-- deploy.js
|   |-- backup.js
|   |-- setupDatabase.js
|   |-- generateDocs.js
|   |-- startServer.js
|-- schemas/                        JSON şemalarını içerir.
|   |-- userSchema.js
|   |-- authSchema.js
|   |-- productSchema.js
|   |-- orderSchema.js
|   |-- profileSchema.js
|-- seeders/                        Veritabanı başlangıç verilerini içerir.
|   |-- userSeeder.js
|   |-- roleSeeder.js
|   |-- productSeeder.js
|   |-- orderSeeder.js
|   |-- profileSeeder.js
|-- services/                       İş mantığı ve veri işleme.
|   |-- userService.js
|   |-- authService.js
|   |-- productService.js
|   |-- orderService.js
|   |-- profileService.js
|-- stores/                         Veri depolama katmanları ile ilgili işlemleri içerir.
|   |-- userStore.js
|   |-- productStore.js
|   |-- orderStore.js
|   |-- cacheStore.js
|   |-- sessionStore.js
|-- tasks/                          Arka plan görevleri ve işleme fonksiyonlarını içerir.
|   |-- imageProcessing.js
|   |-- dataMigration.js
|   |-- reportGeneration.js
|   |-- cleanupOldRecords.js
|   |-- dataSync.js
|-- tests/                          Test dosyalarını içerir.
|   |-- user.test.js
|   |-- auth.test.js
|   |-- product.test.js
|   |-- order.test.js
|   |-- profile.test.js
|-- utils/                          Yardımcı ve ortak fonksiyonlar.
|   |-- validate.js
|   |-- userDataProcessing.js
|   |-- tokenUtils.js
|   |-- hashUtils.js
|   |-- emailUtils.js
|-- views/                          Sunucu tarafından oluşturulan HTML şablonlarını içerir.
|   |-- home.ejs
|   |-- profile.ejs
|   |-- dashboard.ejs
|   |-- login.ejs
|   |-- register.ejs
|-- websockets/                     WebSocket bağlantılarını ve işlevlerini içerir.
|   |-- chatSocket.js
|   |-- notificationSocket.js
|   |-- liveUpdateSocket.js
|   |-- gameSocket.js
|   |-- supportSocket.js
|-- index.js
|-- server.js
