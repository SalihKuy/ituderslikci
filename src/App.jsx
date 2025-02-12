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

  useEffect(() => {
    if(date === "") return;
    const targetDate = new Date(date);
    const currentDate = new Date();
    const delay = targetDate - currentDate;

    const runPuppeteer = async () => {
      try {
        await window.electronAPI.runPuppeteer(crnPages);
        await new Promise((resolve) => setTimeout(resolve, 100));
        await window.electronAPI.runPuppeteer(crnPages);
        await new Promise((resolve) => setTimeout(resolve, 100));
        await window.electronAPI.runPuppeteer(crnPages);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await window.electronAPI.runPuppeteer(crnPages);
        const message = language === "en" ? "The courses have been selected." : "Ders seçimi tamamlandı.";
        alert(message);
      } catch (error) {
        console.error("Failed to run Puppeteer script:", error);
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
      setToken(await window.electronAPI.getToken());
      const message = language === "en" ? "Chrome has been launched." : "Chrome başlatıldı.";
      alert(message);
    } catch (error) {
      console.error("Failed to start Chrome:", error);
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
            <button onClick={startChrome} onMouseEnter={(e) => { e.target.style.backgroundColor = "#87cefa"; }} onMouseLeave={(e) => { e.target.style.backgroundColor = "#1e90ff"; }} style={{ cursor: "pointer", width: "80%", borderRadius: "8px", height: "30%", minHeight: "50px", backgroundColor: "#1e90ff", color: "#000000", fontSize: "24px", transition: "background-color 0.3s ease" }}>{language == "en" ? "Launch Chrome" : "Chrome'u başlat"}</button>
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
      {isHelperOpen && helperStep == 1 && <p src={left} alt="Icon" style={{ position: "absolute", top: "50%", left: "40%", transform: "translateY(-50%)", width: "200px", height: "110px", zIndex: "1000", color: "#333333", backgroundColor: "#87cefa", borderRadius: "10px", padding: "10px" }}>{language == "en" ? "First thing you need to do is exiting Chrome if it's already running. Then launch Chrome by pressing this button and log in to your itu account." : "İlk olarak yapman gereken Chrome açıksa kapamak. Sonra bu butona basarak Chrome'u başlatmak ve itü obs sitesine gidip hesabına giriş yapmak."}</p>}
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
    </div>
  );
}

export default App;