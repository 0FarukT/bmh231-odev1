# BMH231 Web Programlama - Ödev 1: Web Sunucusu

Bu proje, **BMH231 Web Programlama** dersi Ödev 1 kapsamında geliştirilmiş; Node.js dahili `http` modülü ve `dayjs` kütüphanesi kullanılarak yazılmış hafif ve bağımsız bir HTTP sunucusudur.

## Öğrenci Bilgileri
- **Ad Soyad:** Ömer Faruk Derelli
- **Öğrenci No:** 16008124067
- **Ders:** BMH231 Web Programlama

## Projenin Amacı
Node.js ortamında Express gibi harici web çatıları kullanılmadan, saf HTTP modülü ile sunucu mimarisini, yönlendirmeleri (routing), HTTP durum kodlarını (200, 404, 405), doğru `Content-Type` başlık yönetimini ve Git/GitHub sürüm kontrol süreçlerini uygulamalı olarak öğrenmektir.

## Desteklenen Yollar (Routes) ve Metotlar

| Yol (Route) | Metot | Durum Kodu | Yanıt Türü | Açıklama |
| :--- | :--- | :--- | :--- | :--- |
| `/` | GET | 200 OK | `text/html` | Ana sayfa; `/hakkimda` bağlantısını içerir. |
| `/hakkimda` | GET | 200 OK | `text/html` | Öğrenci tanıtım metni. |
| `/api/ders` | GET | 200 OK | `application/json` | Ders kodu, adı ve gününü içeren JSON verisi. |
| `/api/agep` | GET | 200 OK | `application/json` | AGEP teslim tarihi (01.11.2026) ve `dayjs` ile dinamik hesaplanan kalan gün sayısı. |
| *Diğer tüm yollar* | GET | 404 Not Found | `text/plain` | "Sayfa bulunamadı" düz metin uyarısı. |
| *GET dışı metotlar* | POST, PUT vb. | 405 Method Not Allowed | `text/plain` | "Yöntem Kabul Edilmiyor" mesajı ve `Allow: GET` başlığı. |

## Kurulum ve Çalıştırma Adımları

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları sırasıyla uygulayınız:

1. **Depoyu Klonlayın:**
   ```bash
   git clone [https://github.com/KULLANICI_ADIN/bmh231-odev1.git](https://github.com/KULLANICI_ADIN/bmh231-odev1.git)
   cd bmh231-odev1