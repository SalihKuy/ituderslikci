import { useState, useEffect } from "react";
import "./App.css";
import gb from "./assets/gb.png";
import tr from "./assets/tr.png";
import left from "./assets/left.png";

function App() {
  const [crnPages, setCrnPages] = useState({
    1: Array(12).fill(""),
    2: Array(12).fill(""),
    3: Array(12).fill(""),
  });
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("en");
  const [date, setDate] = useState("");
  const [isHelperOpen, setIsHelperOpen] = useState(false);
  const [helperStep, setHelperStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [token, setToken] = useState("");
  const [enrollmentResults, setEnrollmentResults] = useState(null);
  const [isEnrollmentInProgress, setIsEnrollmentInProgress] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isAutoLoginInProgress, setIsAutoLoginInProgress] = useState(false);

  useEffect(() => {
    if(date === "") return;
    const targetDate = new Date(date);
    const currentDate = new Date();
    const delay = targetDate - currentDate;

    const runPuppeteer = async () => {
      try {
        setIsEnrollmentInProgress(true);
        setEnrollmentResults(null);
        
        const results = await window.electronAPI.runPuppeteer(crnPages);
        
        setEnrollmentResults(results);
        setIsEnrollmentInProgress(false);
        
        const enrolledCount = results?.enrolled?.length || 0;
        const failedCount = results?.failed?.length || 0;
        const message = language === "en" 
          ? `Enrollment complete! Enrolled: ${enrolledCount}, Failed: ${failedCount}` 
          : `Ders seçimi tamamlandı! Alınan: ${enrolledCount}, Alınamayan: ${failedCount}`;
        alert(message);
      } catch (error) {
        console.error("Failed to run Puppeteer script:", error);
        setIsEnrollmentInProgress(false);
        setEnrollmentResults({
          enrolled: [],
          failed: [],
          error: error.message
        });
      }
    };

    if (delay > 0) {
      const timerId = setTimeout(() => {
        runPuppeteer();
      }, delay);

      return () => clearTimeout(timerId);
    }
  }, [date, crnPages, language]);

  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedCRNs = await window.electronAPI.loadCRNData();
        if (savedCRNs) {
          setCrnPages(savedCRNs);
        }

        const settings = await window.electronAPI.loadSettings();
        if (settings) {
          setPage(settings.page || 1);
          setLanguage(settings.language || "en");
          setDate(settings.date || "");
          setToken(settings.token || "");
        }
        console.log(settings);
      } catch (error) {
        console.error("Failed to load saved data:", error);
      } finally {
        setIsLoading(false);
        setIsInitialized(true);
      }
    };

    loadSavedData();
  }, []);

  async function saveCRNs() {
    try {
      await window.electronAPI.saveCRNData(crnPages);
      const message = language === "en" ? "Your CRNs have been saved." : "CRNlerin kaydedildi.";
      alert(message);
    } catch (error) {
      console.error("Failed to save CRNs:", error);
    }
  }

  useEffect(() => {
    if (!isInitialized) return;

    const saveSettings = async () => {
      try {
        const settings = {
          page: page || 1,
          language: language || "en",
          date: date || "",
          token: token || ""
        };
        await window.electronAPI.saveSettings(settings);
      } catch (error) {
        console.error("Failed to save settings:", error);
      }
    };

    const timeoutId = setTimeout(saveSettings, 300);
    return () => clearTimeout(timeoutId);
  }, [page, language, date, token, isInitialized]);

  function handleChange(id, e) {
    const value = e.target.value;
    setCrnPages(prev => ({
      ...prev,
      [page]: prev[page].map((item, index) => (index === id ? value : item)),
    }));
  }


  function startHelper() {
    let darkdiv = document.getElementById("dark");
    darkdiv.className = "darken";
    setIsHelperOpen(true);
  }

  function handleHelp() {
    if (!isHelperOpen) return;
    switch (helperStep) {
      case 0:
        document.getElementById("startChr").className = "highlighted-element";
        setHelperStep(1);
        break;
      case 1:
        document.getElementById("startChr").className = "";
        document.getElementById("crnInput").className = "highlighted-element";
        setHelperStep(2);
        break;
      case 2:
        document.getElementById("crnInput").className = "";
        document.getElementById("saveCRNs").className = "highlighted-element";
        setHelperStep(3);
        break;
      case 3:
        document.getElementById("saveCRNs").className = "";
        document.getElementById("dateTime").className = "highlighted-element";
        setHelperStep(4);
        break;
      case 4:
        document.getElementById("dateTime").className = "";
        document.getElementById("pageNav").className = "highlighted-element";
        setHelperStep(5);
        break;
      case 5:
        document.getElementById("pageNav").className = "";
        document.getElementById("dark").className = "";
        setIsHelperOpen(false);
        setHelperStep(0);
        break;
      default:
        break;
    }
  }

  function changeLanguage() {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    const message = newLanguage === "en" ? "Language changed to English." : "Dil Türkçeye çevrildi.";
    alert(message);
  }

  async function startChrome() {
    try {
      const retrievedToken = await window.electronAPI.getToken();
      setToken(retrievedToken);
      const message = language === "en" ? "Chrome has been launched and login successful." : "Chrome başlatıldı ve giriş başarılı.";
      alert(message);
    } catch (error) {
      console.error("Failed to start Chrome or save token:", error);
      const errorMessage = language === "en" 
        ? "Failed to save login credentials. Please close Chrome completely and try signing in again." 
        : "Giriş bilgileri kaydedilemedi. Lütfen Chrome'u tamamen kapatın ve tekrar giriş yapmayı deneyin.";
      alert(errorMessage);
      setToken("");
    }
  }

  function showLoginOptions() {
    setShowLoginModal(true);
  }

  function closeLoginModal() {
    setShowLoginModal(false);
    setLoginUsername("");
    setLoginPassword("");
  }

  async function handleAutomaticLogin() {
    if (!loginUsername || !loginPassword) {
      const message = language === "en" 
        ? "Please enter both username and password." 
        : "Lütfen kullanıcı adı ve şifre giriniz.";
      alert(message);
      return;
    }

    try {
      setIsAutoLoginInProgress(true);
      const retrievedToken = await window.electronAPI.getTokenWithCredentials(loginUsername, loginPassword);
      setToken(retrievedToken);
      setIsAutoLoginInProgress(false);
      closeLoginModal();
      
      const successMessage = language === "en" 
        ? "Automatic login successful!" 
        : "Otomatik giriş başarılı!";
      alert(successMessage);
    } catch (error) {
      console.error("Failed to login automatically:", error);
      setIsAutoLoginInProgress(false);
      const errorMessage = language === "en" 
        ? "Automatic login failed. Please check your credentials and try again." 
        : "Otomatik giriş başarısız. Lütfen bilgilerinizi kontrol edip tekrar deneyin.";
      alert(errorMessage);
      setToken("");
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="dark" onClick={handleHelp} style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div id="pageNav" style={{ width: "100%", height: "100px", backgroundColor: "#222222", display: "flex", alignItems: "center", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <button onClick={() => { if (page > 1) { setPage(page - 1); } }} style={{ width: 0, height: 0, borderBottom: "25px solid transparent", borderTop: "25px solid transparent", borderRight: "40px solid #3b82f6", cursor: "pointer", backgroundColor: "transparent", outline: "none", padding: 0, display: "block", position: "relative" }} />
          <div style={{ color: "white", padding: "20px" }}>{language == "en" ? "page " + page : "sayfa " + page}</div>
          <button onClick={() => { if (page < 3) { setPage(page + 1); } }} style={{ width: 0, height: 0, borderBottom: "25px solid transparent", borderTop: "25px solid transparent", borderLeft: "40px solid #3b82f6", cursor: "pointer", backgroundColor: "transparent", outline: "none", padding: 0, display: "block", position: "relative" }} />
        </div>
        <button onClick={changeLanguage} onMouseEnter={(e) => { e.target.style.backgroundColor = "#87cefa"; }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#1e90ff"; }} style={{ cursor: "pointer", width: "7%", borderRadius: "8px", height: "30%", minHeight: "50px", backgroundColor: "#1e90ff", color: "#000000", fontSize: "24px", transition: "background-color 0.3s ease", position: "absolute", right: "24px" }}><img src={language == "en" ? tr : gb} alt="Flag" style={{ height: "24px", marginRight: "8px" }} /></button>
      </div>
      <div id="crnInput" style={{ backgroundColor: "#444444", display: "flex", width: "100vw", height: "100vh" }}>
        <div style={{ display: "flex", flex: "1", flexDirection: "column", flexBasis: "200px", minWidth: "200px", height: "100%" }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ display: "flex", flex: "1", backgroundColor: "#222222", justifyContent: "center", alignItems: "center" }}>
              <input value={crnPages[page][i]} onChange={(e) => handleChange(i, e)} className="bord" type="text" placeholder={`CRN ${i + 1}`} style={{ width: "80%", borderRadius: "8px", height: "30%", minHeight: "50px", backgroundColor: "#333333", color: "#EEEEEE" }} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flex: "1", flexDirection: "column", flexBasis: "200px", minWidth: "200px" }}>
          {[...Array(4)].map((_, i) => (
            <div key={i + 4} style={{ display: "flex", flex: "1", backgroundColor: "#222222", justifyContent: "center", alignItems: "center" }}>
              <input value={crnPages[page][i + 4]} onChange={(e) => handleChange(i + 4, e)} className="bord" type="text" placeholder={`CRN ${i + 5}`} style={{ width: "80%", borderRadius: "8px", height: "30%", minHeight: "50px", backgroundColor: "#333333", color: "#EEEEEE" }} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flex: "1", flexDirection: "column", flexBasis: "200px", minWidth: "200px" }}>
          {[...Array(4)].map((_, i) => (
            <div key={i + 8} style={{ display: "flex", flex: "1", backgroundColor: "#222222", justifyContent: "center", alignItems: "center" }}>
              <input value={crnPages[page][i + 8]} onChange={(e) => handleChange(i + 8, e)} className="bord" type="text" placeholder={`CRN ${i + 9}`} style={{ width: "80%", borderRadius: "8px", height: "30%", minHeight: "50px", backgroundColor: "#333333", color: "#EEEEEE" }} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flex: "1", flexDirection: "column", flexBasis: "200px", minWidth: "200px" }}>
          <div id="saveCRNs" style={{ display: "flex", flex: "1", backgroundColor: "#222222", justifyContent: "center", alignItems: "center" }}>
            <button onClick={saveCRNs} onMouseEnter={(e) => { e.target.style.backgroundColor = "#87cefa"; }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#1e90ff"; }} style={{ cursor: "pointer", width: "80%", borderRadius: "8px", height: "30%", minHeight: "50px", backgroundColor: "#1e90ff", color: "#000000", fontSize: "24px", transition: "background-color 0.3s ease" }}>{language == "en" ? "Save CRNs" : "CRNleri Kaydet"}</button>
          </div>
          <div id="startChr" style={{ display: "flex", flex: "1", backgroundColor: "#222222", justifyContent: "center", alignItems: "center" }}>
            <button onClick={showLoginOptions} onMouseEnter={(e) => { e.target.style.backgroundColor = "#87cefa"; }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#1e90ff"; }} style={{ cursor: "pointer", width: "80%", borderRadius: "8px", height: "30%", minHeight: "50px", backgroundColor: "#1e90ff", color: "#000000", fontSize: "24px", transition: "background-color 0.3s ease" }}>{language == "en" ? "Login" : "Giriş Yap"}</button>
          </div>
          <div id="startHelper" style={{ display: "flex", flex: "1", backgroundColor: "#222222", justifyContent: "center", alignItems: "center" }}>
            <button onClick={startHelper} onMouseEnter={(e) => { e.target.style.backgroundColor = "#87cefa"; }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#1e90ff"; }} style={{ cursor: "pointer", width: "80%", borderRadius: "8px", height: "30%", minHeight: "50px", backgroundColor: "#1e90ff", color: "#000000", fontSize: "24px", transition: "background-color 0.3s ease" }}>{language == "en" ? "How Does It Work?" : "Nasıl Çalışır?"}</button>
          </div>
          <div id="dateTime" style={{ display: "flex", flex: "1", backgroundColor: "#222222", justifyContent: "center", alignItems: "center" }}>
            <input type="datetime-local" value={date} onChange={(e) => {
              setDate(e.target.value);
            }} style={{ width: "80%", borderRadius: "8px", height: "30%", minHeight: "50px", backgroundColor: "#333333", color: "#EEEEEE" }}></input>
          </div>
        </div>
      </div>
      
      {/* Enrollment Progress Indicator */}
      {isEnrollmentInProgress && (
        <div style={{ 
          position: "fixed", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          backgroundColor: "#333333", 
          color: "#EEEEEE", 
          padding: "20px", 
          borderRadius: "10px", 
          zIndex: "2000",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "18px", marginBottom: "10px" }}>
            {language === "en" ? "Enrollment in progress..." : "Ders seçimi devam ediyor..."}
          </div>
          <div style={{ fontSize: "14px" }}>
            {language === "en" ? "Please wait..." : "Lütfen bekleyin..."}
          </div>
        </div>
      )}
      
      {/* Enrollment Results Display */}
      {enrollmentResults && !isEnrollmentInProgress && (
        <div style={{ 
          position: "fixed", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          backgroundColor: "#333333", 
          color: "#EEEEEE", 
          padding: "20px", 
          borderRadius: "10px", 
          zIndex: "2000",
          maxWidth: "80%",
          maxHeight: "80%",
          overflow: "auto"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ margin: 0, color: "#87cefa" }}>
              {language === "en" ? "Enrollment Results" : "Ders Seçimi Sonuçları"}
            </h3>
            <button 
              onClick={() => setEnrollmentResults(null)}
              style={{ 
                backgroundColor: "#ff6b6b", 
                color: "white", 
                border: "none", 
                padding: "5px 10px", 
                borderRadius: "5px", 
                cursor: "pointer" 
              }}
            >
              ✕
            </button>
          </div>
          
          {enrollmentResults.error ? (
            <div style={{ color: "#ff6b6b", textAlign: "center" }}>
              <div style={{ fontSize: "16px", marginBottom: "10px" }}>
                {language === "en" ? "Error occurred:" : "Hata oluştu:"}
              </div>
              <div>{enrollmentResults.error}</div>
            </div>
          ) : (
            <div>
              {/* Success Section */}
              {enrollmentResults.enrolled && enrollmentResults.enrolled.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{ color: "#00ff00", margin: "0 0 10px 0" }}>
                    {language === "en" 
                      ? `Successfully Enrolled (${enrollmentResults.enrolled.length})` 
                      : `Başarıyla Alınan Dersler (${enrollmentResults.enrolled.length})`}
                  </h4>
                  {enrollmentResults.enrolled.map((course, index) => (
                    <div key={index} style={{ 
                      backgroundColor: "#444444", 
                      padding: "8px", 
                      margin: "5px 0", 
                      borderRadius: "5px",
                      borderLeft: "4px solid #00ff00"
                    }}>
                      <div style={{ fontWeight: "bold" }}>CRN: {course.crn}</div>
                      <div style={{ fontSize: "12px", color: "#cccccc" }}>
                        {language === "en" ? "Phase:" : "Aşama:"} {course.phase} | 
                        {language === "en" ? "Time:" : "Zaman:"} {new Date(course.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Failed Section */}
              {enrollmentResults.failed && enrollmentResults.failed.length > 0 && (
                <div>
                  <h4 style={{ color: "#ff6b6b", margin: "0 0 10px 0" }}>
                    {language === "en" 
                      ? `Failed to Enroll (${enrollmentResults.failed.length})` 
                      : `Alınamayan Dersler (${enrollmentResults.failed.length})`}
                  </h4>
                  {enrollmentResults.failed.map((course, index) => (
                    <div key={index} style={{ 
                      backgroundColor: "#444444", 
                      padding: "8px", 
                      margin: "5px 0", 
                      borderRadius: "5px",
                      borderLeft: "4px solid #ff6b6b"
                    }}>
                      <div style={{ fontWeight: "bold" }}>CRN: {course.crn}</div>
                      <div style={{ fontSize: "12px", color: "#cccccc" }}>
                        {language === "en" ? "Error:" : "Hata:"} {course.result?.resultCode || course.error} | 
                        {language === "en" ? "Priority:" : "Öncelik:"} {course.priority}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Summary */}
              <div style={{ 
                marginTop: "20px", 
                padding: "10px", 
                backgroundColor: "#555555", 
                borderRadius: "5px", 
                textAlign: "center" 
              }}>
                <div style={{ fontSize: "14px" }}>
                  {language === "en" 
                    ? `Total: ${(enrollmentResults.enrolled?.length || 0) + (enrollmentResults.failed?.length || 0)} courses processed`
                    : `Toplam: ${(enrollmentResults.enrolled?.length || 0) + (enrollmentResults.failed?.length || 0)} ders işlendi`}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {isHelperOpen && helperStep == 1 && <p src={left} alt="Icon" style={{ position: "absolute", top: "50%", left: "40%", transform: "translateY(-50%)", width: "200px", height: "160px", zIndex: "1000", color: "#333333", backgroundColor: "#87cefa", borderRadius: "10px", padding: "10px" }}>{language == "en" ? "First thing you need to do is exiting Chrome if it's already running. Then launch Chrome by pressing this button and log in to your itu account. If you don't get the login screen on your first press, close Chrome and press it again." : "İlk olarak yapman gereken Chrome açıksa kapamak. Sonra bu butona basarak Chrome'u başlatmak ve itü obs sitesine gidip hesabına giriş yapmak. Eğer butona ilk basışında itü giriş sayfası açılmazsa Chrome'u kapa ve butona tekrar bas."}</p>}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "22%", left: "23%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "44%", left: "23%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "66%", left: "23%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "88%", left: "23%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "22%", left: "48%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "44%", left: "48%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "66%", left: "48%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "88%", left: "48%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "22%", left: "73%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "44%", left: "73%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "66%", left: "73%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <img src={left} alt="Icon" style={{ position: "absolute", top: "88%", left: "73%", transform: "translateY(-50%)", height: "50px", zIndex: "1000" }} />}
      {isHelperOpen && helperStep == 2 && <p src={left} alt="Icon" style={{ position: "absolute", top: "50%", left: "40%", transform: "translateY(-50%)", width: "200px", height: "60px", zIndex: "1000", color: "#333333", backgroundColor: "#87cefa", borderRadius: "10px", padding: "10px" }}>{language == "en" ? "Then, you should input the CRNs of the courses you want to take here." : "Sonra buralara almak istediğin derslerin CRNlerini yazman gerek."}</p>}
      {isHelperOpen && helperStep == 3 && <p src={left} alt="Icon" style={{ position: "absolute", top: "50%", left: "40%", transform: "translateY(-50%)", width: "200px", height: "40px", zIndex: "1000", color: "#333333", backgroundColor: "#87cefa", borderRadius: "10px", padding: "10px" }}>{language == "en" ? "After that, click this button to save your CRNs." : "Sonra bu butona tıklayarak CRNlerini kaydet."}</p>}
      {isHelperOpen && helperStep == 4 && <p src={left} alt="Icon" style={{ position: "absolute", top: "50%", left: "40%", transform: "translateY(-50%)", width: "200px", height: "110px", zIndex: "1000", color: "#333333", backgroundColor: "#87cefa", borderRadius: "10px", padding: "10px" }}>{language == "en" ? "And then you should set the date and time of when course enrollment will be available for you. The program will enroll to the courses at the specified time." : "Son olarak, buraya ders seçiminin açılacağı tarih ve saati girmelisin. Bu sayede program belirlenen zamanda dersleri seçecek."}</p>}
      {isHelperOpen && helperStep == 5 && <p src={left} alt="Icon" style={{ position: "absolute", top: "50%", left: "40%", transform: "translateY(-50%)", width: language == "en" ? "200px" : "250px", height: "170px", zIndex: "1000", color: "#333333", backgroundColor: "#87cefa", borderRadius: "10px", padding: "10px" }}>{language == "en" ? "You can use these 2 buttons to switch pages. What the program does is it uses the CRNs at page 1 to enroll to the courses. Then it does the same for page 2 and 3 which you can use as a backup plan if it's not able to get the courses with the CRNs at page 1." : "Bu iki butonu sayfalar arasında geçiş yapmak için kullanabilirsin. İlk olarak program, 1. sayfadaki CRN'leri kullanarak dersleri seçer. Ardından 1. sayfadaki bütün dersleri alamayabileceğin için 2. ve 3. sayfadaki CRNler için de aynı işlemi yapar. 2. ve 3. sayfayı aynı derslerin farklı CRNleri için kullanabilirsin"}</p>}
      
      {/* Login Modal */}
      {showLoginModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2000
        }} onClick={(e) => {
          if (e.target === e.currentTarget) closeLoginModal();
        }}>
          <div style={{
            backgroundColor: "#333333",
            borderRadius: "15px",
            padding: "30px",
            width: "90%",
            maxWidth: "500px",
            color: "#EEEEEE"
          }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#87cefa" }}>
              {language === "en" ? "Choose Login Method" : "Giriş Yöntemi Seç"}
            </h2>
            
            {/* Manual Login Option */}
            <div style={{
              backgroundColor: "#222222",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "15px"
            }}>
              <h3 style={{ color: "#1e90ff", marginBottom: "10px" }}>
                {language === "en" ? "Manual Login" : "Manuel Giriş"}
              </h3>
              <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                {language === "en" 
                  ? "Chrome will open and you'll log in manually to your ITU account." 
                  : "Chrome açılacak ve ITU hesabınıza manuel olarak giriş yapacaksınız."}
              </p>
              <button 
                onClick={() => {
                  closeLoginModal();
                  startChrome();
                }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = "#87cefa"; }} 
                onMouseLeave={(e) => { e.target.style.backgroundColor = "#1e90ff"; }}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  borderRadius: "8px",
                  padding: "12px",
                  backgroundColor: "#1e90ff",
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "none",
                  transition: "background-color 0.3s ease"
                }}>
                {language === "en" ? "Launch Chrome" : "Chrome'u Başlat"}
              </button>
            </div>

            {/* Automatic Login Option */}
            <div style={{
              backgroundColor: "#222222",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "15px"
            }}>
              <h3 style={{ color: "#1e90ff", marginBottom: "10px" }}>
                {language === "en" ? "Automatic Login" : "Otomatik Giriş"}
              </h3>
              <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                {language === "en" 
                  ? "Enter your ITU credentials and the system will log in automatically." 
                  : "ITU bilgilerinizi girin, sistem otomatik olarak giriş yapacak."}
              </p>
              <input
                type="text"
                placeholder={language === "en" ? "Username" : "Kullanıcı Adı"}
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "#444444",
                  color: "#EEEEEE",
                  border: "1px solid #555555",
                  marginBottom: "10px",
                  fontSize: "14px",
                  boxSizing: "border-box"
                }}
              />
              <input
                type="password"
                placeholder={language === "en" ? "Password" : "Şifre"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "#444444",
                  color: "#EEEEEE",
                  border: "1px solid #555555",
                  marginBottom: "15px",
                  fontSize: "14px",
                  boxSizing: "border-box"
                }}
              />
              <button 
                onClick={handleAutomaticLogin}
                disabled={isAutoLoginInProgress}
                onMouseEnter={(e) => { if (!isAutoLoginInProgress) e.target.style.backgroundColor = "#87cefa"; }} 
                onMouseLeave={(e) => { if (!isAutoLoginInProgress) e.target.style.backgroundColor = "#1e90ff"; }}
                style={{
                  cursor: isAutoLoginInProgress ? "not-allowed" : "pointer",
                  width: "100%",
                  borderRadius: "8px",
                  padding: "12px",
                  backgroundColor: isAutoLoginInProgress ? "#666666" : "#1e90ff",
                  color: "#000000",
                  fontSize: "16px",
                  fontWeight: "bold",
                  border: "none",
                  transition: "background-color 0.3s ease",
                  opacity: isAutoLoginInProgress ? 0.7 : 1
                }}>
                {isAutoLoginInProgress 
                  ? (language === "en" ? "Logging in..." : "Giriş yapılıyor...") 
                  : (language === "en" ? "Login Automatically" : "Otomatik Giriş Yap")}
              </button>
            </div>

            {/* Cancel Button */}
            <button 
              onClick={closeLoginModal}
              disabled={isAutoLoginInProgress}
              onMouseEnter={(e) => { if (!isAutoLoginInProgress) e.target.style.backgroundColor = "#555555"; }} 
              onMouseLeave={(e) => { if (!isAutoLoginInProgress) e.target.style.backgroundColor = "#444444"; }}
              style={{
                cursor: isAutoLoginInProgress ? "not-allowed" : "pointer",
                width: "100%",
                borderRadius: "8px",
                padding: "12px",
                backgroundColor: "#444444",
                color: "#EEEEEE",
                fontSize: "16px",
                border: "none",
                transition: "background-color 0.3s ease",
                opacity: isAutoLoginInProgress ? 0.5 : 1
              }}>
              {language === "en" ? "Cancel" : "İptal"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;